#!/bin/bash

set -eu

ABI_GEN_ROOT="$HOME/source/github.com/0xProject/0x-monorepo/packages/abi-gen"


yarn abi-gen \
  --abis 'build/contracts/**/*.json' \
  --out generated-abi \
  --partials "$ABI_GEN_ROOT/templates/TypeScript/partials/**/*.handlebars" \
  --template "$ABI_GEN_ROOT/templates/TypeScript/contract.handlebars"