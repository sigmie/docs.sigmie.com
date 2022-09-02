---
title: Authentication
description: API Keys for HTTP Requests
---

Authenticate for your Search API using your API Keys.

---

## API Keys

You can use the Sigmie UI to generate API Keys for HTTP usage.

## Methods

Sigmie API supports **Basic** and **via HTTP headers** authentication.

### HTTP Headers

Authentication via HTTP headers is done with the following headers.

| Header                 | Value                  |
| ---------------------- | ---------------------- |
| `X-Sigmie-API-Key`     | `{{ api-key }}`        |
| `X-Sigmie-Application` | `{{ application-id }}` |

### Basic

You can use the following credentials to authenticate using **Basic Auth**.

| User                   | Password        |
| ---------------------- | --------------- |
| `{{ application-id }}` | `{{ api-key }}` |

## CORS

Sigmie supports Cross-Origin Resource Sharing (CORS), so you can use the Authentication headers with XMLHttpRequest.
