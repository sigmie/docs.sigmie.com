---
title: Errors
description: Unexpected responses
---

Use the `error` key to identify and handle failed HTTP requests.

---

Here is list with all possible API **Error** responses.

## Document - Not Found 404

Returned if your attemp to manupulate a non existing Document.

```json
{
  "error": "document/not_found",
  "message": "A document with the _id Mnt8qIIBrbFU6hq5wjQx could't be found."
}
```

## Quota - 403 Forbidden

Returned if your attemp to create a Document, but your quota is exceeded.

```json
{
  "error": "document_quota/exceeded",
  "message": "Application document quota 200000 exceeded"
}
```

Returned if make an API request, but your quota is exceeded.

```json
{
  "error": "request_quota/exceeded",
  "message": "Application request quota {$this->limit} exceeded"
}
```

## Unauthorized

**Unauthorized** response indicates that the `API-Key` or the `Application-Id` wasn't provided.

```json
{
  "error": "request/unauthorized",
  "message": "Invalid Application-Id or API-Key"
}
```

## Unknown Batch

If the **Batch** actions isn't recognized by the API it returns the following
JSON response.

```json
{
  "error": "batch_action/unknown",
  "message": "Unknown batch action upsert"
}
```

## Bad Request

The requested format is bad.

```json
{
  "error": "request/bad",
  "message": "Bad request"
}
```

## Forbidden

The requested **user** has no permissions to perform this action.

```json
{
  "error": "request/forbidden",
  "message": "Unauthorized request"
}
```

## Index not found

The requested **Index** wasn't found.

```json
{
  "error": "index/not_found",
  "message": "An index with the name disney couldn't be found"
}
```

## Too big

The **Throttle** limit was reached.

```json
{
  "error": "rate_limit/reached",
  "message": "Rate limit reached"
}
```

The **POST** was more than the limit.

```json
{
  "error": "post/too_large",
  "message": "Post too large"
}
```

## Query too large

The **Query** string exceeded to set limit.

```json
{
  "error": "query/too_large",
  "message": "Query too large"
}
```
