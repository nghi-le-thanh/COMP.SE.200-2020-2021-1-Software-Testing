import isObject from '../src/isObject.js'
import chai from 'chai'

let expect = chai.expect;

describe('isObject test', () => {

    it('should return true if value is an object', () => {
        
        expect(isObject({})).to.be.true;
        expect(isObject({'a':1})).to.be.true;
        expect(isObject([1, 2, 3])).to.be.true; 
        expect(isObject(Function)).to.be.true;
        expect(isObject(new Number(0))).to.be.true;    
        expect(isObject(new String('a'))).to.be.true; 
    });
    
    it('should return false if value is not an object', () => {

        expect(isObject(null)).to.be.false;
        expect(isObject(Infinity)).to.be.false;
        expect(isObject(undefined)).to.be.false;
        expect(isObject(NaN)).to.be.false;
        
    });

});