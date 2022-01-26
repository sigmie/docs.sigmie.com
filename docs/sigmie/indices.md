# Index

[[toc]]

## Create an index
Typically, you will create a lot of indices when working with Elasticsearch and since Elasticsearch indices are immutable, you will have to create a lot of them again and again until they match your needs.

You can easily create an `index` with the Sigmie client  like below: 
```php
$index = $sigmie->newIndex('products')->create();
```

Once you have created your index, by executing the code above, your index  `name` will be `products` **suffixed** with the current timestamp in `YmdHisu` format. 

### Index shards
By default, your index will have **1** primary and **2** replica shards, but you can change this by chaining the `shards` and `replicas` methods before creating your index.

```php
 $index = $sigmie->newIndex('products')
            ->shards(4)
            ->replicas(3)
            ->create();
```

## Stopwords
If you create an search index it’s common that you want to specify a list of stopword, which will be ignored when you are searching. You can use the `stopwords` method to specify an array of words which Elasticsearch will ignore.
```php
$index = $sigmie->newIndex('books')
              ->stopwords(['about', 'after', 'again'])
              ->create();
```

### Synonyms
Synonyms are a powerful tool when building a search experience for your users, and they are separated into two categories:
#### Two-Way
Two-way synonyms are words that can be interpreted the same. For example, the words **treasure**, **gem**, and **gold**. If a user is searching for the word **gold** you can show him also results containing the words **gem** and **treasure**.

For this example we would create our index like this
```php
$sigmie->newIndex('products')
         ->twoWaySynonyms([
                ['treasure', 'gem', 'gold', 'price']
            ])
            ->create();
```
### One Way
One-way synonyms on the other side, are interpreted only one way back to the correct word. Take for instance the word **i-pod** for which we specify **one-way** synonyms the words **ipod** and **i pod**.
In this case, if the user types `i-pod` we don’t want to return to him results containing `ipod` or `i pod`.

In this second example we would create our index like this
```php
$sigmie->newIndex('products')
            ->oneWaySynonyms([
                ['ipod', ['i-pod', 'i pod']],
            ])
            ->create();
```

## Retrieve an index
You can always retrieve an `index` from Elasticsearch using its `alias`. In the example below we will use the  `products`  alias to retrieve an instance of `AliasedIndex`.

```php
$aliasedIndex = $sigmie->index('products');
```

Once you have your `AliasedIndex` you can read information from it, like name, mappings, number of primary and secondary shards, and so on. 

Of course, you can also retrieve an `index` by using its Elasticsearch name, which will return an `Index` instance.

```php
$index = $sigmie->index('products_20220124084700765326');
```

::: warning Difference between Index and Aliased Index
The difference between an `Index` and an `AliasedIndex` is that you can’t update an `Index` instance.
:::

## List indices
To list your `indices` simply call the `indices` method on the `Sigmie` instance, and you will get a collection with  `Index` class instances. 
```php
foreach ($sigmie->indices() as $index) {
    echo $index->name;
}
```

## Delete an index

There are two ways to delete your index, either you can do it using the sigmie instance
```php
$sigmie->delete('products');
```

Or you can call the `delete` method on the index itself.

```php
$aliasedIndex = $sigmie->index('products');

$aliasedIndex->delete();
```







