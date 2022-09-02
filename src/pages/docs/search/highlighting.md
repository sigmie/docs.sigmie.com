---
title: Highlighting
description: Hightligh the matched words in the results.
---

Use Highlighting to make your users notice why a result matched their Query.

---

Highlighting is part of a Search and works as follows:

You choose which attributes should be highlighted when Sigmie returns
the **Hits** for the passed Query and define a **prefix** and a **suffix**.

Commonly the search results are displayed in HTML pages, so the prefix and the suffix will be **HTML Tags**.

So we sent the query "family movies," and the "family" token was matched in a Document. We also have set up the `<span class="font-bold">` tag as a prefix and the `</span>` as a suffix.

The JSON response will look like this.

```json
{
  // ...
  "hits": {
    "AHs3l4IBrbFU6hq5SDCR": {
      // ...
      "_highlight": {
        "category": ["<span class=\"font-bold\">Family</span>"]
      }
    }
  }
}
```

## Attributes

You can choose which attributes to consider for Highlighting in your Search settings.

[IMG]

{% callout type="info" title="Resource" %}
It's advised to only highlight attributes that you will show to the user for faster response times.
{% /callout %}

### Prefix

The prefix is the value that comes **before** the **matched** token. In HTML results, it could be `<b>` or in markdown results `**`.

### Suffix

Suffix is the value that comes **after** the **matched** token and in HTML page the suffix could be the **closing** bold tag `</b>` and again `**` for markdown.
