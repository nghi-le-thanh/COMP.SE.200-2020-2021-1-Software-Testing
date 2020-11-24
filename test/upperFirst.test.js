import upperFirst from '../src/upperFirst.js'
import chai from 'chai'

let expect = chai.expect;

describe('upperFirst test', () => {
    
    it('should convert fred into Fred', () => {
        expect(upperFirst('fred')).to.equal('Fred');
    });

    it('should convert FRED into FRED', () => {
        expect(upperFirst('FRED')).to.equal('FRED');
    });

    it('upperFirst should return string', () => {
        let result = upperFirst('fred');
        expect(result).to.be.a('string');
    });

});