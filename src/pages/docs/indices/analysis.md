---
title: Analysis
description: Passing queries through various filters for better matches.
---

A query string is passed through various filters that change its final form.

---

The analysis process consists of 2 parts, the **Tokenisation** and the **Filter** process.

## Tokenization

The **Tokenisation** process takes a given text, "Good boy Pluto" for example, and splits it into tokens according to the chosen "Tokenizer".

The `Whitespace` tokenizer would split the above query on every whitespace, producing the following 3 tokens.

- Good
- boy
- Pluto

There are 3 Tokenizer options for you to choose from that should cover all
use cases.

### Word Boundaries

Tokenizing on `Word Boundaries` will the text "Easy-peasy lemon squeezy" and produce the tokens below.

- Easy
- peasy
- lemon
- squeezy

### Whitespaces

On the other hand, using the `Whitespace` tokenizer will take "Easy-peasy" as a single token, and produce 3 tokens.

- Easy-peasy
- lemon
- squeezy

### Pattern

The `Pattern` option allows you to write a Regular Expression pattern to handle
any edge cases that you may have.

For example, you can specify `,` as a pattern to split the "Donald,Mickey, Goofy" into
3 tokens.

- Donald
- Mickey
- Pluto

## Filters

Once your text is tokenized, filters come to play and transform the tokens to allow better matching between them.

For example, if a user for any reason writes "mickey mickey Mouse" the tokenizer will give us 3 tokens

- mickey
- mickey
- Mouse

Using the `Unique` filter will remove the double token `mickey` and we will get

- mickey
- Mouse

This way, the **double** `mickey` word won't affect the scoring.

### Token limit

Users many times paste large texts into Search boxes and tokenize
big texts is a quite expensive operation that won't help us find better matches.

Using **Token limit**, we can set a limit on how many **tokens** are created.

For example, the query "Where did Dory go ?" with a **Token limit** of 3 will
only create the 3 tokens bellow

- Where
- did
- Dory

and ignore the rest.

### Trim

Removing whitespaces from the begging and from the end of any token is always good practice.

Using the `Trim` filter will change the

- " Goofy "

to

- "Goofy"

### Decimal Digit

The **Decimal Digit** filter converts all digits to 0-9.

For example, the Bengali numeral `৩` will change to `3`.

### Unique

The **Unique** filter removes any duplicate tokens.

For example, the tokens:

- Goofy
- and
- Pluto
- Pluto

will change to

- Goofy
- and
- Pluto

removing the double "Pluto" token.

### Strip HTML

**Strip HTML** filter removes any HTML from even **before** it even tokenized.

So from the HTML

```html
<div>
  <p>
    The Lion King is a 1994 American animated musical drama film directed by
    Roger Allers and Rob Minkoff
  </p>
</div>
```

will remain only the text

```
The Lion King is a 1994 American animated musical drama film directed by
Roger Allers and Rob Minkoff
```

and the `<div>` and `<p>` tags will disappear.

## Char mapping

Same as the HTML filter, the char filter manipulates the text **before** it's
tokenized.

Use character mapping filter if you are indexing for example, user comments that tend
to have **emojis** within them.

You can map all happy like `:)` and `:D` emojis to `happy`.

By doing this, the text "To Infinity and Beyond :D" will change to "To Infinity and Beyond happy".

Now when the user searches for "happy" he get's the Buzz Lightyear's famous line.