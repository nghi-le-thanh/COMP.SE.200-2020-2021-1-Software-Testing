import isBoolean from '../src/isBoolean.js'
import chai from 'chai'

let expect = chai.expect;

describe('isBoolean test', () => {

    it('should return true if value is Boolean', () => {
        
        expect(isBoolean(true)).to.be.true;
        expect(isBoolean(false)).to.be.true;
    });
    
    it('should return false if value is not Boolean', () => {
        expect(isBoolean(null)).to.be.false;
        expect(isBoolean(undefined)).to.be.false;
        expect(isBoolean(12)).to.be.false;
        expect(isBoolean('abc')).to.be.false;
        expect(isBoolean([1,2,3])).to.be.false;
        expect(isBoolean({'a':1})).to.be.false;
    });

});