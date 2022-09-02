---
title: Pagination
description: Paginate over the Search result hits.
---

Split the Search hits into pages.

---

## Limit

By default, Sigmie will return the first 20 matched Search results for a Query. You can customize this behavior in the Sigmie UI or using the API.

[IMG]

The pagination settings are configured on **Search** level.

### Change the default limit

In the **Pagination** section in your Search settings, you can change the
default pagination limit.

### Paginate over the API

When searching the API returns a response like this.

```JSON
{
  // ...
  "hits": [
    // ...
  ],
  "total": 30,
  "page": 1,
  "per_page": 20,
  "query": "disney"
}
```

You can use the `page` and `per_page` values to paginate over the found
search results.

In this example, we retrieved the **default** 20 Document hits. Now, if you want the fetch the second page with the **remaining** 10 Documents. You can send the following JSON:

```JSON
{
  "query": "disney",
  "page": 2
}
```

Of course, you can also change the `per_page` value.

```JSON
{
  // ...
  "per_page": 30
}
```
