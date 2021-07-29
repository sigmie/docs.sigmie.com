# Settings

[[toc]]

### Custom
In some edge cases you may want to set some custom index
settings. 

You can accomplish with the **config** method on the index
settings instance.

```php
$settings->config('refresh_interval', '-1');
```