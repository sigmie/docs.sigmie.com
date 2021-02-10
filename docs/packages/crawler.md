# Crawler
[[toc]]
## Introduction

Sigmie crawler is a library for crawling webpages and extracting their content into a file. 

The code base of the **Crawler** is open source, and packaged as a Docker image to make it easier to use.

## Usage

The Crawler can be used either within your code base or by using
packaged docker image.

### Install 

To use the Crawler in your code base install it  via Composer.

``` bash
$ composer require sigmie/crawler
```

### Running the crawler
After you have installed the `sigmie/crawler` as a dependency you can use
the `sigmie-crawl` command like:
```bash
$ vendor/bin/sigmie-crawl /path/to/your/config.json
```

### Using Docker

The Crawler is packaged as a Docker image and can be used like bellow

```bash
$ docker run -v $PWD:/mnt ghcr.io/sigmie/crawler:latest sigmie:crawler:crawl /mnt/crawl.json
```

You can run the docker image without any arguments to see all the available commands.
```bash
$ docker run -t ghcr.io/sigmie/crawler:latest
```

## Config

A sample configuration file looks like this:

```json
{
    "start_url": "https://docs.sigmie.com",
    "format": "basic",
    "export": {
        "format": "json",
        "path": "/mnt/foo.json"
    },
    "navigation_selector": ".navigation-class",
    "content_selector": ".content-class"
}
```

### Format
The format option in the config tells the Crawler into which structure should scrape the data.
#### Basic
The `basic` format key will get an HTML input like:
```html
<h1>Some title</h1>
<p>Some text</p>
<h2>Some other title</h2>
<p>Some other text</p>
```
and output it like:
```php
[
    {
        'content' => 'Some text',
        'hierarchy' => [
            1 => 'Some title'
        ],
        'url' => 'https://example.com'
    {,
    {
        'content' => 'Some other text',
        'hierarchy' => [
            1 => 'Some title',
            2 => 'Some other title'
        ],
        'url' => 'https://example.com'
    },
];
```


## Github Action
A example of an **Github Action** which crawls a page and pushes the exported `json` file to a
**Github** gist every time a PR is merged.
```yaml
name: Crawl

on:
  pull_request:
    types: [closed]
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest

    if: github.event.pull_request.merged

    steps:
      - uses: actions/checkout@v1

      - name: Crawl docs page 
        run: docker run -v $PWD:/mnt ghcr.io/sigmie/crawler:latest sigmie:crawler:crawl /mnt/crawl.json

      - name: Deploy
        uses: exuanbo/actions-deploy-gist@v1.0.3
        with:
          token: ${{ secrets.GIST_TOKEN }}
          gist_id: e1e70646515e983f9563fbcb174f52ff
          gist_file_name: docs.sigmie.content.json
          file_path: content.json
```
