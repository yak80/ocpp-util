/**
 * Auxiliary functions.
 *
 * @module lib/helpers
 */

'use strict';

/**
 * ISO 8601 JavaScript validator.
 * @see https://www.regextester.com/97766
 *
 * @type {RegExp}
 */
const ISO_8601_REG_EX = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$/g;

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
    return ISO_8601_REG_EX.test(date);
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

/**
 * Detect if a Buffer is UTF8 encoded.
 *
 * @param  {Buffer}  bytes
 * @return {Boolean}
 */
exports.isUtf8 = function isUtf8(bytes) {
    let i = 0;

    while (i < bytes.length) {
        // ASCII.
        if (
            bytes[i] == 0x09
        ||  bytes[i] == 0x0A
        ||  bytes[i] == 0x0D
        ||  (0x20 <= bytes[i] && bytes[i] <= 0x7E)
        ) {
            i += 1;
            continue;
        }

        // Non-overlong 2-byte.
        if (
            (0xC2 <= bytes[i] && bytes[i] <= 0xDF) &&
            (0x80 <= bytes[i + 1] && bytes[i + 1] <= 0xBF)
        ) {
            i += 2;
            continue;
        }

        // Excluding overlongs.
        if ((
            (bytes[i] == 0xE0)
        &&  (0xA0 <= bytes[i + 1] && bytes[i + 1] <= 0xBF)
        &&  (0x80 <= bytes[i + 2] && bytes[i + 2] <= 0xBF)
        ) ||
        (
            // Straight 3-byte.
            ((0xE1 <= bytes[i] && bytes[i] <= 0xEC) || (bytes[i] == 0xEE) || (bytes[i] == 0xEF))
        &&  (0x80 <= bytes[i + 1] && bytes[i + 1] <= 0xBF)
        &&  (0x80 <= bytes[i + 2] && bytes[i + 2] <= 0xBF)
        ) ||
        (
            // Excluding surrogates.
            (bytes[i] == 0xED) &&
             (0x80 <= bytes[i + 1] && bytes[i + 1] <= 0x9F) &&
             (0x80 <= bytes[i + 2] && bytes[i + 2] <= 0xBF)
        )
        ) {
            i += 3;
            continue;
        }

        if ((
            // Planes 1-3.
            (bytes[i] == 0xF0) &&
            (0x90 <= bytes[i + 1] && bytes[i + 1] <= 0xBF) &&
            (0x80 <= bytes[i + 2] && bytes[i + 2] <= 0xBF) &&
            (0x80 <= bytes[i + 3] && bytes[i + 3] <= 0xBF)
        ) ||
        (
            // Planes 4-15.
            (0xF1 <= bytes[i] && bytes[i] <= 0xF3)
        &&  (0x80 <= bytes[i + 1] && bytes[i + 1] <= 0xBF)
        &&  (0x80 <= bytes[i + 2] && bytes[i + 2] <= 0xBF)
        &&  (0x80 <= bytes[i + 3] && bytes[i + 3] <= 0xBF)
        ) ||
        (
            // Plane 16.
            (bytes[i] == 0xF4)
        &&  (0x80 <= bytes[i + 1] && bytes[i + 1] <= 0x8F)
        &&  (0x80 <= bytes[i + 2] && bytes[i + 2] <= 0xBF)
        &&  (0x80 <= bytes[i + 3] && bytes[i + 3] <= 0xBF)
        )
        ) {
            i += 4;
            continue;
        }

        return false;
    }

    return true;
};
