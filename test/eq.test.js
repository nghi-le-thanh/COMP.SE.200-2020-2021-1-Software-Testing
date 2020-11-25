import eq from '../src/eq.js'
import chai from 'chai'

let expect = chai.expect;

describe('eq test', () => {

    it('should return true if values are quivalent', () => {
        let object = { 'a': 1 };
        let result = eq(object, object);
        expect(result).to.be.true;
    });
    
    it('should return false if values are not quivalent', () => {
        expect(eq('a', NaN)).to.be.false;
    });

});