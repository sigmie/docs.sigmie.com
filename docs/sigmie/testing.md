# Testing 

[[toc]]

## Intoduction 

## Assertions
The `sigmie/testing` package provides some common assertions usefull when 
developing.

For example let's say that you create a index where you map the `:(` emoji with the word `sad` 
and the good emoji `:)` with the word `happy` like below.
```php
$sigmie->newIndex('sigmie')
       ->withoutMappings()
       ->mapChars(name: 'emoji_mapping',
                  mapping: [
                   ':)' => 'happy',
                   ':(' => 'sad'
                  ])
       ->create();
```

You can you use the `Assertion` trait to assert the your `index`
was created as expected.
```php
<?php

namespace Acme;

use Sigmie\Testing\Assertions;

class ExampleTest extends TestCase
{
    use Assertions;

    public function test_foo())
    {
        $this->sigmie->newIndex('foo')
            ->withoutMappings()
            ->unique(name: 'unique_filter', onlyOnSamePosition: true)
            ->create();

        $this->assertIndex('foo', function (Assert $index) {
            $index->assertFilterExists('unique_filter');
        });
    }
}
```

## Paratest
If you are using [paratestphp/paratest](https://github.com/paratestphp/paratest) you can use the
`Sigmie\Testing\ParallelRunner` to avoid collisions between your processes.

Required is that you have a multiple number of Elasticsearch servers running. **One for each process**.
The parallel runner will append **TEST_TOKEN** environment variable at the **ES_HOST** variable for each process.

For example let's say that that you are using `docker-compose` to run your application localy. In order to run
parallel testing with 2 processes you need to have 2 Elasticsearch containers, 1 for each process.

Your `docker-compose.yml` would be

```yml
  es_test_1:
    container_name: es_test_1
    image: docker.elastic.co/elasticsearch/elasticsearch-oss:latest
    ulimits:
      memlock:
        soft: -1
        hard: -1

  es_test_2:
    container_name: es_test_2
    image: docker.elastic.co/elasticsearch/elasticsearch-oss:latest
    ulimits:
      memlock:
        soft: -1
        hard: -1
```

And your `phpunit.xml`

```xml
<php>
    <server name="ES_HOST" value="es_test"/>
    <server name="ES_PORT" value="9200"/>
</php>
```

Then you can run your tests in parallel by using the following command:

```sh
$ vendor/bin/paratest --runner 'Sigmie\Testing\ParallelRunner' -p 2
```

## Connection
You can define your Elasticsearch host and port in your `phpunit.xml`.
```xml
<php>
    <server name="ES_HOST" value="localhost"/>
    <server name="ES_PORT" value="9200"/>
</php>
```

## Hooks
```xml
<extensions>
    <extension class="Sigmie\Testing\SigmieTestHooks"/>
</extensions>
```
