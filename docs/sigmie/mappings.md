# Mapping 

[[toc]]

Even though you can insert documents into Elasticsearch without specifying their structure, specifying the structure of your document will allow you to the most out of your index. And because Indices are immutable it’s important to define your index mapping when you are creating it.

Calling the `mappings` method when creating your Index provides a convenient way of defining the Index mappings.

::: info
Despite Elasticsearch’s JSON Document structure, Elasticsearch supports more fields than the JSON schema.
::: 

Let’s say that you want to create an Index containing **Books**  and the documents will have a structure like this:
```json
{
   "title":"The 7 Habits of Highly Effective Peoples",
   "author":"Stephen Covey",
   "pages":381,
   "published_at":"15 August 1989"
}
```

For your benefit, you may define the `published_at` as a date field to avoid Elasticsearch thinking that the `published_at` field is a text field.

You can easily achieve this by creating your index like this:

```php
use Sigmie\Base\Mappings\Blueprint;

$sigmie->newIndex('books')
        ->mapping(function (Blueprint $blueprint) {					
                $blueprint->text('title')->searchAsYouType();
                $blueprint->text('title')->unstructuredText();
                $blueprint->number('pages')->integer();
                $blueprint->date('published_at')->format('d L Y');
        })
        ->create();
```

Of course, you can also make it a little bit nicer by creating an invokable class with your index schema and passing it to the `mapping`  method.

```php
use Sigmie\Base\Mappings\Blueprint;

class BooksMapping
{
    public function __invoke(Blueprint $blueprint)
    {
     		$blueprint->text('title')->searchAsYouType();
          $blueprint->text('title')->unstructuredText();
          $blueprint->number('pages')->integer();
          $blueprint->date('published_at')->format('d L Y');
    }
}

$sigmie->newIndex('books')
        ->mapping(new BooksMapping)
        ->create();
```

::: tip Production
In a production **Index**, you will almost always want to define your index mappings, to achieve better search results.
:::

## Field types
Unlike JSON, Elasticseasch supports much more field types for various use cases.
For example, you can say that a string value of your document is an IP field.

Below are listed your field type supported in the Sigmie library.

### Text
There are several text field types supported, each one of them serves a different purpose in your application.
::: tip Combine
You can combine text field types. For instance a **Category** field can be both `keyword` and `search_as_you_type`.
:::
#### Search as you type
Like its name says, this field type is perfect to use when you want to immediately show the results to the users, while he is typing in a search field.
```php
$blueprint->text('title')->searchAsYouType();
```

#### Unstructured text
This type is a good choice if you save long text like an article, product description, or book content and want it to be searchable. In those cases, it’s unlikely that you would show the whole field content to the user while he is searching. 
```php
$blueprint->text('description')->unstructuredText();
```

####  Completion
Completion fields are useful if you are creating an autosuggest dropdown which will appear to the user while he is typing into your search field.
```php
$blueprint->text('suggestions')->completion();
```

### Sortable
By default, you can’t sort text fields, because all the text fields are **analyzed**. This means that depending on your analyzer the field value stored isn’t in its original form. This is the secret that is making Elasticsearch so amazingly fast, compared to traditional SQL databases.

If you know that you will need to sort on a spefic field call the `sortable` method.
```php
$blueprint->text('title')->searchAsYouType()->sortable();
```

This way the **title** field value will be stored twice, one which will be **analyzed** and allow you to search on it, and one containing the **raw** content.

When you want to sort on a text field you will need to use the `.raw` suffix.
```php
$sortedBooks = $sigmie->search('books')->matchAll()->sort('title.raw', 'asc')->get();
``` 

### Custom Analyzer
To all text fields of your mappings, you may also pass a custom analyzer
```php
use Sigmie\Base\Analysis\Analyzer;

$blueprint->text('suggestions')->completion(new Analyzer);
```

## Number
The blueprint offers the following methods covering the most required number types.
 
#### Integer
The `integer` method maps the field as integer:

```php
$blueprint->number('pages')->integer();
```

#### Float
The `float` method maps the field as float:†
```php
$blueprint->number('price')->float();
```

#### Long

The `long` method that maps the field as long:

```php
$blueprint->number('bytes')->long();
```
### Date
Mapping your date fields is always a good idea because dates come in various formats depending on your country and region. They also appear like normal `string` fields.

To take off the resposibility of guessing the correct date format you can help your Elasticsearch by passing the date format.

```php
$blueprint->date('publish_date')->format('yyyy-MM-dd');
```

::: tip Formating
You can always adjust Elasticsearch to macht your data structures. Therefore there is no need to redeploy your application.
:::

### Boolean
The `bool` method that maps the field as boolean:
```php
$blueprint->bool('active');
```