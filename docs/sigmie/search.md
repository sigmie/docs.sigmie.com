# Search

[[toc]]


## Templates

Elastcisearch allows you to create “Search Templates”. This way you can change your search query without changing your application code.

Using Sigmie you can create a search that accepts a `name` parameter.

```php
use function Sigmie\Helpers\mustache_var;

$sigmie->newSearch(index:'users')
		 ->multiMatch(mustache_var('name'), ['first_name','last_name'] ) })
		 ->save('find-users');
```

Note that we used the `mustache_var` helper function which outputs the given string in [mustache](https://mustache.github.io/) syntax, which is what Elasticsearch expects.

::: tip Default value
You can pass a default value to the `mustache_var` method as the second argument. This is especially useful for size variables (`->size(mustache_var(‘size’, 100)`) .
:::

Now you can call the `template` method on the `SearchBuilder` class to use your **saved** template passing the template name.
```php
$docs = $sigmie->newSearch(index: 'users')
               ->template(name: 'find-users')
               ->run(['name' => 'Nico']);
```