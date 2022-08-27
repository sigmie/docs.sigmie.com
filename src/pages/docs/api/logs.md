---
title: API Logs
description: Get lots of the latest HTTP Requests to your Application
---

Debug your Sigmie Application using the API Logs.

---

Visiting the **API Logs** the in your Sigmie dashboard you, will find all
the latest HTTP Requests made to your Sigmie Application.

Clickin on one of the Log entries you will see details about the HTTP Request made, as what that the request body sent and what was the returned response.

## Request

The available information are the **Request**

- Method
- Time
- IP Address
- Request Path
- Body

## Response

The available **Response** information are the

- Proccessing time
- Response code

{% callout type="warning" title="Long Body" %}
Long Request or Response bodies will be truncated.
{% /callout %}

## Log retention

Records older than **1 Week** will be permanently deleted.
