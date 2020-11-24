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

    it('toString should return string', () => {
        let result = toString([1, 2]);
        expect(result).to.be.a('string');
    });

});