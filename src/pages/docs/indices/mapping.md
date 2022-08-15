---
title: Mapping
description: Document field data type definition.
---

Defining your Document field data types.

---

## Text

In most cases Searches are performed against **Text** fields, containing
human written unstructured text like a description, or a title of something.

### Search as your type

This field type is optimized for "Search as you type" functionality. Where for example
you privide your application user an input field to type, and you are displaying bellow the potential match candidates in a dropdown box.

Choose this type if the field contains something like

- A Book or Product title
- A Store or Movie name

### Unstructured text

Unstructured text is almost any humman-written text, like book or product descriptions, comments or a documentation page like this.

Choose this type if the field contains something like

- A Book or Product description
- A Movie review
- A User comment

## Number

The only thing to consider when
mapping a `number` field is it's type.

The available types are

- Float
- Integer

## Date

Like Numbers the only thing to consider when
mapping a `date` field is it format.

### Format

The available date formats are

- YYYY-MM-DD -> 2016-07-15

## Boolean

Once a field is `boolean` there is nothing more to think about.