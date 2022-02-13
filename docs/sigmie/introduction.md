
# Introduction

## What is Sigmie
Sigmie is a PHP Library for building On-Site searches on top of Elasticsearch. It provides developer-friendly APIs with a goal to allow you to create powerful search experiences without Elasticsearch expertise.

Here is an example to get an idea
```php
use Sigmie\Base\Documents\Document;

// Create an index called 'products' and define the words
// 'i-phone' and 'i phone' as synonyms for the word 'iphone'.
// Also lowercase all text values within the index.
$sigmie->newIndex('products')
    ->synonyms([
        'iphone' => ['i-phone', 'i phone']
    ])
    ->lowercase()
    ->create();

// Add a searchable document to the created index
$sigmie->collect('products')->add(new Document(['title' => 'iPhone 13 Pro']));

// Find documents within the index whose title matches the 'i-phone' query
$products = $sigmie->search('products')->match(fields: 'title', query: 'i-phone')->get();
```

The above example shows the three core features of the library:
* **Index creation** with an easy-to-use syntax that allows you to define stuff like **synonyms** and **stopwords**.
* **Convenient index wrapper** that allows you to interact with your index in an enjoyable way.
* **A powerful query builder** allowing you to fluently query your index.

We dived deep into Elasticsearch in an attempt to make building searches as enjoyable as possible, by creating the abstractions on top of it. Elasticsearch knowledge is optional if you want to use this library. In the documentation, we cover all the required details you need to know. Read along and you will get a high understanding of how to build an awesome search experience for your users.

## A different opinionated approach
Elasticsearch is a very powerful search engine providing build-in solutions for all common search optimizations, but it has a deep learning curve for somebody who just wants a simple solution for his website without having to invest a lot of time in it. We used a different approach to transform making Elasticsearch something easy to deal with.

Things that you can easily do using the library, which would be painful to do otherwise.

* **Updating** an existing index with new settings.
* Creating **custom** analyzers for your index.
* Building **complex** and  **nested** boolean queries.
* Defining your index field mappings.
* Building **nested** aggregations.

It’s fine if you aren’t familiar with the above terms, our documentation will make you familiar with them without making you feel overwhelmed. If you are a more experienced user of Elasticsearch you can find useful ways which can make you more productive.










