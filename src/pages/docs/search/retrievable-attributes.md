---
title: Retrievable attributes
description: Hit fields that will be used after retrieving.
---

Retrieve only the Hit fields that you are going to be used.

---

The reduce big unnecessary payload, it's wise to only retrieve attributes
that will be used after a Document matches a query.

Retrievable Attributes are defined in the Search settings.

[IMG]

It's common practice to send a query to Sigmie and retrieve **only** the Document `id` attribute.

Then once you have the matches ids returned from your Sigmie Search, you query your SQL Database for the returned ids.

For example, you send the following JSON payload to the Search endpoint, and you have set **only** the field `sql_id` as a retrievable attribute.

Then the retrieved Document attributes will look like this.

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

Then you can use the `sql_id` attribute to retrieve the **whole** Documents from your SQL database.

```sql
SELECT * FROM movies WHERE id IN (39)
```
