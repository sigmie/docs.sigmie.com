# Polled Operations
[[toc]]
Poll-ops is a PHP library created for actions which have delays and therefore
 they need verification that they were successfully complete.

## Installation

You can install the library via [Composer](https://getcomposer.org) by running.

```sh
 $ composer require sigmie/poll-ops
```

## Basic usage

### Insist
Let's say you want to delete a record over an REST API, and for some reason the operation isn't always successful
and you want to attempt to delete the record multiple times until the operation succeeds.

```php
use function Sigmie\PollOps\insist;

$deleteCallback = fn() => $apiClient->deleteRecord($recordId);

insist($deleteCallback)->tries(10)->proceed();
```

In the above example the `deleteCallback` will be called at least **10** times before throwing an `Exception`. If at any attempt it will return `true` your code will continue.
If it returns `false`, it will sleep and retry until it reaches the maximum amount of attempts. 

::: tip Retry after time
By default the callback will be retried after **3 seconds**.
:::

In some other cases you may want to delay the operation execution. You can do this be calling
the `delay` method on the operation builder and passing the desired amount of second.

```php
insist($deleteCallback)->tries(5)->delay(15)->proceed();
```

Or you may wish to also catch **Exceptions** instead of the task return value.

```php
insist($callback)->catchExceptions()->tries(3)->proceed();
```

### Operation

Operations are tasks that need verification that they were successful. For example if your delete a
resource in a API and then you try to fetch the resource again in order to verify that the resource isn't available anymore.

```php
use function Sigmie\PollOps\operation;

$resourceDeleted = fn() => $resource->exists() == false;

operation(fn () => $resource->delete())
    ->verify($resourceDeleted)
    ->catch(function () {
        // Handle delete failure 
    })
    ->then(function () {
        // Handle delete success 
    })
    ->finally(function () {
        //
    })
    ->proceed();
```
In the code above the `$resource->delete()` will be called to delete the resource. Afterwards the operation
will try to verify that the resource doesn't exist anymore. If the `$resourceDeleted` callback returns `false` your code
will stop executing and retry the verification attempt again until it reaches the max amount of verification tries.

If all verification attempts return `false` the `catch` callback will be called. By default the verification will be attempted **3** times.

You can organize big operations into classes by extending the `AbstractOperation` class.
```php
<?php

namespace Acme;

use Sigmie\PollOps\AbstractOperation;

class SomeOperation extends AbstractOperation
{
    public function execute(array $args, \Closure $resolve, \Closure $reject)
    {
        // Perform operation

        return $resolve();
    }

    public function verify(): bool
    {
        // Is operation result as expected

        return true;
    }

    public function maxAttempts(): int
    {
        return 5;
    }

    public function attemptsInterval(): int
    {
        return 15;
    }

    public function exceptionMessage(): string
    {
        return 'Operation wasn\'t successful.';
    }
}
```

You can pass arguments to the `execute` method of your operation by passing you values to the `proceed` method of the
operation builder.

::: tip Early reject
Inside the `execute` method of the **Operation** instances you can directly reject the operation
without any verification if something is wrong.
:::

### Chain

The `chain` function allow you to chain multiple operation together. This is useful when you have multiple steps for
and operation and you need an assurance that the previous step was successfully executed, otherwise you need a **rollback**
action.

```php
use function Sigmie\PollOps\chain;

chain([
    new CreateServer,
    new OpenSSHPort,
    new InstallSoftware
])->catch(function () {

    // Destroy server

})->proceed();
```
