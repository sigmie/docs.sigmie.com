# Index

[[toc]]

:::tip Examples
The `curl` examples in this page assume that you have a running Elasticsearch on your local machine at `localhost:9200`. You can check how to set up Elasticsearch to run on your machine easily on [local testing](#) page.
:::

## Create an index
Typically, you will create a lot of indices when working with Elasticsearch and since Elasticsearch indices are immutable, you will have to create a lot of them again and again until they match your needs.

You can easily create an `index` with the Sigmie client  like below: 
```php
$index = $sigmie->newIndex('products')->create();
```

Once you have created your index, by executing the code above, your index  `name` will be `products` **suffixed** with the current timestamp in `YmdHisu` format. 

## Retrieve an index
You can always retrieve an `index` from Elasticsearch using it’s `alias` . In the example below we will use the  `products`  alias to retrieve an instance of `AliasedIndex`.

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
