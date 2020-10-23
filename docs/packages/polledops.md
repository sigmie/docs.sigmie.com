# Poll Ops

Polled Ops library is created for actions which have delays and therefore they need verification that they are successfully complete.

## Installation

You can install the Promises library via [Composer](https://getcomposer.org).

```sh
 $ composer require sigmie/poll-ops
```

## Basic usage
Let's say you want to create a new VM instance on your Cloud platform inside of your desired subnet but, if
something goes wrong with the creation, you want to rollback the subnet creation.

```php
use Sigmie\PollOps\Chain;
use Sigmie\PollOps\Promise;
use Sigmie\PollOps\Exceptions\PromiseRejection;

$cloudClient = new CloudClient($key);

// Rollback action which should be called when something goes wrong in the chain
$rollback = fn() => $cloudClient->removeSubnet('awesome-subnet');

$createSubnet = new Promise(
                    fn()=> $cloudClient->createSubnet('awesome-subnet'),
                    fn()=> $cloudClient->subnetExists('awesome-subnet'));

$createVm = new Promise(
                    fn()=> $cloudClient->createVm('awesome-vm'),
                    fn()=> $cloudClient->isVmRunning('awesome-vm'));

$chain = new Chain([$createSubnet, $createVm]);

$chain->catch($rollback);

// Proceed with the chain execution
$chain->proceed();
```

In the example above, we create a new subnet and then a new VM. If for some reason,
the subnet doesn't exist or the VM is not running, the `$rollback` callback will be called.

::: tip Tip
 The default delay between the verifications is **60** seconds and the default verification
 attempts are **3**. You can change this values by extending the `AbstractPromise` class.
:::

## Creating custom promises
You may create your custom promise classes and use them within a chain by extending
the `AbstractPromise`.

```php
class CreateSubnet extends AbstractPromise
{
    private $cloudClient;

    public function __construct($cloudClient)
    {
        $this->cloudClient = $cloudClient;
    }

    /**
     * Promise action method
     */
    public function execute(array $args, Closure $resolve, Closure $reject)
    {
        $this->cloudClient->createSubnet('awesome-subnet');

        return $resolve();
    }

    /**
     * This method verifies if the executed action was
     * successfully completed
     *
     * @return bool
     */
    public function verify(): bool
    {
        return $this->cloudClient->subnetExists('awesome-subnet');
    }

    /**
     * This method determines how many second should the
     * promise wait before retrying to verify itself
     *
     * @return int
     */
    public function attemptsInterval(): int
    {
        return 60;
    }

    /**
     * This method determines how many times this promise
     * should attempt to verify itself before rejecting
     *
     * @return int
     */
    public function maxAttempts(): int
    {
        return 3;
    }
}
```

After your can use it in a chain like you would with the default `Promise` instance.

```php
$chain = new Chain([new CreateSubnet($subnetClient), ...]);
```

::: warning Warning
The promise actions should **always** return `$resolve()` or
`$reject()`. Otherwise a `UnknownPromiseResponse` exception will be thrown.
:::

## Passing values

Any arguments passed to the `$resolve` callback will we available the the next chain element within the `$args` parameter.

For example resolving a promise and passing the string `foo` as the first argument tho
the `$resolve` closure,

```php
public function execute(array $args, Closure $resolve, Closure $reject)
{
    // ...

    return $resolve('foo');
}
```
Will make the `foo` string available in the next chain element as the first value in the `$args` array.

```php
public function execute(array $args, Closure $resolve, Closure $reject)
{
    echo $args[0]; // foo
}
```

## Rejection
In case of a rejection a `Sigmie\Promises\Exceptions\PromiseRejection` is passed to the catch closure.

If you reject a promise with a message like bellow:
```php
public function execute(array $args, Closure $resolve, Closure $reject)
{
    return $reject('Something went wrong');
}
```
You will get a `PromiseRejection` exception as argument to your catch callback function.
```php
use Sigmie\Promises\Exceptions\PromiseRejection;

$chain->catch(function(PromiseRejection $rejection){

    echo $rejection->getMessage() // 'Something went wrong'
});
```
