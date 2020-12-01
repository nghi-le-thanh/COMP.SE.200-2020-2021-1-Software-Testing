import isBuffer from '../src/isBuffer.js'
import chai from 'chai'

let expect = chai.expect;

describe('isBuffer test', () => {

    it('should return true if value is a Buffer', () => {
        
        expect(isBuffer(Buffer.from('abc'))).to.be.true;
        expect(isBuffer(Buffer.alloc(2))).to.be.true;
        expect(isBuffer(Buffer.from([1, 2, 3]))).to.be.true;
    });
    
    it('should return false if value is not a Buffer', () => {
       
        expect(isBuffer(undefined)).to.be.false;
        expect(isBuffer(12)).to.be.false;
        expect(isBuffer('abc')).to.be.false;
        expect(isBuffer([1,2,3])).to.be.false;
        expect(isBuffer({'a':1})).to.be.false;
    });

});