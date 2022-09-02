---
title: Languages
description: Predefined Language specific settings.
---

Predefined Language filters.

---

You can pick your Index Language in the Index settings in the "Language" tab.

 

## English

### Stopwords

Here is the list with all predefined English Stopwords.

a, an, and, are, as, at, be, but, by,
for, if, in, into, is, it,
no, not, of, on, or, such,
that, the, their, then, there, these,
they, this, to, was, will, with

### Porter stemming

You can find more information about the porter stemming
[here](https://snowballstem.org/algorithms/porter/stemmer.html).

### Possessive "'s"

Possessive "'s" in the English language shows a relationship of belonging between one thing and another by adding an apostrophe + s to the noun.

This filter will remove the `apostrophe` and the `s` from the nouns.

### Lowercase

The **Greek Lowercase** filter will lowercase all letters tokens.

## German

### Stopwords

Here is a list of all the predefined Stopwords for the German language.

aber, alle, allem, allen, aller, alles, als, also, am, an, ander,
andere, anderem, anderen, anderer, anderes, anderm, andern, anderr,
anders, auch, auf, aus, bei, bin, bis, bist, da, damit, dann, der, den,
des, dem, die, das, daß, derselbe, derselben, denselben,
desselben, demselben, dieselbe, dieselben, dasselbe, dazu, dein,
deine, deinem, deinen, deiner, deines, denn, derer, dessen, dich, dir,
du, dies, diese, diesem, diesen, dieser, dieses, doch, dort, durch, ein,
eine, einem, einen, einer, eines, einig, einige, einigem, einigen,
einiger, einiges, einmal, er, ihn, ihm, es, etwas, euer, eure, eurem,
euren, eurer, eures, für, gegen, gewesen, hab, habe, haben, hat,
hatte, hatten, hier, hin, hinter, ich, mich, mir, ihr, ihre, ihrem,
ihren, ihrer, ihres, euch, im, in, indem, ins, ist, jede, jedem, jeden,
jeder, jedes, jene, jenem, jenen, jener, jenes, jetzt, kann, kein,
keine, keinem, keinen, keiner, keines, können, könnte, machen, man,
manche, manchem, manchen, mancher, manches, mein, meine, meinem,
meinen, meiner, meines, mit, muss, musste, nach, nicht, nichts, noch,
nun, nur, ob, oder, ohne, sehr, sein, seine, seinem, seinen, seiner,
seines, selbst, sich, sie, ihnen, sind, so, solche, solchem, solchen,
solcher, solches, soll, sollte, sondern, sonst, über, um, und, uns,
unse, unsem, unsen, unser, unses, unter, viel, vom, von, vor, während,
war, waren, warst, was, weg, weil, weiter, welche, welchem, welchen,
welcher, welches, wenn, werde, werden, wie, wieder, will, wir, wird,
wirst, wo, wollen, wollte, würde, würden, zu, zum, zur, zwar, zwischen

### Light stemming

More information about the light German stemming algorithm can be found
[here](https://www.researchgate.net/publication/40646150_Light_stemming_approach_for_the_French_Portuguese_German_and_Hungarian_languages).

### Normalize

The **German Normalisation** will make the following replacements.

- **ß** -> **ss**
- **ä** -> **a**
- **ö** -> **o**
- **ü** -> **u**
- **ae** -> **a**
- **oe** -> **o** \* **ue** -> **u** when not followed by a vowel or **q**.

### Lowercase

The **German Lowercase** filter will lowercase all german letters.

## Greek

### Stopwords

Below is a list of the greek stopwords.

ο, η, το, οι, τα, του, τησ, των, τον, την, και , κι, κ, ειμαι, εισαι, ειναι, ειμαστε, ειστε, στο, στον, στη, στην, μα, αλλα, απο, για, προσ, με, σε, ωσ, παρα, αντι, κατα, μετα, θα, να, δε, δεν, μη, μην, επι, ενω, εαν, αν, τοτε, που, πωσ, ποιοσ, ποια, ποιο, ποιοι, ποιεσ, ποιων, ποιουσ, αυτοσ, αυτη, αυτο, αυτοι, αυτων, αυτουσ, αυτεσ, αυτα, εκεινοσ, εκεινη, εκεινο, εκεινοι, εκεινεσ, εκεινα, εκεινων, εκεινουσ, οπωσ, ομωσ, ισωσ, οσο, οτι

### Greeklish

The Greeklish filter will generate tokens with Latin characters from greek tokens.

### Stemming

More information about the greek stemming algorithm can be found
[here](https://people.dsv.su.se/~hercules/papers/Ntais_greek_stemmer_thesis_final.pdf).

### Lowercase

The **Greek Lowercase** filter will lowercase all letters tokens.
