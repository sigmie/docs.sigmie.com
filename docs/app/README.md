# Application

Sigmie application is focused to help developers using Elasticsearch as search engine.

When it comes to using Elasticsearch as a search engine most of us are facing a lot of common problems. Beginning with the infrastructure, security, and data synchronization, until the relevance of the search results.

## Common problems

Despite the fact Elasticsearch is free to use, it can become challenging to configure everything correctly. And that's exactly where our app can help you.

### Security

1. Since Elasticsearch has no build in authentication one of the first
things that somebody installing Elasticsearch has to take care of
authentication. One common used method is using
[basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication).

2. Also good practice is to hide your server's public ip
address to the world in order to avoid any malicious attempts.

### Searching

When using search-as-a-service provider you can comfortably send your
user's input directly from your frontend to your search. With
Elasticsearch you will need a controller in your application's
backend to validate the request data.

## Solution

The application's goal is to take over the pain of dealing with the above problems.

### Creation

In less than 10 minutes you can have a secure and reliable Elasticsearch cluster. After you have
been registered and you have created a project.

You will choose the:
* Desired amount of nodes
* Cluster's location

And we take care of:
* Creating the Elasticsearch nodes
* Putting a Loadbalancer in front of them
* Configuring basic authentication
* Hiding your Clusters public IP address

## Usage

When your Cluster is up and running you can make use of the following access tokens.
 * [Admin Token](#admin-token)
 * [Search-Only Token](#search-only-token)

## Admin Token

You can make any request that you would normally send to your Elasticsearch by using the **Admin Token**. You will have set the `Bearer` token in your requests `Authorization` header and use our [proxy](/app/proxy) URL address.

::: warning Warning
Keep in mind that there is monthly proxy request limit. It's preferred to use proxy requests for your search operations and not for data indexing.
:::

## Search-Only Token

Same like with the [Admin Token](#admin-token) you will have a search token available. Difference is that
with this token you will be allowed to make only search operation.

::: tip Tip
The purpose of this token is to allow you to query Elasticsearch directly from your frontend. Saving you the backend work.
:::