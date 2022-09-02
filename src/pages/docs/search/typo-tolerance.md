---
title: Typo Tolerace
description: Fuzzy matching for chosed attributes
---

Forgive spelling mistakes.

---

Our users are humans, and like everyone, they may make spelling mistakes. We can forgive one or two mistakes by setting "Typo Tolerance" on the Search level.

## Attributes

Not all attributes should be a good fit for Search "Typo Tolerance". Take
the following Document, for example:

```json
{
  "name": "Finding Nemo",
  "category": ["Adventure", "Family"],
  "release_year": "2003",
  "duration_minutes": 100
}
```

The `name` attribute is a perfect fit for Typo Tolerance, unlike `release_year` where the **year** has to be more precise.

You can pick your **Typo Tolerated** attributes in your Search settings
in the Sigmie UI.

## Tolerance

There are 2 settings that you can configure for typo tolerance.

### 1 Typo characters

The minimum number of characters a **word** in the query string **must** contain to allow **1** typo.

This means if we set this setting to `3` and misspell the word `red` by writing `rid`.

The Search will also return matches for `red`.

But if we have set this setting to `4` because the word `red` contains **only** 3 letters, which is less than what we configured.

Documents containing the word `red` **won't** be matched.

Here are more examples that will match if we set this setting to **5**.

- Sim**d**a -> Sim**b**a
- Mou**r**asa -> Mou**f**asa
- Pu**n**ba -> Pum**b**aa

Also, here ane are more examples that **won't** match.

- N**e**la -> ~~Nala~~
- Z**e**zu -> ~~Zazu~~
- S**k**ar -> ~~Scar~~

### 2 Typos characters

Same the **2** typos settings, defines the minimum number of characters a **word** in the query string **must** contain to allow **2** typos.

Here are more examples that will match if we set this setting to **5**.

- Sim**ab** -> Sim**ba**
- Mou**r**a**d**a -> Mou**f**a**s**a
- Pu**nb**a -> Pum**ba**a

Also, here ane are more examples that **won't** match.

- N**e**l**l**a -> ~~Nala~~
- Z**es**u -> ~~Zazu~~
- S**kk**ar -> ~~Scar~~

### 3 Typos or more

Allowing **more** than **2** typos in a word can use too many resources, plus it mostly leads to false positives.

Therefore allowing 3 or more typos **is not** possible.
