/**
 * Test helpers.
 *
 * @module test/helpers
 */

'use strict';

/**
 * Generate UUID v4.
 *
 * @return {String} UUID v4.
 */
exports.uuidv4 = function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
