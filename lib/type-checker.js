/**
 * Type checker.
 *
 * @module lib/type-checker
 */

'use strict';

const helpers = require('./helpers');

/**
 * Check input field type.
 *
 * @param  {String}  type     Expected type.
 * @param  {Object}  input    Input field.
 * @param  {Number}  [length] Expected length.
 * @return {Boolean}          Whether input field meets datatype or not.
 */
module.exports = function typeChecker(type, input, length) {
    return exports[type](input, length);
};

/**
 * Check any type.
 *
 * @param  {Object}  string
 * @return {Boolean}
 */
exports.AnyType = function AnyType(input) {
    return (
        !!input
    && (input.constructor === String)
    );
};

/**
 * Check string type with length parameter.
 *
 * @param  {Object}  string
 * @param  {Number}  [length=Infinity]
 * @return {Boolean}
 */
exports.string = function string(input, length = Infinity) {
    return (
        !!input
    &&  (input.constructor === String)
    &&  helpers.isUtf8(Buffer.from(input))
    &&  (input.length <= length)
    );
};

/**
 * Check identifier string type with length parameter.
 *
 * @param  {Object}  input
 * @param  {Number}  length
 * @return {Boolean}
 */
exports.identifierString = function identifierString(input, length) {
    return (
        !!input
    && (input.constructor === String)
    &&  helpers.checkIdentifierString(input)
    &&  (input.length <= length)
    );
};

/**
 * Check integer type.
 *
 * @param  {Number}  input
 * @return {Boolean}
 */
exports.integer = function integer(input) {
    if (!helpers.isInt(input)) { return false; }

    if (input.constructor === String) {
        if (((input.length > 1) && (['0', '+'].includes(input[0]))) || (input[0] === '-' && +input[1] < 1)) { return false; }

        input = +input;
    }

    return ((input >= (-1) * 2 ** 31) && (input <= 2 ** 31 - 1));
};

/**
 * Check decimal type.
 *
 * @param  {Number}  input
 * @return {Boolean}
 */
exports.decimal = function decimal(input) {
    if (!helpers.isFloat(input)) { return false; }

    if (input.constructor === String) {
        if (((input.length > 1) && (['0', '+'].includes(input[0]))) || (input[0] === '-' && +input[1] < 1)) { return false; }

        input = +input;
    }

    return (
        (input >= (-1) * 2 ** 31) && (input <= 2 ** 31 - 1)
     && (input.countDecimals() <= 6)
    );
};

/**
 * Check date time type.
 *
 * @param  {String}  input
 * @return {Boolean}
 */
exports.dateTime = function dateTime(input) {
    if (!input) { return false; }

    const parsedDate = Date.parse(input);

    return (
        (isNaN(input) && !isNaN(parsedDate))
    &&  (input.constructor === String)
    &&  helpers.isValidDate(input)
    );
};

/**
 * Check boolean type.
 *
 * @param  {Object}  input
 * @return {Boolean}
 */
exports.boolean = function boolean(input) {
    return (
        (input === 'true')
    ||  (input === 'false')
    ||  (input === true)
    ||  (input === false)
    );
};
