---
title: Highlighting
description: Hightligh the matched words in the results.
---

Use Hightlighting to make noticable for your users which words,
were matched on the returned hits.

---

Highlighting is part of a Search and works as follow:

You choose which attributes should be highlighted when Sigmie return
the **Hits** for the passed query and define a **prefix** and a **suffix**.

Commonly the search results are displayed in HTML pages, so the prefix and the suffix will be **HTML Tags**.

So we send the query "red nike shoes" and the "red" token was matched in a document and we have set up the `<span class="font-bold">` tag as a prefix and the `</span>` as a suffix.

The JSON response will look like this

```json
{
  // ...
  "hits": {
    "AHs3l4IBrbFU6hq5SDCR": {
      "_id": "AHs3l4IBrbFU6hq5SDCR",
      "_highlight": {
        "color": ["<span class=\"font-bold\">red</span>"]
      }
    }
  }
}
```

## Attributes

You can choose which attributes the API takes into consideration for Highlighting in your Search settings.

{% callout type="info" title="Resource" %}
It's adviced to only highligh attributes that you will show to the user, for faster response times.
{% /callout %}

### Prefix

Prefix is the value that comes **before** the **matched** token. In HTML results it could be `<b>` or in markdown results `**`.

### Suffix

Suffix is the value that comes **after** the **matched** token and in HTML page
the suffix could be the **closing** bold tag `</b>` and again `**` for markdown.
