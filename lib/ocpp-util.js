/**
 * OCPP utility library
 *
 * @module lib/ocpp-util
 */

'use strict';

const checkCardinality = require('./cardinality-checker');
const checkType        = require('./type-checker');

module.exports = {
    checkCardinality,
    checkType
};
