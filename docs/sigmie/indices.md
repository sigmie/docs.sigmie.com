# Index

[[toc]]

## Intoduction 

The basic component when using Elasticsearch are it's indices. You can think of
them as a Database table where all of your documents are living. Your Index configuration is
most important factor for the results returned by your Elasticsearch.

Sigmie is reducing the complexity of the index configuration with a user friendly syntax.

## Creating an Index
To start with Elasticsesarch you will need to create an index.
By calling `newIndex` you will recieve an instace of the `IndexBuilder` class which will provide some convinient syntax for creating an index for your.

You can create a index using a dynamic mapping with the following:

```php
$index = $sigmie->newIndex('posts')
                ->withoutMappings()
                ->create();
```

This will create an index with the **alias** `posts`. 

::: tip Index name
Your index name will be the current timestamp prefixed with the index
alias. For example if you create a `posts` index on **2020-01-01 23:59:59** the index
name will be `posts_20200101235959000000`.
:::

### Defining Mappings

When creating a production index it's adviced to define your field mappings. You can you so
by calling the `mappings` method and passing a blueprint `Closure` to it.
```php
use Sigmie\Base\Index\Blueprint;

$builder->mappings(function (Blueprint $blueprint) {

           $blueprint->text('title')->searchAsYouType();

            // ...

           return $blueprint;
       });
```

::: warning
Keep in mind that you will need to return the `$blueprint` variable from your `Closure`.
:::

In some cases you may want your field to use a different `Analyzer` than the **default** one.
You can do so by passing the `Analyzer` instance to your field type definition. 

For example:
```php
$analyzer = new DescriptionAnalyzer();

$blueprint->text('description')->unstructuredText($analyzer);
```

### Adding filters
When using Elasticsearch as a Search Engine you will probably want to declare stopwords, synonyms etc. The `IndexBuilder` provides also methods for those cases.

#### Stemming
You can specify custom stemming rules by calling the `stemming` method:
```php
$builder->stemming([
           'am'=> ['be', 'are'],
       ]);
```
In the example above the words `be` and `are` will be stemmed to the word `am`.

#### Stopwords

Additionaly you can specify which words should be ignored during a search execution using
the `stopwords` method.

```php
$builder->stopwords([
            'about', 'after', 'again'
        ]);
```
Now when searching the words `about`, `after` and `again` will be ignored by Elasticsearch.

### Tokenization 
Tokenization is called the process where Elasticsearch takes a text field and splits it's terms
into tokens.

When creating an index you can instruct Elasticsearch how to split the text fields by specifing a tokenizer.
The `IndexBuilder` class provider helpers for 3 types of tokenizers.
#### Whitespaces
To tokenizer on whitespaces use:
```php
$builder->tokenizeOn()->whiteSpaces();
```
#### Word Boundaries
To tokenizer on [word boundaries]() use:
```php
$builder->tokenizeOn()->wordBoundaries();
```

#### Pattern
To tokenizer on a regex pattern use:
```php
$builder->tokenizeOn()->pattern('/[-_]/');
```

## Updating an aliased index
```php
$index->update(function (Update $update) {

    $update->replicas(2)->shards(2);

    return $update;
});
```

```php
$updatedIndex = $index->update(function (Update $update) {

    $update->mappings(function (Blueprint $blueprint) {
        $blueprint->date('created_at');
        $blueprint->number('count')->float();

        return $blueprint;
    });

    return $update;
});
```