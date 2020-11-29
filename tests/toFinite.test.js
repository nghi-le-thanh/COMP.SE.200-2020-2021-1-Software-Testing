import toFinite from '../src/toFinite.js';
import chai from 'chai';

const expect = chai.expect;
const assert = chai.assert;

describe('Test toFinite.js function', () => {

    it('Give null to method, return NAN', () => {
        expect(toFinite(null)).to.eql(0);
    });

    it('Give undefined to method, return NaN', () => {
        expect(toFinite(undefined)).to.eql(0);
    });

    it('Give invalid number string to method, return NaN', () => {
        expect(toFinite('a string with a value')).to.eql(0);
    });

    it('Give Hexadecimals number string to method, return converted base 10', () => {
        assert.equal(toFinite('0xabcdef'), 11259375);
    });

    it('Give valid number to method, return number type and same value', () => {
        const convertedValue = toFinite(3.44532);
        assert.isNumber(convertedValue);
        assert.equal(convertedValue, 3.44532);
    });

    it('Give maximum int value to method, return number type and converted value', () => {
        const convertedValue = toFinite(Infinity);
        assert.isNumber(convertedValue);
        assert.equal(convertedValue, 1.7976931348623157e+308);
    });
});