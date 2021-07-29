# Char filters

[[toc]]

# Introduction

**Character Filters** are one of the tree parts of an analyzer. Their job is to recieve
a text and transform it.

For example the [Strip HTML](./char-filter#strip-html) will take the text input

```html
<h1>
This is an awesome site.
</h1>
```
and output it like

```text
This is an awesome site.
```

## Pattern

::: warning Java Regular Expressions
Like stated in the Elasticsearch docs about the **Pattern Tokenizer**.

The **Pattern Tokenizer** uses Java Regular Expressions.

A badly written regular expression could run very slowly or even throw a StackOverflowError and cause the node it is running on to exit suddenly.

[Read more about pathological regular expressions and how to avoid them.](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html)
:::