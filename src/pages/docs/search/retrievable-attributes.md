---
title: Retrievable attributes
description: Hit fields that will be used after retrieving.
---

Retrive only Hit fields that you are going to use.

---

The reduce unnecessary big payload it's wise to only retrieve attributes
that will be used after a Document matched a query.

It's common practise sending a query to Sigmie and to retrieve **only** the Document `id` attribute.

Then once you have the matches ids returned from your Sigmie Search, you query
your SQL Database for the returned ids.

For example your send the following json payload to the Search endpoint, and you have set
**only** the field `sql_id` as retrievable attribute.

then the retrieved Document attributes will look like this

```json
{
  "hits": {
    "dns3l4IBrbFU6hq5SC6R": {
      "_id": "dns3l4IBrbFU6hq5SC6R",
      "sql_id": 39
    }
    //...
  }
}
```

then your can use he `sql_id` attribute to retrieve the **whole** Documents from your SQL database.

```sql
SELECT * FROM movies WHERE id IN (39)
```
