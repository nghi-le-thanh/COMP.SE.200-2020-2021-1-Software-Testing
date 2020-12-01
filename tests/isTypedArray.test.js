import isTypedArray from '../src/isTypedArray.js'
import chai from 'chai'

let expect = chai.expect;

describe('isTypedArray test', () => {

    it('should return true if value is a typed array', () => {
        
        expect(isTypedArray(new Int8Array)).to.be.true;
        expect(isTypedArray(new Uint8Array)).to.be.true;
        expect(isTypedArray(new Uint8ClampedArray)).to.be.true;
        expect(isTypedArray(new Int16Array)).to.be.true;
        expect(isTypedArray(new Uint16Array)).to.be.true;
        expect(isTypedArray(new Int32Array)).to.be.true;
        expect(isTypedArray(new Uint32Array)).to.be.true;
        expect(isTypedArray(new BigInt64Array)).to.be.true;
        expect(isTypedArray(new BigUint64Array)).to.be.true;
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