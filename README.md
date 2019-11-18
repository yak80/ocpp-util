# OCPP Util

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

Install:

```bash
npm i ocpp-util
```

Import:

```js
const ocppUtil = require('ocpp-util');
```

### checkCardinality

The `checkCardinality()` method verifies that the input has a correct cardinality.

```js
ocppUtil.checkCardinality(card, input);
```

**Parameters**

- `card` {String} - expected cardinality.
- `input` {Any} - input value to check.

**Return value**

Boolean. `true` if input has passed the check.

**Supported cardinalities:**
- `0..1`, `0..2`, ..., `0..*`
- `1..1`, `1..2`, ..., `1..*`

### checkType

The `checkType()` method verifies that the input meets the requirements of the OCPP Primitive Datatypes.

```js
ocppUtil.checkType(type, input, length);
```

**Parameters**

- `type` {String} - expected type.
- `input` {Any} - input value to check.
- `length` {Number} *optional* - maximal length of the value.

**Return value**

Boolean. `true` if input has passed the check.

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

This library provides an access to all enumeration types of OCPP 1.6 and OCPP 2.0.

```js
ocppUtil.enums(version);
```

**Parameters**

`version` {String} - desired version of the OCPP protocol.

**Return value**

Array of objects. Returns all enums of the specified version of the protocol.

**Example:**

```js
const enums = ocppUtil.enums('2.0');

console.log(enums.TRANSACTION_EVENT); // [ 'Ended', 'Started', 'Updated' ]
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
