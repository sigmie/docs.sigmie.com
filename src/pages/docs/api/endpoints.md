---
title: Endpoints
description: REST API Reference
---

The REST API is the core of your Sigmie Application

---

Bellow is a list with all API **Endpoints**

| Method | Path                                                | Action                                   |
| ------ | --------------------------------------------------- | ---------------------------------------- |
| GET    | `/health`                                           | [ Health Check ](/docs/api/endpoints)    |
| GET  | `/v1/index/{ index-name }/document/{ document-id }` | [ Get Document ](/docs/api/endpoints)    |
| POST | `/v1/index/{ index-name }/document/{ document-id }` | [ Upsert Document ](/docs/api/endpoints) |
| DELETE | `/v1/index/{ index-name }/document/{ document-id }` | [ Delete Document](/docs/api/endpoints)  |
| PATCH  | `/v1/index/{ index-name }/document/{ document-id }` | [ Patch Document](/docs/api/endpoints)   |
| POST   | `/v1//index/{ index-name }/batch`                   | [ Batch Write ](/docs/api/endpoints)     |
| PUT    | `/v1/index/{ index-name }/batch`                    | [ Batch Write ](/docs/api/endpoints)     |
| POST   | `/v1/index/{ index-name }/batch`                    | [ Batch Write ](/docs/api/endpoints)     |
| POST | `/v1/search/{ search-name }`                        | [Search](/docs/api/endpoints)            |

## Host

Use the **Host** below to access your Sigmie Application API.

- `{application-id}.sigmie.app`

Even though this host will work just fine in the mejority of situations, it's advices to use a Round-n-Robin retry strategy for the following hosts.

- `{application-id}-a.sigmie.app`
- `{application-id}-b.sigmie.app`
- `{application-id}-c.sigmie.app`

To ensure high availability we are creating **3** servers for each Sigmie Application, and each one of them has one of the above DNS entries.

## Search

**Path**: `/v1/search/{ search-name }`

**HTTP Verb**: POST

