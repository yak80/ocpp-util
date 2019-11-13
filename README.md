# OCPP Util
*Work in progress*

![](https://github.com/romfrolov/ocpp-util/workflows/build/badge.svg) [![npm version](https://badge.fury.io/js/ocpp-util.svg)](https://badge.fury.io/js/ocpp-util) [![Coverage Status](https://coveralls.io/repos/github/romfrolov/ocpp-util/badge.svg?branch=master)](https://coveralls.io/github/romfrolov/ocpp-util?branch=master)

A zero-dependency OCPP utility library.

## Table of Contents

- [Quick start](#quick-start)
 - [checkCardinality](#checkcardinality)
 - [checkType](#checkType)
 - [enums](#enums)
- [Documentation](#documentation)
- [Testing](#testing)
- [License](#license)

## Quick start

```bash
npm install ocpp-util
```

```js
const ocppUtil = require('ocpp-util');
```

### checkCardinality

```js
ocppUtil.checkCardinality('0..1', field);
```

### checkType

```js
ocppUtil.checkType('identifierString', identifierString, 20));
```

### enums

```js
console.log(ocppUtil.enums.TRANSACTION_EVENT); // [ 'Ended', 'Started', 'Updated' ]
```

## Documentation

```bash
npm run docs      # generate docs
npm run http-docs # start HTTP server serving docs
```

## Testing

```bash
npm test
```

## License

[MIT](./LICENSE)
