/**
 * Cardinality checker.
 *
 * @module lib/cardinality-checker
 */

'use strict';

/**
 * Check field cardinality.
 *
 * @param  {String}  card  Cardinality.
 * @param  {Object}  field Field to check.
 * @return {Boolean}
 */
module.exports = function checkCardinality(card, field) {
    let [from, to] = card.split('..');

    from = +from;
    to   = (to === '*') && Infinity || +to;

    if (from === 0) {
        if (field === undefined) { return true; }

        if (to === 1) {
            return !Array.isArray(field);
        } else {
            return (Array.isArray(field) && ((field.length > 0) && (field.length <= to)));
        }
    } else if (from === 1) {
        if (field === undefined) { return false; }

        if (to === 1) {
            return !Array.isArray(field);
        } else {
            return (Array.isArray(field) && ((field.length > 0) && (field.length <= to)));
        }
    }
};
