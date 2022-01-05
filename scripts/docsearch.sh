#!/bin/bash

if [[ -z "${PORTER_DOCS_DOMAIN}" ]]; then
  echo "Error: PORTER_DOCS_DOMAIN environment variable not set"
  exit 1
fi

if [[ -z "${APPLICATION_ID}" ]]; then
  echo "Error: APPLICATION_ID environment variable not set"
  exit 1
fi

if [[ -z "${API_KEY}" ]]; then
  echo "Error: API_KEY environment variable not set"
  exit 1
fi

domain=$PORTER_DOCS_DOMAIN

cat >./algolia.json <<EOL
{
    "index_name": "porter-docs",
    "start_urls": [
      {
        "url": "$domain/"
      }
    ],
    "sitemap_urls": [
      "$domain/sitemap.xml"
    ],
    "selectors": {
        "lvl0": "h1",
        "lvl1": "h2",
        "lvl2": "h3",
        "lvl3": "h4",
        "lvl4": "h5",
        "lvl5": "h6",
        "text": "p"
      }
}
EOL

docker run --env APPLICATION_ID=$APPLICATION_ID --env API_KEY=$API_KEY --env "CONFIG=$(cat ./algolia.json | jq -r tostring)" algolia/docsearch-scraper

rm algolia.json