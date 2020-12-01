import isSymbol from '../src/isSymbol.js'
import chai from 'chai'

let expect = chai.expect;

describe('isSymbol test', () => {

    it('should return true if value is symbol', () => {
        
        let sym = Symbol('foo');
        expect(isSymbol(Symbol.iterator)).to.be.true;
        expect(isSymbol(sym)).to.be.true;
        expect(isSymbol(Object(sym))).to.be.true;
    });
    
    it('should return false if value is not a symbol', () => {

        expect(isSymbol('abc')).to.be.false;
        expect(isSymbol(Function)).to.be.false;
        expect(isSymbol(null)).to.be.false;
        expect(isSymbol(Infinity)).to.be.false;
        expect(isSymbol(undefined)).to.be.false;
        expect(isSymbol(NaN)).to.be.false;
        
    });

});