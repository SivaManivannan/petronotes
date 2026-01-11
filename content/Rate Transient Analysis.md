---
tags: Category
aliases:
  - RTA
---

[[Diagnostic]]

```dataview
LIST rows.file.link
FROM ""
SORT file.name ASC
GROUP BY choice(contains(tags, "Analysis"), "Analysis",
        choice(contains(tags, "Concept"), "Concepts",
        choice(contains(tags, "Inputs"), "Inputs",
        "Others")))

```