**API Key Type**: [ [Search](docs/api/api-keys#search) , [Admin](docs/api/api-keys#admin) ]

#### Request Body

```json
{
  "query": "peter pan",
  "per_page": 3,
  "page": 1
}
```

#### Example

```bash
curl -X POST \
     -H "Content-Type: application/json" \
     -H "X-Sigmie-API-Key: ${API_KEY}" \
     -H "X-Sigmie-Application: ${APPLICATION_ID}" \
     -d '{"query":"peter pan","per_page":3,"page":1}' \
     "https://${APPLICATION_ID}.sigmie.app/v1/search/disney-movies"
```

#### Response - 200 Ok

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
  "query": "adventure 2002",
  "search": "disney-movies",
  "params": "",
  "index": "disney"
}
```

## Document

### Upsert

**Path**: `/v1/index/{ index-name }/document/{ document-id }`

**HTTP Verb**: POST

**API Key Type**: [ [Admin](docs/api/api-keys#admin) ]

#### Request Body

```json
{
  "name": "Mulan",
  "category": ["Musica", "Family"],
  "release_year": "1998",
  "duration_min": 88
}
```

#### Example

```bash
curl -X POST \
     -H "Content-Type: application/json" \
     -H "X-Sigmie-API-Key: ${API_KEY}" \
     -H "X-Sigmie-Application: ${APPLICATION_ID}" \
     -d '{"name":"Mulan","category":["Musica","Family"],"release_year":"1998","duration_min":88}' \
     "https://${APPLICATION_ID}.sigmie.app/v1/index/disney/document"
```

#### Reponse - 201 Created

```json
{
  "_id": "fXE6OoIBtixTeHPNKXnG",
  "name": "Mulan",
  "category": ["Musica", "Family"],
  "release_year": "1998",
  "duration_min": 88
}
```

### Get

**Path**: `/v1/index/{ index-name }/document/{ document-id }`

**HTTP Verb**: GET

**API Key Type**: [ [Admin](docs/api/api-keys#admin) ]

#### Example

```bash
curl -X GET \
     -H "Content-Type: application/json" \
     -H "X-Sigmie-API-Key: ${API_KEY}" \
     -H "X-Sigmie-Application: ${APPLICATION_ID}" \
     "https://${APPLICATION_ID}.sigmie.app/v1/index/disney/document/fXE6OoIBtixTeHPNKXnG"
```

#### Reponse - 200 Ok

```json
{
  "_id": "fXE6OoIBtixTeHPNKXnG",
  "name": "Mulan",
  "category": ["Musica", "Family"],
  "release_year": "1998",
  "duration_min": 88
}
```

### Patch

**Path**: `/v1/index/{ index-name }/document/{ document-id }`

**HTTP Verb**: PUT

**API Key Type**: [ [Admin](docs/api/api-keys#admin) ]

#### Request Body

```json
{
  "duration_min": 93
}
```

#### Example

```bash
curl -X PUT \
     -H "Content-Type: application/json" \
     -H "X-Sigmie-API-Key: ${API_KEY}" \
     -H "X-Sigmie-Application: ${APPLICATION_ID}" \
     -d '{"duration_min":93}' \
     "https://${APPLICATION_ID}.sigmie.app/v1/index/disney/document/fXE6OoIBtixTeHPNKXnG"
```

#### Reponse - 200 Ok

```json
{
  "_id": "fXE6OoIBtixTeHPNKXnG",
  "name": "Mulan",
  "category": ["Musica", "Family"],
  "release_year": "1998",
  "duration_min": 93
}
```

### Delete

**Path**: `/v1/index/{ index-name }/document/{ document-id }`

**HTTP Verb**: DELETE

**API Key Type**: [ [Admin](docs/api/api-keys#admin) ]

#### Example

```bash
curl -X DELETE \
     -H "Content-Type: application/json" \
     -H "X-Sigmie-API-Key: ${API_KEY}" \
     -H "X-Sigmie-Application: ${APPLICATION_ID}" \
     "https://${APPLICATION_ID}.sigmie.app/v1/index/disney/document/fXE6OoIBtixTeHPNKXnG"
```

#### Reponse - 202 Accepted

```json
{
  "_id": "fXE6OoIBtixTeHPNKXnG"
}
```

## Batch Read

**Path**: `/v1/index/{ index-name }/batch`

**HTTP Verb**: POST

**API Key Type**: [ [Admin](docs/api/api-keys#admin) ]

#### Request Body

```json
[
  {
    "_id": "dHt8qIIBrbFU6hq5wjQx"
  },
  {
    "_id": "h3t8qIIBrbFU6hq5wjQx"
  },
  {
    "_id": "Mnt8qIIBrbFU6hq5wjQx"
  }
]
```

#### Example

```bash
curl -X POST \
     -H "Content-Type: application/json" \
     -H "X-Sigmie-API-Key: ${API_KEY}" \
     -H "X-Sigmie-Application: ${APPLICATION_ID}" \
     -d '[{"_id":"dHt8qIIBrbFU6hq5wjQx"},{"_id":"h3t8qIIBrbFU6hq5wjQx"},{"_id":"Mnt8qIIBrbFU6hq5wjQx"}]' \
     "https://${APPLICATION_ID}.sigmie.app/v1/index/disney/batch"
```

#### Reponse - 200 Ok

```json
[
  {
    "_id": "dHt8qIIBrbFU6hq5wjQx",
    "name": "Pocahontas",
    "category": ["Musica", "Family"],
    "release_year": "1995",
    "duration_min": 81
  },
  {
    "_id": "h3t8qIIBrbFU6hq5wjQx",
    "name": "Bambi",
    "category": ["Fantasy", "Family"],
    "release_year": "1942",
    "duration_min": 70
  },
  {
    "_id": "Mnt8qIIBrbFU6hq5wjQx",
    "name": "The Emperor's New Groove",
    "category": ["Comedy", "Family"],
    "release_year": "2000",
    "duration_min": 75
  }
]
```

## Batch Write

**Path**: `/v1/index/{ index-name }/batch`

**HTTP Verb**: PUT

**API Key Type**: [ [Admin](docs/api/api-keys#admin) ]

#### Request Body

```json
[
  // actions
]
```

#### Reponse - 200 Ok

```json
[
  // action responses
]
```

### Upsert

#### Body

```json
{
  "action": "create",
  "body": {
    "name": "101 Dalmatians",
    "category": ["Comedy", "Family"],
    "release_year": "1961",
    "duration_min": 79
  }
}
```

#### Response

```json
{
  "_id": "j8lmj4EBetGDRrvvlbNf",
  "result": "created"
}
```

#### Results

- `created`
- `updated`

### Patch

#### Body

```json
{
  "action": "update",
  "_id": "36VtPoIB1B0E8pmVb4",
  "body": {
    "name": "The Jungle Book",
    "release_year": "1967"
  }
}
```

#### Response

```json
{
  "_id": "36VtPoIB1B0E8pmVb4",
  "result": "updated"
}
```

#### Results

- `created`
- `updated`
- `noop`

### Delete

#### Body

```json
{
  "action": "delete",
  "_id": "PkOoIBJq3of4094YiE"
}
```

#### Response

```json
{
  "_id": "PkOoIBJq3of4094YiE",
  "result": "deleted"
}
```

#### Results

- `deleted`
- `not_found`

### Batch Example

```bash
curl -X PUT \
     -H "Content-Type: application/json" \
     -H "X-Sigmie-API-Key: ${API_KEY}" \
     -H "X-Sigmie-Application: ${APPLICATION_ID}" \
     -d '[{"action":"delete","_id":"PkOoIBJq3of4094YiE"},{"action":"update","_id":"36VtPoIB1B0E8pmVb4","body":{"name":"The Jungle Book","release_year":"1967"}},{"action":"create","body":{"name":"101 Dalmatians","category":["Comedy","Family"],"release_year":"1961","duration_min":79}}]' \
     "https://${APPLICATION_ID}.sigmie.app/v1/index/disney/batch"
```
