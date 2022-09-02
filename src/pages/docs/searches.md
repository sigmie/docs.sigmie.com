---
title: Search
description: Query configurations.
---

Query handling configurations.

---

Once you have configured your Index and added Documents, you can start sending queries to it, but you may want to try different query configurations until you reach the desired result.

You start creating "Searches". You can think of them as configuration sets where you define which attributes are more important than others.

You will need different Searches when you want to query an Index from different places.

For example, let's say you have a service like Disney Plus, and you want to query the movies on two different points. One for the main user Search that your customers will use to search for movies they want to see, and secondly, from your backend, where your employees will need to find movies based on their release year.

This of this Documents schema:

```json
[
  {
    "name": "Cinderella",
    "release_year": "1950"
  },
  {
    "name": "Pocahontas",
    "release_year": "1995"
  }
]
```

In the first scenario, you want to forgive your users some typos they may have made, and it's also unlikely that customers will type the movie's release year in a search box.

You would then exclude the `release_year` attribute from the **Searchable attributes** list and add **Typo tolerance**.

In the second case, because your employees will likely search for the `release_year` of a movie, we make the `release_year` attribute searchable.

Every Search consists of various elements. Let's take a look at some of them.

## Name & Index

Every Search needs a **Name** and an **Index**.

 

{% callout type="info" title="Name" %}
The Search name is the identifier according to which, Sigmie knows how
to handle the incoming query.
{% /callout %}

{% callout type="danger" title="Index" %}
The Index is permanent because every Index may contain different Documents with different attributes.
{% /callout %}

## Searchable Attributes

The "Searchable Attributes" are the Document attributes that will be searched for matches.

For example, if you save a `created_at` timestamp which you don't need when the **hits** are returned. You can leave this attribute out to have a smaller payload.

## Sorting

In your Search's "Sorting" settings, you can define the **order** in which the Documents are retrieved.

## Retrievable Atrributes

The "Searchable Attributes" are the Document attributes that will be returned if a document matches a Query.

## Pagination

Using the "Pagination" settings, you can edit the default number of hits per page.

## Typo Tolerance

The "Typo Tolerances" section defines how many typos are accepted and from which attributes.

## Tuning

By using the "Tuning" section, you can boost field importance.

## Highlighting

By specifying "Highlighting" you can highlight the matched text in the selected attributes.