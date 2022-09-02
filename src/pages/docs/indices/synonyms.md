---
title: Synonyms
description: Multiple words meaning the same thing.
---

Handle the words "jewel" and "gold" the same.

---

In the Index **Synonyms** tab in the Sigmie UI, you can define synonyms at the index level.

The synonyms are separated into **One-Way** and **Two-Way**.

## One - Way

One-Way synonyms where one word is synonym to the other, but not the other way around.

Take the word `iPhone` for example, where people tend to write it in multiple ways like `i-phone` or `i phone`. We need the Search to understand those tokens and to translate them correctly to `iPhone`.

Here is an example of how our Search sees the given query if we define that `i phone` and `i-phone` are **One-Way** synonyms to `iphone`. 

On the left side are the user-types tokens, and on the right side are the **analysed** tokens.

- `i phone` -> `iPhone`
- `i-phone` -> `iPhone`

## Two - Way

In the other hand, the Two-Way Synonyms are words that have the **equal**
meaning. Now we want
to match the Documents that contain the words `bucks`, `cash`, or `money` every time the user types **any** of those words.

Here is an example of how our Search sees the given query if we define that `bucks`, `cash` and `money` are **Two-Way** synonyms.

Again on the left side the user-typed tokens, and on the right side, the **analysed** tokens.

- `cash` -> `cash`, `bucks`, `money`
- `bucks` -> `cash`, `bucks`, `money`
- `money` -> `cash`, `bucks`, `money`
