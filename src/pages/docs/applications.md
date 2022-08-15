---
title: Applications
description: A workspace for your indices and documents.
---

An Application is a workspace where your indices and your documents live. Each Sigmie Application
is totaly independent and has it's own infrastructure and billing cycle.

---

## General

When you sing up for Sigmie we create a user and an Sigmie application for you. In other words we are
creating infrastructure that is only for you.

Each Sigmie application has a unique identifier that is registered as a DNS entry
making your search available under `{application-id}.sigmie.app`:

Where you see `{application-id}` it has to be replaced with the actual id that you can find in your application's
dashboard.

Each application has 3 servers in order to guarantee **High Availability** is anything goes wrong. Each one of the servers has it's own domain name like bellow.

- `{application-id}-a.sigmie.app`
- `{application-id}-b.sigmie.app`
- `{application-id}-c.sigmie.app`

{% callout type="info" title="Shuffling" %}
We recommend to implement a retry strategy and shuffling to the above hosts when making API calls. This way load balancing and high availability will be guaranteed.
{% /callout %}

### Name and Description

Distiguishing your Sigmie applications using the application id can be a trivial task. For this reason you can of course set a human readable name to
each of your applications and an optional description that will give you some more details later when you going to need them.

You can change both in your application settings, by clicking on **Settings** in the side bar navigation.

## Billing

Because of the dedicated infrastructure for each Sigmie application
each application has it's own subscription.

### Plans

The main factor in our pricing model is the usage. We have multiple plans
that should cover the majority of cases.

We are offering the following plans:

#### 2K - 159 $

- 5 days free trial
- 5 Indices
- 200,000 Documents
- Up to 200,000 monthly requests

{% callout type="info" title="Trial" %}
Choosing the 2K plan you have 5 days of free trial.
{% /callout %}

#### 4K - 279 $

- 10 Indices
- 400,000 Documents
- Up to 400,000 monthly requests

#### 6K - 379 $

- 12 Indices
- 600,000 Documents
- Up to 600,000 monthly requests

#### 8K - 459 $

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

There is a 10% percent tolerance if you exceed your documents limit, and
a 20% percent for your API requests.

## Regions

Even though we use **premium** request routing services to ensure that your end users that are located in another part of the word, will reach your search as fast as possible. 

And because of different privacy regulations in different countries.

You can choose the desired location where your data will be stored.

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
