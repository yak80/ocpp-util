# OCPP Util
*Work in progress*

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
