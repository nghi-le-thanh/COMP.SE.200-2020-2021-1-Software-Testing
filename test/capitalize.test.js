import capitalize from '../src/capitalize.js'
import chai from 'chai'

let expect = chai.expect;

describe('capitalize test', () => {
    
    it('should convert FRED into Fred', () => {
        expect(capitalize('FRED')).to.equal('Fred');
    });

    it('capitalize should return string', () => {
        let result = capitalize('fred');
        expect(result).to.be.a('string');
    });

});