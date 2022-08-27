---
title: API Keys
description: Authentications keys for API usage.
---

Generate authentication keys to authenticate your API.

---

## Types

There are 2 API Key type that you have to use to **authenticate** with your
Sigmie Application.

Each type has different permission and is intended for different use.

### Admin

Admin token have full power over you Sigmie Application documents, meaning that using
an **Admin** token you can create, update or delete any documents.

This API Token in intended to be used on the Server-Side of your application.

To generate such Key choose **Admin** in the `Type` dropdown selection when
creating a API Key.

{% callout type="danger" title="Secret" %}
Never expose the Admin Keys to the user.
{% /callout %}

### Search

Using **Search** tokens you can make [Search Request](/docs/api/search) to your
**Sigmie Application**.

To generate such Key choose **Search** in the `Type` dropdown selection when
creating a API Key.

{% callout type="info" title="Frontend" %}
You case safely expose this Key in the frontend part of
your application.
{% /callout %}
