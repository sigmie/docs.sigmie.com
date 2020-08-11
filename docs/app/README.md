# Application

Sigmie application is focused to help developers using Elasticsearch as search engine.

When it comes to using Elasticsearch as a search engine most of us are facing a lot of common problems. Beginning with the infrastructure, security, and data synchronization, until the relevance of the search results.

## Common problems

Despite the fact Elasticsearch is free to use, it can become challenging to configure everything correctly. And that's exactly where our app can help you.

1.Security

Since Elasticsearch has no build in authentication one of the first
things that somebody installing Elasticsearch has to take care of
authentication. One common used method is using
[basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication).

Also good practice is to hide your server's public ip
address to the world in order to avoid any malicious attempts.

2.Searching

When using search-as-a-service provider you can comfortably send your
user's input directly from your frontend to your search. With
Elasticsearch you will need a controller in your application's
backend to validate the request data.