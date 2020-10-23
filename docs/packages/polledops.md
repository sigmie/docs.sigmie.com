# Polled Operations

Poll-ops is a PHP library created for actions which have delays and therefore
 they need verification that they were successfully complete.

## Installation

You can install the library via [Composer](https://getcomposer.org) by running.

```sh
 $ composer require sigmie/poll-ops
```

## Basic usage

### Insist
Let's say you want to delete a record over an REST API, but the deletion isn't always successful
and you want to attempt to delete the record multiple times until the operation succeeds.

```php
use function Sigmie\PollOps\insist;

$deleteCallback = fn() => $apiClient->deleteRecord($recordId);

insist($deleteCallback)->tries(10)->proceed();
```

In the above example the `deleteCallback` will be called at least **10** times before throwing an `Exception`. If at any attempt the Callback will return `true` your code will continue.
If the `deleteCallback` throws an `Exception` or returns `false`, it will sleep and retry until it reaches the maximum amount of attempts. 

### Operation

### Chain

## Operation Classes