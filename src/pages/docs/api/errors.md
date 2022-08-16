---
title: Errors
description: Quidem magni aut exercitationem maxime rerum eos.
---

Quasi sapiente voluptates aut minima non doloribus similique quisquam. In quo expedita ipsum nostrum corrupti incidunt. Et aut eligendi ea perferendis.

---

## Document not found

```json
{
  "error": "document/not_found",
  "message": "A document with the _id Mnt8qIIBrbFU6hq5wjQx could't be found."
}
```

## Quota

```json
{
  "error": "document_quota/exceeded",
  "message": "Application document quota 200000 exceeded"
}
```

```json
{
  "error": "request_quota/exceeded",
  "message": "Application request quota {$this->limit} exceeded"
}
```

## Unauthorized

```json
{
  "error": "request/unauthorized",
  "message": "Invalid Application-Id or API-Key"
}
```

## Unknown Batch

```json
{
  "error": "batch_action/unknown",
  "message": "Unknown batch action upsert"
}
```

## Bad Request

```json
{
  "error": "request/bad",
  "message": "Bad request"
}
```

## Forbidden

```json
{
  "error": "request/forbidden",
  "message": "Unauthorized request"
}
```

## Index not found

```json
{
  "error": "index/not_found",
  "message": "An index with the name disney couldn't be found"
}
```

## Too big

```json
{
  "error": "post/too_large",
  "message": "Post too large"
}
```

## Query too large

```json
{
  "error": "query/too_large",
  "message": "Query too large"
}
```
