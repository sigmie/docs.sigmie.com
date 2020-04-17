# Promises

Promises library is php a library for actions which need to happen synchronously but because of some third party dependencies each of this actions needs a verifications that it's been successful.

## Installation

You can install the Promises library via [Composer](https://getcomposer.org/) by running the following command:

```sh
 $ composer require sigmie/promises
```

## Basic usage
Let's say you want to create a new VM instance on your Cloud platform inside of your desired subnet.

```php
use Sigmie\Promises\Chain;
use Sigmie\Promises\Promise;
use Sigmie\Promises\Exceptions\PromiseRejection;

$cloudClient = new CloudClient($key);

$rollback = fn(PromiseRejection $rejection) => $cloudClient->removeSubnet('awesome-subnet');

$createSubnetPromise = new Promise(
                    fn()=> $cloudClient->createSubnet('awesome-subnet'),
                    fn()=> $cloudClient->subnetExists('awesome-subnet'));

$createVmPromise = new Promise(
                    fn()=> $cloudClient->createVm('awesome-vm'),
                    fn()=> $cloudClient->isVmRunning('awesome-vm'));

$chain = new Chain([
    $createSubnetPromise,
    $createVmPromise,
]);

$chain->catch($rollback);

$chain->proceed();
```