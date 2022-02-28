# Languages
[[toc]]

## Introduction

To get the most accurate search results, you will need some language specific configurations. By default Elasticsearch provides various `analyzers` and `filters` for different languages. Let’s see the languages supported by ***Sigmie*** at the moment. 

::: warning
You have to call the `language` directly after the `newIndex` method.
:::

## German
To use the **German** language you need to require the `sigmie/german` package in your composer.json like bellow.
```sh
$ composer require sigmie/german
```

Once you have the **German** language installed, you can create your German language optimized index. To do this you need an instance of the **German** index bulider. To do this, simply call the `language` method when creating your `index` and pass a new instance of the `Sigmie\German\German` class to it.

```php
use Sigmie\German\German;

$germanBuilder = $sigmie->newIndex('german_tv_shows')
							->language(new German);
```

Once you have an instance of the **German** index builder you can chain the following methods.

### German Stemming methods
   * `germanLightStemmer`
  This method will apply the **Light** stemming approach to the German language.
```php
$germanBuilder->germanLightStemmer();
```

   * `germanStemmer`

This stemming algorithm will transform for example the words **katze** and **katzen** to **katz**.

```php
$germanBuilder->germanStemmer();
```

You can find more info about the German Stemmer [here](https://snowballstem.org/algorithms/german/stemmer.html).

  * `germanStemmer2`

   The German Stemmer 2 is an extension of the German Stemmer which also takes into consideration that, the letters  **ä**, **ö** and **ü** and often written as **ae**, **oe** and **ue** respectively.

```php
$germanBuilder->germanStemmer2();
```

There are also some more differences between them. You can find more info about them [here](https://snowballstem.org/algorithms/german2/stemmer.html).
   * `germanMinimalStemmer`
  
```php
$germanBuilder->germanMinimalStemmer();
```
  This method will apply the **Light** stemming approach to the German language.

:::tip Choosing the right stemmer
The best way to find the most suitable stemmer is to create the same index using each one of them and compare your search results. There is **not** a golden rule for choosing a stemming algorithm.
:::

### German token filters
   * `germanNormalize`

   The **German Normalisation** will make the following replacements
	 * **ß**  ->  **ss**
	 * **ä** -> **a**
	 * 	 **ö** -> **o**
	 * 	 **ü** -> **u**
	 * 	 **ae** -> **a**
	 * 	 **oe** -> **o**
	 * 	 **ue** -> **u** when not followed by a vowel or **q**.

   * `germanStopwords`

This will apply the `german_stop` filter, which includes all the worlds below. 

aber, alle, allem, allen, aller, alles, als, also, am, an, ander, andere, anderem, anderen, anderer, anderes, anderm, andern, anderr, anders, auch, auf, aus, bei, bin, bis, bist, da, damit, dann, der, den, des, dem, die, das, daß, derselbe, derselben, denselben, desselben, demselben, dieselbe, dieselben, dasselbe, dazu, dein, deine, deinem, deinen, deiner, deines, denn, derer, dessen, dich, dir, du, dies, diese, diesem, diesen, dieser, dieses, doch, dort, durch, ein, eine, einem, einen, einer, eines, einig, einige, einigem, einigen, einiger, einiges, einmal, er, ihn, ihm, es, etwas, euer, eure, eurem, euren, eurer, eures, für, gegen, gewesen, hab, habe, haben, hat, hatte, hatten, hier, hin, hinter, ich, mich, mir, ihr, ihre, ihrem, ihren, ihrer, ihres, euch, im, in, indem, ins, ist, jede, jedem, jeden, jeder, jedes, jene, jenem, jenen, jener, jenes, jetzt, kann, kein, keine, keinem, keinen, keiner, keines, können, könnte, machen, man, manche, manchem, manchen, mancher, manches, mein, meine, meinem, meinen, meiner, meines, mit, muss, musste, nach, nicht, nichts, noch, nun, nur, ob, oder, ohne, sehr, sein, seine, seinem, seinen, seiner, seines, selbst, sich, sie, ihnen, sind, so, solche, solchem, solchen, solcher, solches, soll, sollte, sondern, sonst, über, um, und, uns, unse, unsem, unsen, unser, unses, unter, viel, vom, von, vor, während, war, waren, warst, was, weg, weil, weiter, welche, welchem, welchen, welcher, welches, wenn, werde, werden, wie, wieder, will, wir, wird, wirst, wo, wollen, wollte, würde, würden, zu, zum, zur, zwar, zwischen

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
