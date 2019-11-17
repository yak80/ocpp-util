# OCPP Util
*Work in progress*

![](https://github.com/romfrolov/ocpp-util/workflows/build/badge.svg) [![npm version](https://badge.fury.io/js/ocpp-util.svg)](https://badge.fury.io/js/ocpp-util) [![Coverage Status](https://coveralls.io/repos/github/romfrolov/ocpp-util/badge.svg?branch=master)](https://coveralls.io/github/romfrolov/ocpp-util?branch=master)

OCPP utility library.

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
ocppUtil.checkCardinality('0..1', input);
```

### checkType

```js
ocppUtil.checkType('identifierString', input, 20));
```

**Supported types:**
- `AnyType` - Text, data without specified length or format.
- `string` - The characters defined in the [Unicode](http://www.unicode.org/versions/Unicode10.0.0/) character set are allowed to be used.
- `identifierString` - Only the following character set is allowed: `a-z, A-Z, 0-9, '*', '-', '_', '=', ':', '+', '|', '@', '.'`.
- `integer` - 32 bit (31 bit resolution, 1 sign bit).
- `decimal` - For data being reported by the Charging Station, the full resolution of the source data must be
preserved. The decimal sent towards the Charging Station SHALL NOT have more than six
decimal places.
- `dateTime` - All time values exchanged between CSMS and Charging Station SHALL be formatted as
defined in [[RFC3339]](https://tools.ietf.org/html/rfc3339). Additionally fractional seconds have been given an extra limit. The
number of decimal places SHALL NOT exceed the maximum of 3.
- `boolean` - Only allowed values: `false` and `true`.

### enums

```js
console.log(ocppUtil.enums('2.0').TRANSACTION_EVENT); // [ 'Ended', 'Started', 'Updated' ]
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
