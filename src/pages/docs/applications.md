---
title: Applications
description: A workspace for your indices and documents.
---

A workspace where your Indices and your Documents live.

---

Each Sigmie Application is independent and has its own infrastructure and billing cycle.

## General

Each Sigmie Application has a **unique** identifier that is registered as a DNS entry; Making it available under the domain `{application-id}.sigmie.app`.

The`{application-id}`, is a placeholder. The actual **identifier** that you will in the application's dashboard.

Each application has 3 dedicated servers that guarantee **High Availability**. 

Each one of the servers is also available under its own domain name.

- `{application-id}-a.sigmie.app`
- `{application-id}-b.sigmie.app`
- `{application-id}-c.sigmie.app`

{% callout type="info" title="Shuffling" %}
We recommend implementing a retry strategy and shuffling the above hosts when making HTTP calls. This way, load balancing and high availability will be guaranteed.
{% /callout %}

### Name and Description

You can set a human-readable name, and an optional description that will provide more context for your Sigmie application.

Navigate to the Application settings by clicking on **Settings** in the sidebar.

 

## Billing

Because of the dedicated infrastructure for each Sigmie application
each application has its own subscription plan.

### Plans

The main factor in our pricing model is usage. We have multiple plans
that cover the majority of cases.

The following plans are available:

#### 200K - 159 $

- 5 days free trial
- 5 Indices
- 200,000 Documents
- Up to 200,000 monthly requests

{% callout type="info" title="Trial" %}
Choosing the 2K plan, you have 5 days free trial.
{% /callout %}

#### 400K - 279 $

- 10 Indices
- 400,000 Documents
- Up to 400,000 monthly requests

#### 600K - 379 $

- 12 Indices
- 600,000 Documents
- Up to 600,000 monthly requests

#### 800K - 459 $

- 12 Indices
- 800,000 Documents
- Up to 800,000 monthly requests

#### 1M - 799 $

- 25 Indices
- 800,000 Documents
- Up to 800,000 monthly requests

{% callout type="warning" title="Local taxes" %}
Be aware local taxes may apply when signing up.
{% /callout %}

### Yealy discount

By choosing to pay **yearly** we are giving you 2 months of
free usage.

### Tolerace

There is a **10%** percent tolerance if you exceed your documents limit, and
a **20%** percent for the API requests.

## Regions

We use **premium** request routing services to ensure that your end users that are located in another part of the world will reach your search as fast as possible. 

But in order to comply with different privacy regulations in different countries, you can choose the desired location where your data will be stored.

The currently supported regions are

- US Central
- US West
- US East
- Canada
- Brazil
- Belgium
- London
- Frankfurt
- Australia
- India
- Hong Kong
- Singapore
- Japan
- Taiwan
