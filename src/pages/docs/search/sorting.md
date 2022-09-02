---
title: Sorting
description: Hits sort settings
---

Sorting criteria for the Search hits.

---

On Search, the Hits are gettings a `_score` value that indicates how **good** the Document matches the given query.

The Document with the **highest** score comes first, and so on.

You can change this behavior on Search-level in the Sigmie UI.

 

## Attributes

You can specify the attributes that are taken into consideration when sorting
the Search hits in the Sigmie UI.

Let's say you have an index that contains documents in the following structure.

```json
{
  "name": "Toy Story",
  "category": ["Comedy", "Family"],
  "release_year": "1995",
  "duration_minutes": 81
}
```

You may want to first show the newest Documents. In this case, you can choose the `release_year` as a sorting attribute with the direction `Desc`.

Your Search **Hits** will be sorted by `release_year` **Ascending**. So the newest releases will be shown on top, ignoring the `_score` attribute.

### \_score

The `_score` attribute is a `float` assigned to Documents indicating how good each Document matches the query, and it's a part of the Hits `object`.

```json
{
  // ...
  "hits": {
    "AHs3l4IBrbFU6hq5SDCR": {
      // ...
      "_score": 1.3862942
    }
  }
}
```

#### How is \_score calculated

There are several factors that define the score rating.

1. **Term frequency**

   The more times a term appears in a Document, the higher its score will be.

1. **Inverse document frequency**

   If many Documents in the index contain the term, then the term is actually less important.

1. **Coordination**

   The more query terms in the Document, the higher it will be scored.

1. **Field length**

   A term found in a short field like `name` is more important than a term
   in a longer field like the `description` field.

1. **Field boost**

   A term found in a **boosted** attribute. See [ Tunning ](/docs/search/tuning) for more.

## Direction

Like everywhere, you can choose the sorting direction for your Hits.

### Asc

The `Asc` direction shorts the Hits in **Ascending** order. So if the sorting attribute is a number, then the Documents with the **lowest** will come first.

### Desc

The `Desc` direction shorts the Hits in **Descending** order.
So if the sorting attribute is a `number`, then the Documents with the **highest** `number` will be on top.
