# Query 

[[toc]]

# Writing

If you are an Experienced Elasticsearch user you may want to write your own queries. You can do this using the `SearchBuilder` class.

You can retrieve an instance of the `SearchBuilder class by calling the `search` method on the Sigmie Client.

```php
$searchBuilder = $sigmie->search(index: 'products');
```

## Queries

The Search builder supports the most common clauses that you may need when searching for Documents in your index. 

### Match All

The `MatchAll` clause matches all the `Documents` in your index.

```php
$docs = $searchBuilder->matchAll()->get();
```