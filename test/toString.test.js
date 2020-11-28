import toString from '../src/toString.js'
import chai from 'chai'

let expect = chai.expect;

describe('toString test', () => {

    it('should preserved -0', () => {
        expect(toString(-0)).to.equal('-0');
    });

    it('should convert array into a string', () => {
        expect(toString([1,2,3])).to.equal('1,2,3');
    });

    it('should not return string for null, undefined, boolean, NaN', () => {
        expect(toString(null)).to.not.equal('string');
        expect(toString(undefined)).to.not.equal('string');
        expect(toString(true)).to.not.equal('string');
        expect(toString(NaN)).to.not.equal('string');
    });

    it('should return string for number, object, string', () => {
        expect(toString(123)).to.be.a('string');
        expect(toString({'a':1})).to.be.a('string');
        expect(toString('abc')).to.be.a('string');
    });

});