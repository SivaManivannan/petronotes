---
tags: Category
aliases:
  - RTA
---

```dataview
LIST rows.file.link
FROM "RTA"
WHERE !contains(tags, "Category")
SORT file.name ASC
GROUP BY choice(contains(tags, "Analysis"), "Analysis",
        choice(contains(tags, "Concept"), "Concepts",
        choice(contains(tags, "Inputs"), "Inputs",
        "Others")))

```

- Categories:
  - [[Diagnostic]]
