---
title: Search
description: Query configurations.
---

Searches are set sets of configurations for a query.

---

Once you have an configured your index and you have added Documents, you can now
start sending queries to it, but you may want to try different query configuration
until you reach the desired result.

This is where **Searches** come to play. You can think of them as configurations sets
where you define which attributes are more important than other.

Mostly you will need different Searches when you want to query an index from different places.

For example let's say that you have an online shop and you want to query it's products on 2 different point. One for the main shop search that your customers will use to search for
the product that they want to buy, and secondly from your shops backend where your employees will need to find products, based on some unique product code.

Now in the first scenario you want to forgive your shop customers any typo errors disallow
them to search for let's say "red" products.

You would then exlude the `color` attribute from the **Searchable attributes** list, and enable **Typo tolerance**.

And in the second Search for your employees you make the `supplier_code` attribute searchable.

Now of course you may also allow your employees to make some typos, but this is just an example of 2 usefull searches for the same index.

Another usecase could be that you want to run some A/B tests.


