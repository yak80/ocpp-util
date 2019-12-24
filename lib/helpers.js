/**
 * Auxiliary functions.
 *
 * @module lib/helpers
 */

'use strict';

const dayjs = require('dayjs');

/**
 * Get regular expression to test identifier string.
 * Only the following character set is allowed: a-z, A-Z, 0-9, '*', '-', '_', '=', ':', '+', '|', '@', '.'
 *
 * @param  {String} input
 * @return {RegExp}
 */
const IDENTIFIER_STRING_REG_EX = (input) => new RegExp(`[a-z0-9*-_=:+|@]{${input.length}}`, 'gi');

/**
 * Count decimals of the number.
 * @extends Number
 *
 * @return {Number}
 */
Number.prototype.countDecimals = function () {
    if (Math.floor(this.valueOf()) === this.valueOf()) {
        return 0;
    }

    return this.toString().split('.')[1].length || 0;
};

/**
 * Check that value is integer.
 *
 * @param  {Object}  value
 * @return {Boolean}
 */
exports.isInt = function isInt(value) {
    return (!isNaN(value) && ((value !== null) && (parseInt(value) === +value)));
};

/**
 * Check that value is floating.
 *
 * @param  {Object}  value
 * @return {Boolean}
 */
exports.isFloat = function isFloat(value) {
    return (!isNaN(value) && ((value !== null) && (parseFloat(value) === +value)));
};

/**
 * Check whether date complies to ISO 8601.
 *
 * @see https://en.wikipedia.org/wiki/ISO_8601
 *
 * @param  {String}  date
 * @return {Boolean}
 */
exports.isValidDate = function isValidDate(date) {
    return dayjs(date).isValid();
};

/**
 * Test identifier string with regular expression.
 *
 * @param  {String}  identifierString
 * @return {Boolean}
 */
exports.checkIdentifierString = function checkIdentifierString(identifierString) {
    return IDENTIFIER_STRING_REG_EX(identifierString).test(identifierString);
};
