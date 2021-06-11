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
        // ...

        $this->assertAnalyzerExists(index:'sigmie', analyzer:'default');

        $this->assertCharFilterExists(index:'sigmie', charFilter:'emoji_mapping');

    }
}
```

## Traits
```php
<?php

namespace Tests\Feature;

use Sigmie\Testing;
use \PHPUnit\Framework\TestCase;

class ExampleTest extends TestCase
{
    use Testing;

    public function test_example()
    {
        // ...
    }
}
```

## Connection
```xml
<php>
    <env name="ES_HOST" value="elasticsearch:9200"/>
</php>
```

## Hooks
```xml
<extensions>
    <extension class="Sigmie\Testing\SigmieTestHooks"/>
</extensions>
```
