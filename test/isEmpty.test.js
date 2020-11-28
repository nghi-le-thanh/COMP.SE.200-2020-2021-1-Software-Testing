import isEmpty from '../src/isEmpty.js'
import chai from 'chai'

let expect = chai.expect;

describe('isEmpty test', () => {

    it('should return true if value is Empty', () => {
        expect(isEmpty(null)).to.be.true;
        expect(isEmpty(true)).to.be.true;
        expect(isEmpty(1)).to.be.true;
        expect(isEmpty(undefined)).to.be.true;
    });
    
    it('should return false if value is not Empty', () => {
        expect(isEmpty('abc')).to.be.false;
        expect(isEmpty([1,2,3])).to.be.false;
        expect(isEmpty({'a':1})).to.be.false;
    });

});