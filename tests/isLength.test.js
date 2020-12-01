import isLength from '../src/isLength.js'
import chai from 'chai'

let expect = chai.expect;

describe('isLength test', () => {

    it('should return true if value is a valid length', () => {
        
        expect(isLength(3)).to.be.true;
        expect(isLength(Number.MAX_SAFE_INTEGER)).to.be.true;      
    });
    
    it('should return false if value is not a valid length', () => {

        expect(isLength(Number.MAX_VALUE)).to.be.false;
        expect(isLength(Number.MIN_VALUE)).to.be.false;
        expect(isLength(null)).to.be.false;
        expect(isLength(Infinity)).to.be.false;
        expect(isLength(undefined)).to.be.false;
        expect(isLength(NaN)).to.be.false;
        expect(isLength([1,2,3])).to.be.false;
        expect(isLength({'a':1})).to.be.false;
    });

});