#!/bin/bash

# add servers block to generated
echo 'servers:
  - url: "https://dashboard.getporter.dev"
components:
  securitySchemes:
    Bearer:
      type: http
      scheme: bearer
security:
- Bearer: []
' > ./docs/api/api-server-generated-extra.yaml

yq eval-all 'select(fi == 0) * select(filename == "docs/api/api-server-generated.yaml")' docs/api/api-server-generated-extra.yaml docs/api/api-server-generated.yaml > docs/api/api-server-generated-with-mixins.yaml

# yq -i '
#   servers = [{"url": "https://dashboard.getporter.dev"}] |
#   components = "hello"
# ' docs/api/api-server-generated.yaml

# echo 'servers:
#   - url: "https://dashboard.getporter.dev"
# components:
#   securitySchemes:
#     Bearer:
#       type: http
#       scheme: bearer
# security:
# - Bearer: []
# ' >> docs/api/api-server-generated.yaml

node ./tools/index.js docs/api/api-server-generated-with-mixins.yaml docs/api/api-server-generated-with-samples.yaml

# convert the server-generated API file to 3.0
openapi-generator-cli generate -g openapi-yaml -i ./docs/api/api-server-generated-with-samples.yaml -o ./api-server-3.0 --skip-validate-spec

# merge the base api with the server 3.0 file
yq eval-all 'select(fi == 0) * select(filename == "docs/api/api-base.yaml")' api-server-3.0/openapi/openapi.yaml docs/api/api-base.yaml > docs/api/api-populated-pre-fmt.yaml

cat docs/api/api-populated-pre-fmt.yaml | sed 's/%7B/{/g' | sed 's/%7D/}/g' | sed 's/\*\/\*/application\/json/g' > docs/api/api-populated.yaml
# (cat docs/api/api-populated-pre-curly-0.yaml | sed 's/%7B/{/g') > docs/api/api-populated-pre-curly-1.yaml
# (cat docs/api/api-populated-pre-curly-1.yaml | sed 's/%7D/}/g') > docs/api/api-populated-pre-star.yaml
# (cat docs/api/api-populated-pre-star.yaml | sed 's/*\/*/application\/json/g') > docs/api/api-populated.yaml

# remove the generated directory
rm -rf ./api-server-3.0
rm openapitools.json
rm docs/api/api-populated-pre-fmt.yaml
rm docs/api/api-server-generated-with-samples.yaml
rm docs/api/api-server-generated-with-mixins.yaml
rm docs/api/api-server-generated-extra.yaml