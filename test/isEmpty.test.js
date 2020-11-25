import isEmpty from '../src/isEmpty.js'
import chai from 'chai'

let expect = chai.expect;

describe('isEmpty test', () => {

    it('should return true if value is Empty', () => {
        expect(isEmpty(null)).to.be.true;
        expect(isEmpty(true)).to.be.true;
    });
    
    it('should return false if value is not Empty', () => {
        expect(isEmpty('abc')).to.be.false;
    });

});