import isArguments from '../src/isArguments.js'
import chai from 'chai'

let expect = chai.expect;

describe('isArguments test', () => {

    it('should return true if value is an arguments object', () => {
        
        expect(isArguments(function() { return arguments }())).to.be.true;
        
    });
    
    it('should return false if value is not an arguments object', () => {

        expect(isArguments([1, 2, 3])).to.be.false;
        expect(isArguments(Function)).to.be.false;
        expect(isArguments(null)).to.be.false;
        expect(isArguments(Infinity)).to.be.false;
        expect(isArguments(undefined)).to.be.false;
        expect(isArguments(NaN)).to.be.false;
        
    });

});