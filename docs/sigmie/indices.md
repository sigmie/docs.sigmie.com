# Index

[[toc]]

## Intoduction 

The basic component when using Elasticsearch are it's indices. You can think of
them as a Database table where all of your documents are living. Your Index configuration is
most important factor for the results returned by your Elasticsearch.

Sigmie is reducing the complexity of the index configuration with a user friendly syntax.

## Indices
```php
$index = $sigmie->newIndex('posts')
                ->withoutMappings()
                ->create();
```
### Prefix
You can create an Index without any complex 
```php
```
## Mapping
```php
use Sigmie\Base\Index\Blueprint;

$sigmie->newIndex('posts')
       ->mappings(function (Blueprint $blueprint) {

           $blueprint->text('title')->searchAsYouType();
           $blueprint->text('description')->unstructuredText();

           $blueprint->number('views')->integer();
           $blueprint->number('value_per_view')->float();

           $blueprint->date('publish_date');
           $blueprint->bool('active');

           return $blueprint;
       })
       ->create();
```

```php
$analyzer = new DescriptionAnalyzer();

$blueprint->text('description')->unstructuredText($analyzer);
```
### Dynamic Mapping
### Index Blueprint
## Tokenization 
## Update
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

## Stemming
```php
$sigmie->newIndex('foo')
       ->stemming([
           'am'=> ['be', 'are'],
           'mouse'=> ['mice'],
           'feet'=> ['foot'],
       ])
       ->withoutMappings()
       ->create();
```
### Language Stemmers
### Stem Override
## Synonyms
### One Way
### Two Way
## Stopwords
```php
$sigmie->newIndex('foo')
        ->stopwords([
            'about', 'after', 'again' // Stopwords
        ]) 
        ->withoutMappings()
        ->create();
```
## Keywords
## Language 