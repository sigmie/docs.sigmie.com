---
title: Searching
description: Find Document matches in an Index
---

Searching is the process of finding **Hits** for a given Query.

---

Once you have set up your **Index** and a **Search** for your Index, you can start sending HTTP requests containing user **Queries**, and receive matched **Hits**.

{% callout type="info" title="Index Searches" %}
Every time an new Index is created there is also a new Search with the same name making
the Index directly Searchable.
{% /callout %}

This is the Search Endpoint for your Sigmie Application.

| Method | Path                    |
| ------ | ----------------------- |
| POST   | `/search/{search-name}` |

And this is how your JSON body has to look like

```json
{
  "query": "peter pan"
}
```

## API Keys

**Both** API Key types will work to send Search queries.

## Response

That's how a Search response looks like

```json
{
  "hits": {
    "Ont8qIIBrbFU6hq5wjQx": {
      "_id": "Ont8qIIBrbFU6hq5wjQx",
      "_score": 7.398651,
      "name": "Peter Pan",
      "category": ["Fantasy", "Adventure"],
      "_highlight": {
        "category": ["<b>Adventure</b>"]
      },
      "release_year": "1953",
      "duration_minutes": 76
    },
    "M3t8qIIBrbFU6hq5wjQx": {
      "_id": "M3t8qIIBrbFU6hq5wjQx",
      "_score": 7.398651,
      "_highlight": {
        "category": ["<b>Adventure</b>"]
      },
      "name": "Treasure Planet",
      "category": ["Adventure", "Sci-fi"],
      "release_year": "2002",
      "duration_minutes": 95
    },
    "dns3l4IBrbFU6hq5SC6R": {
      "_id": "dns3l4IBrbFU6hq5SC6R",
      "_score": 7.806194,
      "_highlight": {},
      "name": "Lilo & Stitch",
      "category": ["Family", "Comedy"],
      "release_year": "2002",
      "duration_minutes": 85
    }
  },
  "processing_time": 0.743,
  "total": 30,
  "per_page": 3,
  "page": 1,
  "query": "adventure 2002",
  "search": "disney-movies",
  "params": "",
  "index": "disney"
}
```

## CORS - XMLHttpRequest

The API supports CORS requests making it possible to send **Search** HTTP
requests directly from your application frontend.

Here an Axios example.

```js
async function getHits() {
  const response = await Axios.get('/search/Disney-movies')

  return response.data.hits
}
```
