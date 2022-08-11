---
title: Indices
description: A space where your documents live.
---

An Index is a space with various settings where your documents are living.

---

You can think of an Index as an SQL Table or just a space, that contains a lot
of JSONs (Documents). Even though unlike traditional SQL tables where you need
to define the columns and their type first and then insert a row to it. An index
is highly flexible, and new attributes can be added **on the fly**.

If you aren't a technical user you can think of an index like an magic box, where you
put your stuff inside, without worrying if the stuffs are fitting into the box.

Typicaly you save same types of documents into same indices. For example if you
have an online shop you would save all your products in a the same index.

**But** if your online shop contains products in different languages, then it's
recommended that have 1 index per language for your products because of the different
search configurations that each index requires.

When you create a new index we are applying some default configurations, but the
real power commes when you change those to perfectly match the documents that the index contains.

What you configure will directly influence the analysis proccess for your index.

## Analysis

The text processing operations that are neccessary to efficiently search a word in thousands of
documents is a time expensive one.

The index analysis proccess is what allows us to provide a powerfull search experience. Now let's see how
it works.

Each time that you add a new document in your index, the analysis process takes all the **text** attributes
and analyzes them by passing them through various different filters and tokenizing them.

For example let's say we have the following JSON document and we save it to our index.

```
{
    "name": "RED Sport Shoes"
}
```

Now if we have choosed to tokenize on **whitespaces** and the **lowercase** filter enabled for the analysis
the `name` attributes will be converted to the following 3 tokens

- red
- sport
- shoes

What happended it that when we stored the document, the index took the attribute name as used the `Whitespace` tokenizer
producing 3 tokens from the single string value, by spliting on every "space". The tokenized values looked like this:

- RED
- Sport
- Shoes

Next each one of the tokens was passed to the **lowercase** filter coverting for example the "RED" token to "red"
producing the final result.

Now the same process will take place when the index receives a query. Let's say that we query the index with the word
"RED Shoes".

"RED Shoes" is passed through the same analysis proccess and will change to

- red
- shoes

having those 2 tokens makes it easier to find all the documents in the index that contain those 2 tokens.

Keep in mind here that the documents attributes are analyzed each time you updated or create it, and queries
are analyzed at real time when the query enters the index.

{% callout type="info" title="Index update" %}
Because of the analysis proccees updating our index with new configurations, can take some time depending on
the document count, because each one of the documents need to be analyzed once again.
{% /callout %}

## Tokenization

The first and probably the most crucial choise that we have to make is where we
want to tokenize the incomming queries.

### Word Boundaries

Chosing to tokenize the incomming query on **Word Boundaries** is the easiest and safest choise
for most cases.

The example query "Taking care of 2 kids is easy-peasy" will be splitted into those 8 tokens

- Taking
- care
- of
- 2
- kids
- is
- easy
- peasy

### Whitespaces

Next if you will better like have the "easy-peasy" part of the above query as a single token, then
the **Whitespace** option is what you are looking for.

**Whitespace** option will take the above query tokenize it as follow

- Taking
- care
- of
- 2
- kids
- is
- easy-peasy

### Pattern

The **Word Boundaries** and the **Whitespace** options should cover the 90 percent
of the tokenisation cases for your index, but in order to handle the rest 10 percent
there is also the **Pattern** as third option, where you can use a **Regular Expressions**
the will run for the given query, and create a token for every matching occurence.

## Filters

Filters are set of rules that can modify the incoming text before reaching your documents.

### Trim

The **Trim** filter will remove any leading or trailing whitespace from the tokens. So the
the token " red " will change to "red".

### ASCII folding

ASCII folding converts alphabetic, numeric, and symbolic characters to their ASCII equivalent, if one exists.

For example, the filter changes açaí à la carte to acai, a, la, carte.

### Decimal digit

Decimal digit takes all digits and changes them to digits from 0 to 9.

For example, the Bengali numeral ৩ will change to 3.

### Unique

This filter removes duplicate tokens.

For example the "Dory can't tell where dory went" will change
to

- Dory
- can't
- tell
- where
- went

Note here that the second occurency of the word "dory" is missing.

### Charachter mapping

Char mapping is a usefull filter to manipulate the text even before it's
tokenized.

Think of it as translations, for example we could normalize the German letter `ü` to `ue`.

For example using this filter you can transform the word `überraschung` to `ueberraschung`.

### Stip HTML

There are also cases where you want to scrap some webpage and make is searchable. You can use
the **Strip HTML** filter in this case. This filter will remove an HTML tags from your text.

{% callout type="info" title="Text attibutes" %}
Keep in mind that those filters are applied to the incoming queries, and also
to all text attributes of your documents.
{% /callout %}

## Mapping

Probably the most important setting when configuring your index are the mappings, you have to instruct Sigmie
which fields are **Text** in order to analyze them.

### Types

#### Text

In our JSON example from above we have the `name` field tha we map as **text** to let Sigmie know to analyze it.

```
{
    "name": "RED Sport Shoes"
}
```

#### Boolean

Choose the **Boolean** type for fields like `active` the contain `true` or `false`.

```
{
    "active": true
}
```

#### Number

The correct option for **Floats** and **Integers** is the **Number** type.

```
{
    "price": 33.34
}
```

#### Date

Not all `string` fields are **texts** that need analysis. There are also **Dates** and
because there isn't a standart JSON field for them to avoid analysing them it's better
to choose the **Date** option here.

```
{
    "created_at": "2020-12-29 10:55:13"
}
```

#### Keywords

The **Keyword** type is for attributes that don't need analysing, but aren't dates. For
example a `category` attribute would be a perfect match for the **Keyword** option.

```
{
    "category": "winter"
}
```

{% callout type="warning" title="Filtering" %}
In order to use filters on a text field has to be mapped as 'Keyword' and
not as 'Text'. Because 'Keyword' fields aren't analyzed.
{% /callout %}

## Language

Another powerfull filter set that can make your results more relevant are the
language filters.

If your index documents are in one of the supported [Languages](/docs/indices/languages) you can
enjoy powerfull filters created the specific languages.

Visit the [Language](/docs/indices/languages) for more details.

But even if your index language isn't supported yet, you can create your custom langage rules.

### Stopwords

In all languages there are word that more important than others when searching. Also there are words
that don't bring any value at all. An example from the english language is the "and" word.

The stopwords filter allows to create a list with those words that should be ignored.

### Synonyms

There are also words that are different but they mean the same thing. Synonyms filter
is for this cases.

Using the synonyms filter you can for say that the words "treasure" and "diamond" mean the same thing.

### Stemming

Stemming if the process of reducing a word to its root form, in the stemming section of
your index language settings you can define your own stemmings rules.

For example the words "went" and "going" can be both stemmed to the word "go". So if all variants
are reduced to the same root form they will match correcly when searching.
