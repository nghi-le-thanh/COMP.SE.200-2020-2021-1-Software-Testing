import toNumber from '../src/toNumber.js';
import chai from 'chai';

const expect = chai.expect;
const assert = chai.assert;

describe('Test toNumber.js function', () => {

    // expected fail test
    it('Give null to method, return NAN', () => {
        expect(toNumber(null)).to.be.NaN;
    });

    it('Give undefined to method, return NaN', () => {
        expect(toNumber(undefined)).to.be.NaN;
    });

    it('Give an ojbect to method, return NaN', () => {
        expect(toNumber({a : 'foo'})).to.be.NaN;
    });

    it('Give invalid number string to method, return NaN', () => {
        expect(toNumber('Hello world!')).to.be.NaN;
    });

    it('Give Hexadecimals number string to method, return converted base 10', () => {
        assert.equal(toNumber('0xabcdef'), 11259375);
    });

    it('Give bad Hexadecimals number, return NaN', () => {
        expect(toNumber('-0xabcdef')).to.be.NaN;
    });

    it('Give binary number string to method, return converted base 10', () => {
        assert.equal(toNumber('1010'), 10);
    });

    it('Give valid number string to method, return number type and same value', () => {
        const convertedValue = toNumber(500);
        assert.isNumber(convertedValue);
        assert.equal(convertedValue, 500);
    });
});
