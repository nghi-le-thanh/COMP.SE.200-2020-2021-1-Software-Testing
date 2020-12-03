import isTypedArray from '../src/isTypedArray.js'
import chai from 'chai'

let expect = chai.expect;

describe('isTypedArray test', () => {

    it('should return true if value is a typed array', () => {
        
        expect(isTypedArray(Int8Array.from('123'))).to.be.true;
        expect(isTypedArray(Uint8Array.from('123'))).to.be.true;
        expect(isTypedArray(Uint8ClampedArray.from('123'))).to.be.true;
        expect(isTypedArray(Int16Array.from('123'))).to.be.true;
        expect(isTypedArray(Uint16Array.from('123'))).to.be.true;
        expect(isTypedArray(Int32Array.from('123'))).to.be.true;
        expect(isTypedArray(Uint32Array.from('123'))).to.be.true;
        expect(isTypedArray(BigInt64Array.from('123'))).to.be.true;
        expect(isTypedArray(BigUint64Array.from('123'))).to.be.true;
    });
    
    it('should return false if value is not a typed array', () => {

        expect(isTypedArray([])).to.be.false;
        expect(isTypedArray([1, 2, 3])).to.be.false;
        expect(isTypedArray(Function)).to.be.false;
        expect(isTypedArray(null)).to.be.false;
        expect(isTypedArray(Infinity)).to.be.false;
        expect(isTypedArray(undefined)).to.be.false;
        expect(isTypedArray(NaN)).to.be.false;
        
    });

});