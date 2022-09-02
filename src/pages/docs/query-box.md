---
title: Query Box
description: Test you search configuration.
---

Test your Search settings.

---

## Testing

Once you have configured your Searches you need
to test your configurations. Start typing in the input
field on top, and the "Query Box" will pop up in front of you, displaying details about how Sigmie processes your Query.

{% callout type="info" title="Choose your search" %}
You can change the testing Search in the dropdown on the
input's right side.
{% /callout %}

## Tokens

An intelligent search engine will split your Query into **tokens**.

For example, let's say that we have the query "Where did Nemo go" and that we have set the `Whitespace` tokenizer
in our index settings. Then our
search will split the given Query into the following **four** tokens:

- Where
- did
- Nemo
- go

Going one step further, if we have checked the language lowercase filter, the "Where" token will be changed to "where" and the "Nemo" to "nemo.

You can see how your search tokenizes the given tokens under the **Tokens** label.

 

## Hits

While you are typing in the Query Box we are querying your search; The returned Documents that match the Query are called **Hits**.

### Score

Under the **Hits** label, you can see the documents that matched your Query sorted by score.

 

{% callout type="info" title="Sorting" %}
You can change the sorting criteria the in your Search settings.
{% /callout %}

By considering various criteria, Sigmie sets a score number for each Document during the search process.

Some of those criteria are:

- How often does a token appear in a Document?
- How long is the attribute that contains the matched token?
- How many tokens appear in the Document?
- What's the field tuning factor?

The higher Document the score, the higher will the Document in the hits
list.

## Document preview

By hovering over a Document id, you will see the Hit
Documents with two lists of attributes.

### Retrievable attributes

First on top are the Documents attributes that are retrieved.

You can edit this attribute list in the [ Retrievable attributes ](docs/search/retrievable-attributes) settings.

### Highligted attributes

Second come the [ Hightlighted attributes ](/docs/search/highlighting).

{% callout type="warning" title="Prefix & Suffix tags" %}
The prefix and suffix tag that you chose won't have any effect in the
Query Box.
{% /callout %}
