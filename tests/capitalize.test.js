import capitalize from '../src/capitalize.js'
import chai from 'chai'

let expect = chai.expect;

describe('capitalize test', () => {
    
    it('should convert FRED into Fred', () => {
        expect(capitalize('FRED')).to.equal('Fred');
    });

    it('capitalize should return string', () => {
        let result = capitalize('fred');
        expect(result).to.be.a('string');
    });

    it('should not return string for null, boolean, undefined, number', () => {
        expect(capitalize(null)).to.not.equal('string');
        expect(capitalize(true)).to.not.equal('string');
        expect(capitalize(undefined)).to.not.equal('string');
        expect(capitalize(123)).to.not.equal('string');
    });

});