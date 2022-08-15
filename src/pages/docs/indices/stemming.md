---
title: Stemming
description: Reducing a word to its root form
---

Stemming is the proccess of reducing a word to its root form.

---

When trying to find the best possible match for a given query, we may want
to handle cases where for example the verb `go` is written `went` in the past tense.

For cases like this there are predifined algorithms for the Sigmie supported [languages](/docs/indices/languages).

You can also define your own stemming rules in the Sigmie UI in the **Language** tab.

## Custom stemming rules

If your preffered Language isn't supported by Sigmie yet Your may define your
own stemming rules.

You can cay for example that the words `running` and `runs` should be stemmed down to `run`.

{% callout type="info" title="Comma separated values" %}
You can use commas to separate the stemming values.
{% /callout %}

Some cases where custom stemming is a good option are irregular words.
For example:

- `be`, `are`, and `am`
- `mouse` and `mice`
- `foot` and `feet`

## Exlude from stemming

Sometimes an algorigm may be wrong. If for any reason you want to exlude
specific words from stemming, you can add them to they **Keyword** list in the
**Language** tab in your index settings.
