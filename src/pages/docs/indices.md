---
title: Indices
description: A space where your Documents live.
---

A space where your Documents are living.

---

You can think of an Index as an SQL Table or a space, that contains [Documents](/docs/documents).

Unlike traditional SQL Tables where you need
to define the columns and their type first and then insert a row to it.
An Index is highly flexible, and new attributes can be added **on the fly**.

If you aren't a technical user, think of an index like a magic box, where you put different stuff inside without worrying if the stuff fits into the box.

Typically you save the same types of Documents into the same Index.

For example, if you
have an online shop, you would save all your products in one Index. But if your online shop contains products in different languages, then you create an Index per language.

This allows you to make different search configurations for each Index.

New Indices come with some default settings, but the real power comes when you make the Index settings match the Documents it contains.

What you configure influences the analysis process.

## Analysis

Text processing is necessary to efficiently find a word in thousands of Documents, and it's quite an expensive task to do.

**Still, this is the key that allows us to provide a powerful Search experience.**

Let's see how it works.

Each time that you add a new Document to your Index, the analysis process takes the **text** attributes
and analyzes them.

Analyzing is passing the text through various different filters and tokenizing them.

Let's say we have the following JSON Document, and we save it in our Index.

```json
{
  "name": "Lady and the Tramp"
}
```

If we chose to tokenize on **whitespaces** and use the **lowercase** filter. The analysis process will split the `name` attribute to the following 4 tokens.

- lady
- and
- the
- tramp

Let's explore why.

The "Whitespace" tokenizer takes the `name` attribute and produces 3 tokens. One for each encountered **whitespace**. So we end up with those 4 tokens:

- Lady
- and
- the
- Tramp

Next, each one of the tokens is passed to the "Lowercase" filter that lowercases the tokens "Lady" to "lady" and "Tramp" to "tramp"
producing the final result.

Now, if a Query commes in, the same happens again for the Query string.

The user types the Query
- LADY TRAMP

because he forgot to turn off his caps lock.

"LADY TRAMP" passes through the same analysis and changes to:

- lady
- tramp

Now we can find those 2 tokens in the Document that indexed before, and despite the users caps lock.

Keep in mind here that the attributes of the Document are analyzed when you **create** or **update** it.

The Queries on the other hand, are analyzed in real-time when the Query comes.

{% callout type="info" title="Index update" %}
Because of the analysis process updating an Index, with new settings can take some time depending on
the Documents count, because each one of the Documents need to be analyzed again.
{% /callout %}

## Tokenization

The first and the most important choice that we make is where we want to tokenize the incoming Query.

### Word Boundaries

Choosing to tokenize the incoming Query on **Word Boundaries** is the easiest and safest choice
for most cases.

It splits the example Query "Timon said Hakuna-Matata" into those 4 tokens.

- Timon
- said
- Hakuna
- Matata

### Whitespaces

If you prefer to have the "Hakuna-Matata" part of the above Query as a single token, then use the "Whitespace" option.

The "Whitespace" option takes the above Query and tokenizes it as follows.

- Timon
- said
- Hakuna-Matata

### Pattern

The "Word Boundaries" and "Whitespace" options cover the 90 percent
of the tokenization cases, but there is also the **Pattern** option for the edge cases. It allows you to use a **Regular Expressions** to create a token for every matching occurrence.

## Filters

Filters are a set of rules that modify the incoming text before reaching your Documents.

### Trim

The "Trim" filter will remove any leading or trailing whitespace from the tokens.

So the token "   red   " will change to "red".

### ASCII folding

"ASCII folding" converts alphabetic, numeric, and symbolic characters to their ASCII equivalent if one exists.

For example, the filter changes açaí à la carte to acai, a, la, carte.

### Decimal digit

The "Decimal digit" takes all digits and changes them to numbers from 0 to 9.

For example, the Bengali numeral ৩ will change to 3.

### Unique

The "Unique" filter removes duplicate tokens.

For example the "Dory can't tell where dory went" will change
to

- Dory
- can't
- tell
- where
- went

**Note here that the second occurrence of the word "dory" is missing.**

### Character mapping

"Character mapping" is a useful filter to manipulate the text even before it's tokenized.

Think of it as translations; We could use it to normalize the German letter `ü` to `ue`.

So using this filter we transform the word `überraschung` to `ueberraschung`.

### Stip HTML

There are also cases where you will scrap webpages and want to make them searchable.

You can use
the "Strip HTML" filter in this case.

This filter removes the HTML tags from your text.

{% callout type="info" title="Text attibutes" %}
Keep in mind that those filters are applied to the incoming queries, and also
to all text attributes of your documents.
{% /callout %}

## Mapping

The mappings are probably one of the most critical settings when configuring your Index.

Mappings tell Sigmie which fields are **text fields** in order to analyze them.

### Types

#### Text

In our JSON example from above, we have the `name` field that we map as **text** in order to analyze it.

```json
{
  "name": "The Sword and the Store"
}
```

#### Boolean

Choose the **Boolean** type for fields like `active` that contain `true` or `false`.

```json
{
  "active": true
}
```

#### Number

The correct option for **Floats** and **Integers** is the **Number** type.

```json
{
  "price": 33.34
}
```

#### Date

Not all `string` fields are **texts** that need analysis. There are also **Dates** and
because there isn't a standart JSON field for them to avoid analysing them it's better
to choose the **Date** option here.

```json
{
  "created_at": "2020-12-29 10:55:13"
}
```

#### Keywords

The **Keyword** type is for attributes that don't require analyzing, but aren't dates.

For example, a `category` attribute would be a perfect match for the **Keyword** option.

```json
{
  "category": "winter"
}
```

{% callout type="warning" title="Filtering" %}
To use filters on a text field has to be mapped as 'Keyword' and
not as 'Text'. Because 'Keyword' fields aren't analyzed.
{% /callout %}

## Language

Another powerful filter set that can make your results more relevant is the
language filters.

If your index documents are in one of the supported [Languages](/docs/indices/languages) you can enjoy powerfull filters created the specific languages.

**If your index language isn't supported yet, you can create your custom language rules.**

### Stopwords

All languages have words that are more important than others when searching. Also, there are words without any Search value.

An example from the English language is the "and" word.

The "Stopwords" filter allows to create a list of words that should be ignored.

### Synonyms

Some words are different, but they mean the same thing. "Synonyms" filter is for these cases.

Using the synonyms filter, you can say that "treasure" and "diamond" should be treated the same.

### Stemming

Stemming is the process of reducing a word to its root form. In the stemming section of your Index Language settings, you can define your own stemming rules.

For example, the words "went" and "going" are both could both be stemmed to the word "go".

So if all variants of a word are reduced to the same root form, they will match when searching.
