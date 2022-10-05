---
title: Analytics
description: Data driven changes
---

Get to know your Search.

---

Analytics and data play a crucial part in almost everything; you can use the analytics section in the Sigmie application to see metrics about your Searches and your users.

## Engine

Unlike the traditional request counting that's used for counting requests made to your Sigmie application. There is a difference when counting **Analytics Requests**. Each time
you user types a letter in a search field a new request is made. Counting those requests
would lead to confusing data in your analytics.

The analytics engine sets a search session duration of 30 seconds. As long as the user types in the Search box and the last input matches the previous one this is counted as a single **analytics request**.

In the example

- p -> pe -> pet -> pete -> peter
  the user types 5 letters making 5 requests but they are counted as 1 in the analytics
  engine.

* peter

Now in the example

- p -> pe -> pet -> m -> mi -> mic -> mick -> micke -> mickey
  the user makes 3 requests for `pet` and then he changes it's mind and starts seaching
  for `mickey` making in total 9 requests, 3 for the letters `pet` and 5 for `mickey`.
  These are considered 2 different searches and are stored as 2 analytics reuqests.

* pet
* mickey

In the last example

- p -> pe -> pet -> (30 seconds passed) -> pete -> peter
  The user types 5 letter making 5 request **but** between `pet` and `pete` passed 30
  seconds. In this case this search is treated as 2 analytics request.

* pet
* peter

### Users

The analytics engines distiguishes the requests made by the IP Address, but if you
can also send a `user_token` to use instead.

Example
```json
{
  "query": "peter",
  "user_token": 34
}
```

## Metrics

In the Analytics section in the Sigmie UI, you will find various metrics about your application Searches.
Each metric also has a trend indicator that compares the values of the current time range with those of the same previous range.

To clarify, if your time range is "**Last Month**", this trend compares the retrieved values with the "**Month before the last**".

### Total Searches

The "Total Searches" metric shows how many Search requests were made during the specified time range.

### No Results Rate

The "No Results Rate" displays what percent of the Searches didn't return any matches.

### Unique Searches

The "Unique Searches" displays how many incoming Queries are unique.

### Response time

You Index and Search settings can affect your search engine's response time.

This metric shows the average time your engine needs to process the incoming Query.

### Total Hits Served

"Total Hits Served" is the total amount of the returned hits.

Search Requests
The "Search Requests" graph displays the Search requests spread over the time range.

## Scoreboards

### Popular Queries

The "Popular Queries" show the Queries that your users typed the most.
This is useful to understand "how" your users use the Searchbox that you gave them to make adjustments accordingly.

### Top Queries without results

The "Top Queries without results" are the Queries that the users type more often, and no results are returned.

For an Online-Shop this would indicate a product that may be missing from your Shop.

Suppose the word "Nutella" appears there. In that case, it means many users come to your Shop wanting to order a "Nutella", but it isn't available.
