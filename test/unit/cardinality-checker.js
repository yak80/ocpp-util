/**
 * Cardinality checker unit test.
 *
 * @module test/unit/cardinality-checker
 */

'use strict';

require('chai').should();

const checkCardinality = require('../../lib/cardinality-checker');

describe('OCPP cardinality checker', () => {
    describe('0..1', () => {
        it('zero arguments', () => {
            const field = undefined;

            checkCardinality('0..1', field).should.be.true;
        });

        it('one argument', () => {
            const field = 1;

            checkCardinality('0..1', field).should.be.true;
        });

        it('empty list', () => {
            const field = [];

            checkCardinality('0..1', field).should.be.false;
        });

        it('list of one', () => {
            const field = [1];

            checkCardinality('0..1', field).should.be.false;
        });

        it('list of two', () => {
            const field = [1, 2];

            checkCardinality('0..1', field).should.be.false;
        });
    });

    describe('0..2', () => {
        it('zero arguments', () => {
            const field = undefined;

            checkCardinality('0..2', field).should.be.true;
        });

        it('one argument', () => {
            const field = 1;

            checkCardinality('0..2', field).should.be.false;
        });

        it('empty list', () => {
            const field = [];

            checkCardinality('0..2', field).should.be.false;
        });

        it('list of one', () => {
            const field = [1];

            checkCardinality('0..2', field).should.be.true;
        });

        it('list of two', () => {
            const field = [1, 2];

            checkCardinality('0..2', field).should.be.true;
        });

        it('list of three', () => {
            const field = [1, 2, 3];

            checkCardinality('0..2', field).should.be.false;
        });
    });

    describe('0..*', () => {
        it('zero arguments', () => {
            const field = undefined;

            checkCardinality('0..*', field).should.be.true;
        });

        it('one argument', () => {
            const field = 1;

            checkCardinality('0..*', field).should.be.false;
        });

        it('empty list', () => {
            const field = [];

            checkCardinality('0..*', field).should.be.false;
        });

        it('list of one', () => {
            const field = [1];

            checkCardinality('0..*', field).should.be.true;
        });

        it('list of two', () => {
            const field = [1, 2];

            checkCardinality('0..*', field).should.be.true;
        });
    });

    describe('1..1', () => {
        it('zero arguments', () => {
            const field = undefined;

            checkCardinality('1..1', field).should.be.false;
        });

        it('one argument', () => {
            const field = 1;

            checkCardinality('1..1', field).should.be.true;
        });

        it('empty list', () => {
            const field = [];

            checkCardinality('1..1', field).should.be.false;
        });

        it('list of one', () => {
            const field = [1];

            checkCardinality('1..1', field).should.be.false;
        });

        it('list of two', () => {
            const field = [1, 2];

            checkCardinality('1..1', field).should.be.false;
        });
    });

    describe('1..2', () => {
        it('zero arguments', () => {
            const field = undefined;

            checkCardinality('1..2', field).should.be.false;
        });

        it('one argument', () => {
            const field = 1;

            checkCardinality('1..2', field).should.be.false;
        });

        it('empty list', () => {
            const field = [];

            checkCardinality('1..2', field).should.be.false;
        });

        it('list of one', () => {
            const field = [1];

            checkCardinality('1..2', field).should.be.true;
        });

        it('list of two', () => {
            const field = [1, 2];

            checkCardinality('1..2', field).should.be.true;
        });

        it('list of three', () => {
            const field = [1, 2, 3];

            checkCardinality('1..2', field).should.be.false;
        });
    });

    describe('1..*', () => {
        it('zero arguments', () => {
            const field = undefined;

            checkCardinality('1..*', field).should.be.false;
        });

        it('one argument', () => {
            const field = 1;

            checkCardinality('1..*', field).should.be.false;
        });

        it('empty list', () => {
            const field = [];

            checkCardinality('1..*', field).should.be.false;
        });

        it('list of one', () => {
            const field = [1];

            checkCardinality('1..*', field).should.be.true;
        });

        it('list of two', () => {
            const field = [1, 2];

            checkCardinality('1..*', field).should.be.true;
        });
    });
});
