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

## Configurations

When you create a new index we are applying some default configurations, but the
real power commes when you change those to perfectly match the documents that the index contains.

The index's configurations can be summed up into 2 categories

## Tokenizer

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
### ASCII folding
### Decimal digit 
### Unique 
### Charachter mapping
### Stip HTML 

### Mapping
### Types

### Language
### Stopwords 
### Synonyms 
### Keywords 

{% callout type="danger" title="Example" %}
This is an example callout
{% /callout %}
