import { QuartzTransformerPlugin } from "../types"
import { PluggableList } from "unified"
import { visit } from "unist-util-visit"
import { Root, Code } from "mdast"
import { readFileSync, readdirSync, statSync } from "fs"
import { join } from "path"

export interface DataviewOptions {
  enableDataview: boolean
  contentPath?: string
}

const defaultOptions: DataviewOptions = {
  enableDataview: true,
  contentPath: "content",
}

interface FileInfo {
  filePath?: string
  slug?: string
  frontmatter?: {
    title?: string
    tags?: string[]
    [key: string]: any
  }
  [key: string]: any
}

function parseFrontmatter(content: string): { frontmatter: any; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)

  if (match) {
    const frontmatterStr = match[1]
    const contentStr = match[2]

    const frontmatter: any = {}
    const lines = frontmatterStr.split("\n")
    let currentKey: string | null = null
    let currentList: string[] | null = null

    for (const line of lines) {
      // Check for YAML list item (e.g. "  - value")
      const listItemMatch = line.match(/^\s+-\s+(.+)$/)
      if (listItemMatch && currentKey) {
        if (!currentList) {
          currentList = []
        }
        currentList.push(listItemMatch[1].trim().replace(/['"]$/g, "").replace(/^['"]/, ""))
        continue
      }

      // Flush previous list if we hit a new key
      if (currentKey && currentList) {
        frontmatter[currentKey] = currentList
        currentList = null
      }

      if (line.includes(":")) {
        const colonIndex = line.indexOf(":")
        const key = line.slice(0, colonIndex).trim()
        let value = line.slice(colonIndex + 1).trim()

        currentKey = key

        if (value === "" || value === null) {
          // Value may follow as a YAML list
          continue
        }

        // Handle inline arrays [a, b, c]
        if (value.startsWith("[") && value.endsWith("]")) {
          frontmatter[key] = value
            .slice(1, -1)
            .split(",")
            .map((v) => v.trim().replace(/['"]$/g, "").replace(/^['"]/, ""))
          currentKey = null
          continue
        }

        // Remove quotes if present
        if (
          (value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))
        ) {
          value = value.slice(1, -1)
        }

        frontmatter[key] = value
        currentKey = key
        currentList = null
      }
    }

    // Flush final list
    if (currentKey && currentList) {
      frontmatter[currentKey] = currentList
    }

    return { frontmatter, content: contentStr }
  }

  return { frontmatter: {}, content }
}

function getAllFiles(contentPath: string): FileInfo[] {
  try {
    const files: FileInfo[] = []

    function walkDirectory(dir: string) {
      try {
        const items = readdirSync(dir)

        for (const item of items) {
          const fullPath = join(dir, item)
          const stat = statSync(fullPath)

          if (stat.isDirectory()) {
            // Skip hidden directories, node_modules, and templates
            if (!item.startsWith(".") && item !== "node_modules" && item !== "templates") {
              walkDirectory(fullPath)
            }
          } else if (item.endsWith(".md")) {
            try {
              const content = readFileSync(fullPath, "utf-8")
              const { frontmatter } = parseFrontmatter(content)

              // Extract slug from filename
              const slug = item.replace(".md", "")

              files.push({
                filePath: fullPath,
                slug,
                frontmatter: {
                  ...frontmatter,
                  tags: frontmatter.tags
                    ? Array.isArray(frontmatter.tags)
                      ? frontmatter.tags
                      : [frontmatter.tags]
                    : [],
                },
              })
            } catch (error) {
              console.error(`Error reading file ${fullPath}:`, error)
            }
          }
        }
      } catch (error) {
        console.error(`Error reading directory ${dir}:`, error)
      }
    }

    walkDirectory(contentPath)
    return files
  } catch (error) {
    console.error("Error getting files:", error)
    return []
  }
}

// Recursively evaluate a nested choice() expression for a given file
function evaluateChoice(expr: string, file: FileInfo): string {
  // Match the outermost choice(contains(field, "value"), "trueResult", <falseExpr>)
  // falseExpr can be a quoted string or another choice(...)
  const choiceRegex = /^choice\(contains\((\w+),\s*"([^"]+)"\),\s*"([^"]+)",\s*([\s\S]+)\)$/
  const m = expr.trim().match(choiceRegex)
  if (!m) {
    // It's a plain string literal like "Others"
    return expr.trim().replace(/^"/, "").replace(/"$/, "")
  }

  const [, field, value, trueResult, falseExpr] = m
  const fieldValue = file.frontmatter?.[field] || []
  const tags = Array.isArray(fieldValue) ? fieldValue : [fieldValue]

  if (tags.includes(value)) {
    return trueResult
  }

  // Recurse into the false branch
  return evaluateChoice(falseExpr.trim(), file)
}

function evaluateWhereCondition(condition: string, file: FileInfo): boolean {
  const notContainsMatch = condition.match(/!contains\((\w+),\s*"([^"]+)"\)/)
  if (notContainsMatch) {
    const [, field, value] = notContainsMatch
    const fieldValue = file.frontmatter?.[field] || []
    const items = Array.isArray(fieldValue) ? fieldValue : [fieldValue]
    return !items.includes(value)
  }

  const containsMatch = condition.match(/contains\((\w+),\s*"([^"]+)"\)/)
  if (containsMatch) {
    const [, field, value] = containsMatch
    const fieldValue = file.frontmatter?.[field] || []
    const items = Array.isArray(fieldValue) ? fieldValue : [fieldValue]
    return items.includes(value)
  }

  return true
}

function parseDataviewQuery(query: string, files: FileInfo[]) {
  // Rejoin multi-line query into a single string for GROUP BY parsing
  const rawLines = query.trim().split("\n")
  const lines: string[] = []
  let accumulator = ""

  for (const raw of rawLines) {
    const trimmed = raw.trim()
    if (!trimmed) continue

    // Detect top-level keywords
    if (/^(LIST|TABLE|FROM|SORT|WHERE|GROUP BY|FLATTEN|LIMIT)\b/i.test(trimmed)) {
      if (accumulator) {
        lines.push(accumulator)
      }
      accumulator = trimmed
    } else {
      // Continuation of previous line (e.g. multi-line GROUP BY)
      accumulator += " " + trimmed
    }
  }
  if (accumulator) {
    lines.push(accumulator)
  }

  let fromPath = ""
  let sortBy: { field: string; direction: string } | null = null
  let groupByExpr: string | null = null
  let whereCondition: string | null = null
  let queryType = "LIST"

  for (const line of lines) {
    if (line.startsWith("FROM")) {
      fromPath = line.replace("FROM", "").trim().replace(/"/g, "")
    } else if (line.startsWith("SORT")) {
      const match = line.match(/SORT\s+([\w.]+)\s*(ASC|DESC)?/i)
      if (match) {
        sortBy = { field: match[1], direction: match[2]?.toUpperCase() || "ASC" }
      }
    } else if (line.startsWith("WHERE")) {
      whereCondition = line.replace("WHERE", "").trim()
    } else if (line.startsWith("GROUP BY")) {
      groupByExpr = line.replace("GROUP BY", "").trim()
    } else if (line.startsWith("LIST")) {
      queryType = "LIST"
    } else if (line.startsWith("TABLE")) {
      queryType = "TABLE"
    }
  }

  // Filter files based on FROM path
  let filteredFiles = files
  if (fromPath && fromPath !== "" && fromPath !== '"') {
    const normalizedFromPath = fromPath.replace(/\\/g, "/")
    filteredFiles = files.filter((file) => {
      const normalizedFilePath = file.filePath?.replace(/\\/g, "/") || ""
      // Match directory boundaries: ensure the path segment matches exactly
      return (
        normalizedFilePath.includes(`/${normalizedFromPath}/`) ||
        normalizedFilePath.includes(`/${normalizedFromPath}\\`) ||
        normalizedFilePath.endsWith(`/${normalizedFromPath}`) ||
        normalizedFilePath.endsWith(`\\${normalizedFromPath}`)
      )
    })
  }

  // Apply WHERE clause filtering
  if (whereCondition) {
    filteredFiles = filteredFiles.filter((file) => evaluateWhereCondition(whereCondition, file))
  }

  // Sort files — handle dotted fields like file.name
  if (sortBy) {
    filteredFiles.sort((a, b) => {
      let aVal: string
      let bVal: string
      if (sortBy!.field === "file.name") {
        aVal = a.slug || ""
        bVal = b.slug || ""
      } else {
        aVal = (a[sortBy!.field] || "").toString()
        bVal = (b[sortBy!.field] || "").toString()
      }
      const comparison = aVal.localeCompare(bVal)
      return sortBy!.direction === "DESC" ? -comparison : comparison
    })
  }

  // Group files if needed
  if (groupByExpr) {
    const groups: { [key: string]: FileInfo[] } = {}
    for (const file of filteredFiles) {
      const groupKey = groupByExpr.includes("choice") ? evaluateChoice(groupByExpr, file) : "Others"

      if (!groups[groupKey]) {
        groups[groupKey] = []
      }
      groups[groupKey].push(file)
    }

    return { type: queryType, groups, filteredFiles }
  }

  return { type: queryType, groups: null, filteredFiles }
}

// Build proper mdast nodes so headings and wikilinks render correctly
function buildMdastNodes(result: ReturnType<typeof parseDataviewQuery>): any[] {
  const nodes: any[] = []

  function makeWikilinkListItem(fileName: string): any {
    return {
      type: "listItem",
      spread: false,
      children: [
        {
          type: "paragraph",
          children: [
            {
              type: "link",
              url: fileName,
              children: [{ type: "text", value: fileName }],
              data: {
                hProperties: {
                  className: ["internal"],
                },
              },
            },
          ],
        },
      ],
    }
  }

  if (result.groups) {
    // Sort group keys so "Analysis" etc. come before "Others"
    const sortedKeys = Object.keys(result.groups).sort((a, b) => {
      if (a === "Others") return 1
      if (b === "Others") return -1
      return a.localeCompare(b)
    })

    for (const groupName of sortedKeys) {
      const groupFiles = result.groups[groupName] as FileInfo[]
      if (!groupFiles || groupFiles.length === 0) continue

      // Heading node
      nodes.push({
        type: "heading",
        depth: 2,
        children: [{ type: "text", value: groupName }],
      })

      // List node with items
      const listItems = groupFiles.map((f) => {
        const fileName = f.slug || "Untitled"
        return makeWikilinkListItem(fileName)
      })

      nodes.push({
        type: "list",
        ordered: false,
        spread: false,
        children: listItems,
      })
    }
  } else if (result.type === "LIST" && result.filteredFiles.length > 0) {
    const listItems = result.filteredFiles.map((f) => {
      const fileName = (f as FileInfo).slug || "Untitled"
      return makeWikilinkListItem(fileName)
    })

    nodes.push({
      type: "list",
      ordered: false,
      spread: false,
      children: listItems,
    })
  }

  return nodes
}

export const Dataview: QuartzTransformerPlugin<DataviewOptions> = (
  userOpts: DataviewOptions = defaultOptions,
) => {
  const opts = { ...defaultOptions, ...userOpts }

  return {
    name: "Dataview",
    markdownPlugins: () => {
      const plugins: PluggableList = []

      if (opts.enableDataview) {
        plugins.push(() => {
          return (tree: Root) => {
            visit(tree, "code", (node: Code, index: number | undefined, parent: any) => {
              if (node.lang === "dataview" && node.value) {
                try {
                  // Get all files for context
                  const allFiles = getAllFiles(opts.contentPath || "content")
                  const result = parseDataviewQuery(node.value, allFiles)
                  const newNodes = buildMdastNodes(result)

                  // Replace the dataview code block with the generated AST nodes
                  if (parent && typeof index === "number" && newNodes.length > 0) {
                    parent.children.splice(index, 1, ...newNodes)
                  }
                } catch (error) {
                  console.error("Error processing dataview query:", error)
                }
              }
            })
          }
        })
      }

      return plugins
    },
  }
}
