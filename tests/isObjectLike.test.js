import isObjectLike from '../src/isObjectLike.js'
import chai from 'chai'

let expect = chai.expect;

describe('isObjectLike test', () => {

    it('should return true if value is an object-like', () => {
        
        expect(isObjectLike({})).to.be.true;
        expect(isObjectLike({'a':1})).to.be.true;
        expect(isObjectLike([1, 2, 3])).to.be.true;        
        expect(isObjectLike(new Number(0))).to.be.true;    
        expect(isObjectLike(new String('a'))).to.be.true; 
    });
    
    it('should return false if value is not an object-like', () => {

        expect(isObjectLike(Function)).to.be.false;
        expect(isObjectLike(null)).to.be.false;
        expect(isObjectLike(Infinity)).to.be.false;
        expect(isObjectLike(undefined)).to.be.false;
        expect(isObjectLike(NaN)).to.be.false;
        
    });

});