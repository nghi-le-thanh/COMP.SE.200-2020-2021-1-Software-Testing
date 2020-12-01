import isArrayLikeObject from '../src/isArrayLikeObject.js'
import chai from 'chai'

let expect = chai.expect;

describe('isArrayLikeObject test', () => {

    it('should return true if value is array-like object', () => {
        let a1 = {length: 0};                    
        let a2 = {0: 'foo', 5: 'bar', length: 6};
        expect(isArrayLikeObject([1, 2, 3])).to.be.true;
        expect(isArrayLikeObject(a1)).to.be.true;
        expect(isArrayLikeObject(a2)).to.be.true;
        
    });
    
    it('should return false if value is not an array-like object', () => {

        expect(isArrayLikeObject('abc')).to.be.false;
        expect(isArrayLikeObject(Function)).to.be.false;
        expect(isArrayLikeObject(null)).to.be.false;
        expect(isArrayLikeObject(Infinity)).to.be.false;
        expect(isArrayLikeObject(undefined)).to.be.false;
        expect(isArrayLikeObject(NaN)).to.be.false;
        
    });

});