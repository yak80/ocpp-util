/**
 * Cardinality checker.
 *
 * @module lib/cardinality-checker
 */

'use strict';

/**
 * Check input field cardinality.
 *
 * @param  {String}  card  Cardinality.
 * @param  {Object}  input Input field.
 * @return {Boolean}
 */
module.exports = function checkCardinality(card, input) {
    let [from, to] = card.split('..');

    from = +from;
    to   = (to === '*') && Infinity || +to;

    if (from === 0) {
        if (input === undefined) { return true; }

        if (to === 1) {
            return !Array.isArray(input);
        } else {
            return (Array.isArray(input) && (input.length <= to));
        }
    } else if (from === 1) {
        if (input === undefined) { return false; }

        if (to === 1) {
            return !Array.isArray(input);
        } else {
            return (Array.isArray(input) && ((input.length > 0) && (input.length <= to)));
        }
    }
};
