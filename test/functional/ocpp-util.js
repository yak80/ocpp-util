/**
 * Main functional test.
 *
 * @module test/functional/ocpp-util
 */

'use strict';

require('chai').should();

const ocppUtil = require('../../index');

describe('OCPP Util', () => {
    it('check cardinality', () => {
        const field = undefined;

        ocppUtil.checkCardinality('0..1', field).should.be.true;
    });

    it('check type', () => {
        const field = NaN;

        ocppUtil.checkType('string', field, 20).should.be.false;
    });

    it('get OCPP 1.6 enums', () => {
        const enums = ocppUtil.enums('1.6');

        enums.CHARGE_POINT_STATUS[0].should.be.equal('Available');
    });

    it('get OCPP 2.0 enums', () => {
        const enums = ocppUtil.enums('2.0');

        enums.CONNECTOR_STATUS[0].should.be.equal('Available');
    });
});
