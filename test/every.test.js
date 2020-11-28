import every from '../src/every.js'
import chai from 'chai'

let expect = chai.expect;

describe('every test', () => {

    it('should return true if all array elements pass the predicate check', () => {
        let array = ['1', 'yes'];
        let result = every(array, String);
        expect(result).to.be.true;
    });

    it('should return true for empty arrays', () => {
        let array = [];
        let result = every(array, String);
        expect(result).to.be.true;
    });
    
    it('should return false if all array elements did not pass the predicate check', () => {
        let array = [true, 1, null, 'yes'];
        let result = every(array, Boolean);
        expect(result).to.be.false;
    });

    it('should not return boolean if array is not passed', () => {
        expect(every('abc', String)).to.not.equal('boolean');
        expect(every(123, Number)).to.not.equal('boolean');

    });

    it('should not return boolean if null, NaN, undefined is passed', () => {
        expect(every(null, String)).to.not.equal('boolean');
        expect(every(NaN, String)).to.not.equal('boolean');
        expect(every(undefined, String)).to.not.equal('boolean');
    });

});