---
title: Tuning
description: Increase field importance
---

Tune important Document attributes.

---

In the "Tuning" section, you can add a **linear** boost to your fields. Boosting a field plays an important role when calculating a Document's relevancy.

Imagine we have those 3 Documents.

```json
[
  {
    "name": "Lilo & Stitch",
    "category": ["Family", "Comedy"],
    "release_year": "2002",
    "duration_minutes": 85
  },
  {
    "name": "Peter Pan",
    "category": ["Fantasy", "Adventure"],
    "release_year": "1953",
    "duration_minutes": 76
  },
  {
    "name": "Treasure Planet",
    "category": ["Adventure", "Sci-fi"],
    "release_year": "2002",
    "duration_minutes": 95
  }
]
```

We now set the `realease_year` boost to `3.0` and the `category` boost to `1.0`.

Now your user searches for

```
adventure 2002
```

Of course, the first result will be the "Treasure Planet" movie that contains both tokens.

But the second will be the movie "Lilo & Stitch" that was released in **2002** because compared to "Peter Pan" it's `release_date` attribute is more important the the `category` attribute in the "Peter Pan" movie.

Here is an overview of the sorted returned results, and their matches

1. Treasure Planet

   - Category -> **Adventure**
   - Release Year -> **2002**

1. Lilo & Stitch

   - Release Year -> **2002**

1. Peter Pan
   - Category -> **Adventure**

## Attributes

Tune your index attributes on a Search-Level in your Search settings.

{% callout type="info" title="Linear Boosting" %}
Keep in mind that the tunning values are linear. This means that a field
with a tuning factor of 2.0 isn't twice as important as a field with a factor 1.0.
{% /callout %}


---

The **Tuning** section you can add a **linear** boost to your fields. Boosting
a field plays an important role when calculating the relevancy for a Document.

Image we have those 3 documents

```json
[
  {
    "name": "Lilo & Stitch",
    "category": ["Family", "Comedy"],
    "release_year": "2002",
    "duration_minutes": 85
  },
  {
    "name": "Peter Pan",
    "category": ["Fantasy", "Adventure"],
    "release_year": "1953",
    "duration_minutes": 76
  },
  {
    "name": "Treasure Planet",
    "category": ["Adventure", "Sci-fi"],
    "release_year": "2002",
    "duration_minutes": 95
  }
]
```

we now set the `realease_year` boost to `3.0` and the `category` boost to `1.0`.

Now your user searches for

```
adventure 2002
```

Of course the first result will be the "Treasure Planet" movie that contains both tokens.

But the second will be the movie "Lilo & Stitch" that was released in **2002** because compared to "Peter Pan" it's `release_date` attribute is more important the the `category` attribute in the "Peter Pan" movie.

Here is an overview with the sorted returned results, and their matches

1. Treasure Planet

   - Category -> **Adventure**
   - Release Year -> **2002**

1. Lilo & Stitch

   - Release Year -> **2002**

1. Peter Pan
   - Category -> **Adventure**

## Attributes

Tune your index attributes on a Search-Level in your Search settings.

{% callout type="info" title="Linear Boosting" %}
Keep in mind that the tunning values are linear. This means that a field
with tuning factor 2.0 isn't twice as important as a field with factor 1.0.
{% /callout %}
