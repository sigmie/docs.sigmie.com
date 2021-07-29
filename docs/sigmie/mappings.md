# Mapping 

[[toc]]

# Introduction

## Field mapping

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

## Dynamic field mapping

```php
$sigmie->newIndex('posts')
       ->withoutMappings()
       ->create();
```

::: tip Production
In a production **Index**, you should almost always to achieve 
better results when searching. 
:::