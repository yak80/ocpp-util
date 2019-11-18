/**
 * Type checker unit test.
 *
 * @module test/unit/type-checker
 */

'use strict';

const moment      = require('moment');
const helpers     = require('../helpers');
const typeChecker = require('../../lib/type-checker');

describe('Type checker', () => {
    describe('string', () => {
        it('NaN', () => {
            const s = NaN;

            typeChecker('string', s, 20).should.be.false;
        });

        it('null', () => {
            const s = null;

            typeChecker('string', s, 20).should.be.false;
        });

        it('undefined', () => {
            const s = undefined;

            typeChecker('string', s, 20).should.be.false;
        });

        it('object', () => {
            const s = new Object();

            typeChecker('string', s, 20).should.be.false;
        });

        it('string', () => {
            const s = 'String';

            typeChecker('string', s, 20).should.be.true;
        });

        it('short string', () => {
            const s = '123';

            typeChecker('string', s, 20).should.be.true;
        });

        it('long string', () => {
            const s = 'StringStringStringString';

            typeChecker('string', s, 20).should.be.false;
        });

        it('RFID tag', () => {
            const s = '4F4222as3348h5423F53';

            typeChecker('string', s, 20).should.be.true;
        });
    });

    describe('integer', () => {
        it('NaN', () => {
            const i = NaN;

            typeChecker('integer', i).should.be.false;
        });

        it('null', () => {
            const i = null;

            typeChecker('integer', i).should.be.false;
        });

        it('undefined', () => {
            const i = undefined;

            typeChecker('integer', i).should.be.false;
        });

        it('string', () => {
            const i = 'String';

            typeChecker('integer', i).should.be.false;
        });

        it('object', () => {
            const i = new Object();

            typeChecker('integer', i).should.be.false;
        });

        it('zero', () => {
            const i = 0;

            typeChecker('integer', i).should.be.true;
        });

        it('zero string', () => {
            const i = '0';

            typeChecker('integer', i).should.be.true;
        });

        it('positive integer', () => {
            const i = 5;

            typeChecker('integer', i).should.be.true;
        });

        it('positive integer string', () => {
            const i = '5';

            typeChecker('integer', i).should.be.true;
        });

        it('positive integer string with leading zero', () => {
            const i = '05';

            typeChecker('integer', i).should.be.false;
        });

        it('positive integer string with plus sign', () => {
            const i = '+5';

            typeChecker('integer', i).should.be.false;
        });

        it('negative integer', () => {
            const i = -5;

            typeChecker('integer', i).should.be.true;
        });

        it('negative integer string', () => {
            const i = '-5';

            typeChecker('integer', i).should.be.true;
        });

        it('negative integer string with leading zero', () => {
            const i = '-05';

            typeChecker('integer', i).should.be.false;
        });

        it('positive decimal', () => {
            const i = 5.1;

            typeChecker('integer', i).should.be.false;
        });

        it('negative decimal', () => {
            const i = 5.1;

            typeChecker('integer', i).should.be.false;
        });

        it('big positive integer', () => {
            const i = 2 ** 31;

            typeChecker('integer', i).should.be.false;
        });

        it('big negative integer', () => {
            const i = (-1) * 2 ** 31 - 1;

            typeChecker('integer', i).should.be.false;
        });
    });

    describe('decimal', () => {
        it('NaN', () => {
            const d = NaN;

            typeChecker('decimal', d).should.be.false;
        });

        it('null', () => {
            const d = null;

            typeChecker('decimal', d).should.be.false;
        });

        it('undefined', () => {
            const d = undefined;

            typeChecker('decimal', d).should.be.false;
        });

        it('string', () => {
            const d = 'String';

            typeChecker('decimal', d).should.be.false;
        });

        it('object', () => {
            const d = new Object();

            typeChecker('decimal', d).should.be.false;
        });

        it('zero', () => {
            const d = 0;

            typeChecker('decimal', d).should.be.true;
        });

        it('zero string', () => {
            const d = '0';

            typeChecker('decimal', d).should.be.true;
        });

        it('positive integer', () => {
            const d = 5;

            typeChecker('decimal', d).should.be.true;
        });

        it('positive integer string', () => {
            const d = '5';

            typeChecker('decimal', d).should.be.true;
        });

        it('positive integer string with leading zero', () => {
            const d = '05';

            typeChecker('decimal', d).should.be.false;
        });

        it('positive integer string with plus sign', () => {
            const d = '+5';

            typeChecker('decimal', d).should.be.false;
        });

        it('negative integer', () => {
            const d = -5;

            typeChecker('decimal', d).should.be.true;
        });

        it('negative integer string', () => {
            const d = '-5';

            typeChecker('decimal', d).should.be.true;
        });

        it('negative integer string with leading zero', () => {
            const d = '-05';

            typeChecker('decimal', d).should.be.false;
        });

        it('positive decimal', () => {
            const d = 5.1;

            typeChecker('decimal', d).should.be.true;
        });

        it('negative decimal', () => {
            const d = -5.1;

            typeChecker('decimal', d).should.be.true;
        });
    });

    describe('identifierString', () => {
        it('NaN', () => {
            const is = NaN;

            typeChecker('identifierString', is, 20).should.be.false;
        });

        it('null', () => {
            const is = null;

            typeChecker('identifierString', is, 20).should.be.false;
        });

        it('undefined', () => {
            const is = undefined;

            typeChecker('identifierString', is, 20).should.be.false;
        });

        it('string', () => {
            const is = 'String';

            typeChecker('identifierString', is, 20).should.be.true;
        });

        it('object', () => {
            const is = new Object();

            typeChecker('identifierString', is, 20).should.be.false;
        });

        it('number', () => {
            const is = '1';

            typeChecker('identifierString', is, 36).should.be.true;
        });

        it('UUID v4', () => {
            const is = helpers.uuidv4();

            typeChecker('identifierString', is, 36).should.be.true;
        });

        it('allowed special characters characters', () => {
            const is = '*-_=:+|@.';

            typeChecker('identifierString', is, 36).should.be.true;
        });
    });

    describe('dateTime', () => {
        it('NaN', () => {
            const dt = NaN;

            typeChecker('dateTime', dt).should.be.false;
        });

        it('null', () => {
            const dt = null;

            typeChecker('dateTime', dt).should.be.false;
        });

        it('undefined', () => {
            const dt = undefined;

            typeChecker('dateTime', dt).should.be.false;
        });

        it('string', () => {
            const dt = 'String';

            typeChecker('dateTime', dt).should.be.false;
        });

        it('object', () => {
            const dt = new Object();

            typeChecker('dateTime', dt).should.be.false;
        });

        it('ISO 8601 date in UTC with milliseconds', () => {
            const dt = moment().format();

            typeChecker('dateTime', dt).should.be.true;
        });

        it('date without milliseconds and with the timezone offset.', () => {
            const dt = moment().toISOString();

            typeChecker('dateTime', dt).should.be.true;
        });
    });

    describe('AnyType', () => {
        it('NaN', () => {
            const a = NaN;

            typeChecker('AnyType', a).should.be.false;
        });

        it('null', () => {
            const a = null;

            typeChecker('AnyType', a).should.be.false;
        });

        it('undefined', () => {
            const a = undefined;

            typeChecker('AnyType', a).should.be.false;
        });

        it('string', () => {
            const a = 'String';

            typeChecker('AnyType', a).should.be.true;
        });

        it('object', () => {
            const a = new Object();

            typeChecker('AnyType', a).should.be.false;
        });

        it('integer', () => {
            const a = 5;

            typeChecker('AnyType', a).should.be.false;
        });

        it('boolean true', () => {
            const a = true;

            typeChecker('AnyType', a).should.be.false;
        });
    });

    describe('boolean', () => {
        it('NaN', () => {
            const b = NaN;

            typeChecker('boolean', b).should.be.false;
        });

        it('null', () => {
            const b = null;

            typeChecker('boolean', b).should.be.false;
        });

        it('undefined', () => {
            const b = undefined;

            typeChecker('boolean', b).should.be.false;
        });

        it('string', () => {
            const b = 'String';

            typeChecker('boolean', b).should.be.false;
        });

        it('object', () => {
            const b = new Object();

            typeChecker('boolean', b).should.be.false;
        });

        it('integer', () => {
            const b = 5;

            typeChecker('boolean', b).should.be.false;
        });

        it('string true', () => {
            const b = 'true';

            typeChecker('boolean', b).should.be.true;
        });

        it('string false', () => {
            const b = 'false';

            typeChecker('boolean', b).should.be.true;
        });

        it('boolean true', () => {
            const b = true;

            typeChecker('boolean', b).should.be.true;
        });

        it('boolean false', () => {
            const b = false;

            typeChecker('boolean', b).should.be.true;
        });
    });
});
