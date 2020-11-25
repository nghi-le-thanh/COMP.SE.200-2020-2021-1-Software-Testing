import eq from '../src/eq.js'
import chai from 'chai'

let expect = chai.expect;

describe('eq test', () => {

    it('should return true if same objects are compared', () => {
        let object = { 'a': 1 };
        let result = eq(object, object);
        expect(result).to.be.true;
    });

    it('should return true if same strings are compared', () => {
        expect(eq('a','a')).to.be.true;
    });

    it('should return true if same numbers are compared', () => {
        expect(eq(123,123)).to.be.true;
    });
    
    it('should return false if values are not quivalent', () => {
        expect(eq('a', NaN)).to.be.false;
    });

    it('should return false if string and object is compared', () => {
        let object = { 'a': 1 };
        expect(eq('a', object)).to.be.false;
    });

});