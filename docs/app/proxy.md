# Proxy requests

Once your have a running Elasticsearch cluster in place, you can send send queries to it, by using
one of the provided access tokens and the `https://proxy.sigmie.com` url as your Elasticsearch Host URL.

## Authentication

When proxying a request you have to set the `Authorization` header with token value `Bearer xxxxxxxxxxxxxxxxxxtokenxxxxxxxxxxxxxxxxxx`.

A **CURL** example to list your indices would be
```
curl --request GET \
  --url https://proxy.sigmie.com/_aliases \
  --header 'authorization: Bearer xxxxxxxxxxxxxxxxxxtokenxxxxxxxxxxxxxxxxxx' \
  --header 'content-type: application/json'
```

## Token types

By using the **Admin** token you can make all Elasticsearch operations, like when connection to Elasticsearch directly.

With the **Search** token you can only send query request.