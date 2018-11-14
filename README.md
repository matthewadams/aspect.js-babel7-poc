# Proof of concept of aspect.js + JavaScript + Babel 7
This repository is intended to prove that [`aspect.js`](https://www.npmjs.com/package/aspect.js) can be used in Node.js 10.12.0, plain JavaScript project that uses Babel 7.

## Overview
The `package.json` has several scripts.

### TL;DR
* Clone the repo
* `cd` into the cloned repo
* `npm install`
* `npm test`

### NTL;R
* `u`: runs unit tests bare with inline Babel transpilation
* `i`: runs integration tests bare with inline Babel transpilation
* `transpile`: transpiles JavaScript using Babel
* `test`: transpiles then runs unit & integration tests with code coverage

...plus others.  See the package.json for more info.

### Debugging
The tests use [`mocha`](https://www.npmjs.com/package/mocha) (& [`chai`](https://www.npmjs.com/package/chai) for `expect` assertions).
If you like using an IDE to debug, make sure to point your IDE's `mocha` run/debug configuration at `mocha.opts`.

## Formatting
This project uses [`standard`](https://www.npmjs.com/package/standard) formatting.
