---
title: Stemming
description: Reducing a word to its root form
---

Stemming is the process of reducing a word to its root form.

---

When trying to find the best possible match for a given query, we may want
to handle cases where for example, the verb `go` is written `went` in the past tense.

For cases like this, there are predefined algorithms for the Sigmie supported [languages](/docs/indices/languages).

You can also define your own stemming rules in the Sigmie UI in the **Language** tab.

 

## Custom stemming rules

If your preferred Language isn't supported by Sigmie yet, you may define your own stemming rules.

You can say for example, that the words `running` and `runs` should be stemmed down to `run`.

{% callout type="info" title="Comma separated values" %}
You can use commas to separate the stemming values.
{% /callout %}

Some cases where custom stemming is a good option are irregular words.
For example:

- `be`, `are`, and `am`
- `mouse` and `mice`
- `foot` and `feet`

## Exclude from stemming

Sometimes an algorithm may be wrong. If for any reason you want to exclude specific words from stemming, you can add them to the **Keyword** list in the
**Language** tab in your index settings.
