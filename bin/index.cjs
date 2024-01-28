#!/usr/bin/env node

'use strict';

const path = require('path');
const { program } = require('commander');
const pkg = require('../package.json');

const params = program
  .name('swagger-to-typescript-interface')
  .usage('[options]')
  .version(pkg.version)
  .requiredOption('-i, --input <value>', 'The URL to the Swagger JSON that defines the API (required)')
  .requiredOption('-o, --output <value>', 'Output ts file (required)')
  .parse(process.argv)
  .opts();

const lib = require(path.resolve(__dirname, '../dist/index.cjs'));

if (lib) {
  lib
    .generate(params.input, params.output)
    .then(() => {
      process.exit(0);
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
