# Getting Started 

[[toc]]

## Installation
Make sure you have Composer installed on your machine and execute:

```
 $ composer require sigmie/sigmie
```
Afterwards you must require the `vendor/autoload.php` file in your code.

Then your are ready to go, an you can use the `SigmieClient` like below to retrieve
your Elasticsearch indices.

```php
<?php

require 'vendor/autoload.php';

$sigmieClient = SigmieClient::createFromBasicAuth('username', 'password', 'https://example.sigmie.app');

$indices = $sigmieClient->indices()->list();
```