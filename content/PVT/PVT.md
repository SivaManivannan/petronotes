---
tags:
  - Category
  - PVT
aliases:
---

```dataview
LIST rows.file.link
FROM "PVT"
WHERE !contains(tags, "Category")
SORT file.name ASC
GROUP BY choice(contains(tags, "OilGas"), "Oil-Gas",
        choice(contains(tags, "EoS"), "Equation of State",
        "Others"))

```
- Categories
	- [[Oil-Gas Phase Behavior]]