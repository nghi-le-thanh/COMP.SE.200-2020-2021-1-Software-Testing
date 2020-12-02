import isArrayLike from '../src/isArrayLike.js'
import chai from 'chai'

let expect = chai.expect;

describe('isArrayLike test', () => {

    it('should return true if value is array-like', () => {
        
        expect(isArrayLike([1, 2, 3])).to.be.true;
        expect(isArrayLike('abc')).to.be.true;
        expect(isArrayLike([])).to.be.true;
        
    });
    
    it('should return false if value is not an array-like', () => {

        expect(isArrayLike(23)).to.be.false;
        expect(isArrayLike(Function)).to.be.false;
        expect(isArrayLike(null)).to.be.false;
        expect(isArrayLike(Infinity)).to.be.false;
        expect(isArrayLike(undefined)).to.be.false;
        expect(isArrayLike(NaN)).to.be.false;
        
    });

});