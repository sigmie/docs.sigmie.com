---
title: Query Box
description: Test you search configuration.
---

Test your search configurations using the query input field.

---

## Testing

Once you have configured your searches you would of course need
to test your configurations. Simply start typing in the input
field and the **Query Box** will pop up in front of you, displaying various
details about how Sigmie processes the written query.

{% callout type="info" title="Choose your search" %}
You can change the testing Search in the dropdown on the
input's right side.
{% /callout %}

## Tokens

When querying an inteligent search engine it will split your query into **tokens** depending on your configuration.

For example let's say that we have the query "Where did nemo go" and that we have set the `Whitespace` tokenizer
in our index settings. Then our
search will split the given query into the following **four** tokens:

- Where
- did
- nemo
- go

going one step further if we have checked the language lowercase filter then the "Where" token will be changed to "where".

You can see how your search tokenizes the given tokens under the **Tokens** label.

## Hits

While you are typing in the Query Box we are quering your search in real time and returning the found documents to you. Those are called **Hits** which basicaly translates to the documents that mached your query.

### Score

Under the **Hits** label you can see the documents that mached your query sorted by score.

{% callout type="info" title="Sorting" %}
You can change the sorting criteria in the in your search configurations.
{% /callout %}

By taking various criteria into consideration Sigmie sets a score number to each document during the search processs.

Some of those criteria are:

- How often does a token appear in a documents ?
- How long is the attributes that contains the token ?
- What number of tokens appears in the documents ?
- What's the fields tuning factor ?

The higher docuement the score the higher will the document in the hits
list.

## Document preview

By hovering over a document in the **Hits** list, you will see the retrieved
documents with two lists of it's attributes.

### Retrievable attributes

First are the documents attributes that are retrieved when searching. You can edit the attributes shown in the **Retrievable attributes** section in your search configuration.

### Highligted attributes

Then comes the list with the hightlighted attributes that you have picked also in you search configuration screen.

{% callout type="warning" title="Prefix & Suffix tags" %}
The prefix and suffix tag that you chosed wont have any effect in the
Query Box.
{% /callout %}
