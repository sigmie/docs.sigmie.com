---
title: Documents
description: Searchable JSONs that live inside of an Index.
---

Documents are simply JSON object structures living inside of an Index.

---

## Format

This is a simple JSON document of an imaginary shop that we are running.

```json
{
  "brand": "Adidas",
  "color": "red",
  "name": "HOODIE UNISEX - Sweatshirt",
  "active": true,
  "price": 89.0,
  "sizes": ["L", "M"],
  "rating": {
    "users_rated": 22,
    "avg_rating": 3.8
  }
}
```

### Attibute types

The names on the left side before the colon `:` are the attribute names, and
on the right side we have the attribute values.

The allowed document valid attributes types `array`,`string`,`float`,`integers`,`boolean` and `object`.

### String / Float / Integer / Boolean

There isn't something worth notings about most of the attribute types, except of the two `array` and `object`.

### Arrays

The `array` attribute `sizes` above is internaly handled as one single attribute `size` having two values.

Imagine this if this was possible

```json
{
  "sizes": "L",
  "sizes": "M"
}
```

now of course this isn't a valid JSON but it's just for demonstration for you to take an idea how it looks like
internaly.

### Nested objects

Nested `object` types are flattened, in our example the `rating` object will internally flattened and
treated like bellow.

```json
{
  "rating.users_rated": 22,
  "rating.avg_rating": 3.8
}
```

## Documents table

In the **Documents** section in the Sigmie application you can find an table containing your index documents.
There you can view, edit, update, delete and filter your documents.

This is fine for toying around and for small changes but always consider using the [API](/docs/api/endpoints) endpoints
for dynamic integration between your application and Sigmie.

## Filter language

Of course you can use just write the value that your are looking for in the documents
table, but there is a **Query** language available to search for documents in the documents table search box to allow easiers and more flexible filtering.

### is

For the boolean attributes you can use the `is:` filter.

For example let's say that you have a `boolean` attribute `active`, and you want only see
the active documents.

In this case you can write `is:active` in the search box.

### Range

Numeric values can be filtered with **range** filters. If you have `stock` field and
you want to see only products that their stock is bigger that 20, you can write `stock:>20`.

### \_id

In a lot of cases you may need to search a specific document by it's `_id`.

Here's an example `_id:1HtVh4IBrbFU6hq5Niqr`.

### Wildcard

Wildcard searching is also available for the cases what you aren't sure that
excaclty a field contains.

For example `name:"HOODIE*"`

## Create

To add a **new** document to your index you can click on the **Add** button
above the documents table.

You will then see an input modal. There you can either add a **single** document by simply
writing puting the values that you want.

```json
{
  "brand": "Nike",
  "color": "red"
}
```

or even create **multiple** documents by creating an **array** of JSON objects.

```json
[
  {
    "brand": "Adidas",
    "color": "blue"
  },
  {
    "brand": "Nike",
    "color": "red"
  }
]
```

### API - Upsert

Adding a siglie Documents is of course also possible using the API endpoint.

| Method | Path                                |
| ------ | ----------------------------------- |
| PUT    | `/v1/index/{ index-name }/document` |

#### Body

```json
{
  "brand": "Nike",
  "color": "red"
}
```

Adding an `_id` attribute will **create or replace** a document with the given `_id`.

Keep in mind that this is an `upsert` action, and it will replace **all** existing document
attributes. If you want to only partialy update a document use the [patch](/docs/docs#api-patch-update) endpoint.

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
      "brand": "Adidas",
      "color": "blue"
    }
  },
  {
    "action": "create",
    "body": {
      "brand": "Nike",
      "color": "red"
    }
  }
]
```

## Update

To update a document click on the edit icon on the document row on the table.

### API - Patch update

The patch endpoint can be used to only **partialy** update a Document over the API.

| Method | Path                                                          |
| ------ | ------------------------------------------------------------- |
| PATCH  | `{{ _.proxy_url }}/v1/index/{ index-name }}/document/{ _id }` |

#### Body

```json
{
  "brand": "Nike",
  "color": "orange"
}
```

### API - Batch

To update multiple Document over the API use the `batch` endpoint.

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
      "brand": "Nike",
      "color": "orange"
    }
  },
  {
    "action": "update",
    "_id": "36VtPoIB1B_0_E8pmVb4",
    "body": {
      "brand": "Adidas",
      "color": "pink"
    }
  }
]
```

## Delete

To delete a Document you can click on the **transh** icon in the documents table, or again
use the API endpoint.

### API - Delete

| Method | Path                             |
| ------ | -------------------------------- |
| DELETE | `/v1/index/{ index-name }/document/{ _id }` |

### API - Batch delete

To delete multiple Documents over the API use the `batch` endpoint.

| Method | Path                             |
| ------ | -------------------------------- |
| PUT    | `/v1/index/{ index-name }/batch` |

#### Body

```json
[
  {
    "action": "delete",
    "_id": "36VtPoIB1B_0_E8pmVb4",
  },
  {
    "action": "delete",
    "_id": "36VtPo2VB1B_0_E8pmVb4",
  },
]
```

## Size limit

The allowed documents size for a document is **100KB**.
