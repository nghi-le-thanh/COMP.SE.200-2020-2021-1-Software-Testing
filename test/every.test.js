import every from '../src/every.js'
import chai from 'chai'

let expect = chai.expect;

describe('every test', () => {

    it('should return true if all elements pass the predicate check', () => {
        let array = ['1', 'yes'];
        let result = every(array, String);
        expect(result).to.be.true;
    });
    
    it('should return false if all elements did not pass the predicate check', () => {
        let array = [true, 1, null, 'yes'];
        let result = every(array, Boolean);
        expect(result).to.be.false;
    });

});