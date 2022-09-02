---
title: Searchable attributes
description: Attributes that contain match value
---

Omit attributes that the user won't search for.

---

 

Not all attributes are valuable when trying to find the perfect match.

For example, a user never writes the product **stock** in a search box.

For this reason, the Searchable and the Retrievable attributes are 2
**completely different** things.

Let's say you have the following Document.

```json
{
  "name": "The Lion King",
  "category": ["Musical", "Family"],
  "release_year": "1994",
  "duration_minutes": 87
}
```

it's unlikely that a user will type `87` and expect to find Disney movies which
duration is **87 minutes**.

In this case, it makes sense to omit the `duration_minutes` when defining the **Searchable** attributes on a Search-level.
