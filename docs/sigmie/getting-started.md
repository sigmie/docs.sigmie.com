# Gettings started

Sigmie is a library focused on building a search experience. If you want to store logging data into Elastcisearch you should use the elasticsearch/elasticsearch package.

Make sure that your composer is installed on your machine and run:
```bash
composer require sigmie/sigmie
```

If you are installing `sigmie/sigmie` outside of an existing application, make sure that you require the `vendor/autoload.php` in your code.

After installing Sigmie you may now create a `Sigmie\Sigmie` instance to work with.

```php
use Sigmie\Sigmie;

$sigmie = Sigmie::create(host:'http://localhost:9200');
```

Notice that we passed the `host` argument to the factory method of the `Sigmie` class. This is the address where our **Elastcisearch** is available. 

We assumed that an instance of Elasticsearch is running at `localhost` and listening to the default `9200` port.

Visit the [Running Elasticsearch](/running-elasticsearch) to find out how you can run Elasticsearch on your local machine.``