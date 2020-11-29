import at from '../src/at.js';
import chai from 'chai';

const expect = chai.expect;
const assert = chai.assert;

describe('Test at.js function', () => {

    // expected fail test
    it('Give null to method, return NAN', () => {
        // expect(at(null)).to.be.NaN;
    });

    // it('Give undefined to method, return NaN', () => {
    //     expect(at(undefined)).to.be.NaN;
    // });

    // it('Give invalid number string to method, return NaN', () => {
    //     expect(at('Hello world!')).to.be.NaN;
    // });

    // it('Give Hexadecimals number string to method, return converted base 10', () => {
    //     assert.equal(at('0xabcdef'), 11259375);
    // });

    // it('Give valid number string to method, return number type and same value', () => {
    //     const convertedValue = at(500);
    //     assert.isNumber(convertedValue);
    //     assert.equal(convertedValue, 500);
    // });
});
