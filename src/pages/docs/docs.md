---
title: Documents
description: Searchable JSONs that live inside of an Index.
---

JSON object structures living inside of an Index.

---

## Format

This is a simple Document.

```json
{
  "name": "101 Dalmatians",
  "release_year": "1961",
  "active": true,
  "duration_min": 879,
  "category": ["Adventure", "Family"],
  "rating": {
    "imdb": 7.3,
    "rotten_tomatoes": 98
  }
}
```

### Attibute types

The names on the left side before the colon `:` are the attribute names, and
on the right side, we have the attribute values.

The allowed document valid attributes types `array`,`string`,`float`,`integers`,`boolean` and `object`.

### String / Float / Integer / Boolean

There isn't something worth noting about most of the attribute types, except for the two `array` and `object`.

### Arrays

The `array` attribute `sizes` above is internally handled as one single attribute `size` that has two values.

Imagine this if this was possible.

```json
{
  "category": "Adventure",
  "category": "Family"
}
```

now, of course, this isn't a valid JSON, but it's just for demonstration for you to take an idea of how it's handled
internally.

### Nested objects

Nested `object` types are flattened; In our example the `rating` object will be internally flattened and
treated like this.

```json
{
  "rating.imdb": 7.3,
  "rating.rotten_tomatoes": 98
}
```

## Documents table

In the **Documents** section in the Sigmie Application, you can find a table containing your Index Documents.

You can view, edit, update, delete and filter your Documents there.

 

This is fine for toying around and for minor changes but always consider using the [API](/docs/api/endpoints) endpoints
for dynamic integration between your application and Sigmie.

## Filter language

Of course, you can use just write the value that you are looking for in the documents
table, but there is a **Query** language available to search for documents in the documents table search box to allow easiers and more flexible filtering.

### is

For the boolean attributes, you can use the `is:` filter.

For example, let's say that you have a `boolean` attribute `active`, and you want only to see the active documents.

In this case, you can write `is:active` in the search box.

### Range

Numeric values can be filtered with **range** filters. If you have `stock` field and you want to see only products whose stock is bigger than 20, you can write `stock:>20`.

### \_id

In many cases, you may need to search a specific document by its `_id`.

Here's an example `_id:1HtVh4IBrbFU6hq5Niqr`.

### Wildcard

Wildcard searching is also available for the cases where you aren't sure that
exactly a field contains.

For example `name:"The Lion King*"`

## Create

To add a **new** document to your Index, you can click on the **Add** button
above the documents table.

You will then see an input modal. There you can either add a **single** document by simply
writing putting the values that you want.

```json
{
  "name": "Pinocchio",
  "release_year": "1940"
}
```

Or even create **multiple** documents by creating an **array** of JSON objects.

```json
[
  {
    "name": "Pinocchio",
    "release_year": "1940"
  },
  {
    "name": "Hercules",
    "release_year": "1997"
  }
]
```

### API - Upsert

Adding a single Document is of course, also possible using the API endpoint.

| Method | Path                                |
| ------ | ----------------------------------- |
| PUT    | `/v1/index/{ index-name }/document` |

#### Body

```json
{
  "name": "Hercules",
  "release_year": "1997"
}
```

Adding an `_id` attribute will **create or replace** a document with the given `_id`.

Keep in mind that this is an `upsert` action, and it will replace **all** existing document
attributes. If you want to only partially update a document use the [patch](/docs/docs#api-patch-update) endpoint.

### API Batch

You can also use the `batch` endpoints to addmultiple documents at once.

| Method | Path                             |
| ------ | -------------------------------- |
| PUT    | `/v1/index/{ index-name }/batch` |

#### Body

```json
[
  {
    "action": "create",
    "body": {
      "name": "Pinocchio",
      "release_year": "1940"
    }
  },
  {
    "action": "create",
    "body": {
      "name": "Hercules",
      "release_year": "1997"
    }
  }
]
```

## Update

To update a document, click on the edit icon on the document row on the table.

### API - Patch update

The patch endpoint can be used to only **partially** update a Document over the API.

| Method | Path                                                          |
| ------ | ------------------------------------------------------------- |
| PATCH  | `{{ _.proxy_url }}/v1/index/{ index-name }}/document/{ _id }` |

#### Body

```json
{
  "name": "Hercules",
  "duration_min": 99
}
```

### API - Batch

To update multiple Documents over the API, use the `batch` endpoint.

| Method | Path                             |
| ------ | -------------------------------- |
| PUT    | `/v1/index/{ index-name }/batch` |

#### Body

```json
[
  {
    "action": "update",
    "_id": "36VtPoIB1B_0_E8pmVb4",
    "body": {
      "name": "Pinocchio",
      "duration_min": 88
    }
  },
  {
    "action": "update",
    "_id": "36VtPoIB1B_0_E8pmVb4",
    "body": {
      "name": "Hercules",
      "duration_min": 99
    }
  }
]
```

## Delete

To delete a Document, you can click on the **trash** icon in the documents table or again
use the API endpoint.

### API - Delete

| Method | Path                                        |
| ------ | ------------------------------------------- |
| DELETE | `/v1/index/{ index-name }/document/{ _id }` |

### API - Batch delete

To delete multiple Documents over the API, use the `batch` endpoint.

| Method | Path                             |
| ------ | -------------------------------- |
| PUT    | `/v1/index/{ index-name }/batch` |

#### Body

```json
[
  {
    "action": "delete",
    "_id": "36VtPoIB1B_0_E8pmVb4"
  },
  {
    "action": "delete",
    "_id": "36VtPo2VB1B_0_E8pmVb4"
  }
]
```

## Size limit

The allowed Document size for a document is **100KB**.
