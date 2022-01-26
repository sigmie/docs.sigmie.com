# Languages
[[toc]]

## Introduction

To get the most accurate search results, you will need some language specific configurations. By default Elasticsearch provides various `analyzers` and `filters` for different languages. Let’s see the languages supported by ***Sigmie*** at the moment. 

:::warning
You have to call the `language` directly after the `newIndex` method.
:::

## Greek
To use the **Greek** language require the `sigmie/greek` package in your composer.json
```sh
$ composer require sigmie/greek
```

This will make the `Sigmie\Greek\Greek` class available, which you can use as a parameter to the `language` method when creating your index.

Get an instance of the Greek index builder.
```php
use Sigmie\Greek\Greek;

$greekBuilder = $sigmie->newIndex('greek_songs')
						->language(new Greek);
```

The three methods `greekLowercase`, `greekStemmer`, `greekStopwords` are now available on the builder instance. 

We create an `Index` optimized for the **Greek** language like this

```php
$greekIndex = $greekBuilder->greekLowercase()
            				->greekStemmer()
            				->greekStopwords()
            				->create();
``` 

::: warning Greek Lowercase
Be sure to use the `greekLowercase` instead of the `lowercase` method on the instance builder. 
:::

### Greek Stopwords list 
The greek stopwords filter includes the following words:

ο, η, το, οι, τα, του, τησ, των, τον, την, και , κι, κ, ειμαι, εισαι, ειναι, ειμαστε, ειστε, στο, στον, στη, στην, μα, αλλα, απο, για, προσ, με, σε, ωσ, παρα, αντι, κατα, μετα, θα, να, δε, δεν, μη, μην, επι, ενω, εαν, αν, τοτε, που, πωσ, ποιοσ, ποια, ποιο, ποιοι, ποιεσ, ποιων, ποιουσ, αυτοσ, αυτη, αυτο, αυτοι, αυτων, αυτουσ, αυτεσ, αυτα, εκεινοσ, εκεινη, εκεινο, εκεινοι, εκεινεσ, εκεινα, εκεινων, εκεινουσ, οπωσ, ομωσ, ισωσ, οσο, οτι
