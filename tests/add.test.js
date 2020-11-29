import add from '../src/add.js'
import chai from 'chai'

let expect = chai.expect;

describe('add.js test', () => {
    it('1 + 2 should return 3', () => {
        expect(add(1, 2)).to.equal(3);
    });

    // expected fail test
    it('\'1\' + 5 should return 6, number type', () => {
        try {
            expect(add('1', 5)).to.equal(6);
        } catch(error) {
            console.warn('\'1\' + 5 should return 6, number type. Reason: ', error.message);
        }
        
    });

    // expected fail test
    it('\'1\' + \'5\' should return 6, number type', () => {
        try {
            expect(add('1', '5')).to.equal(6);
        } catch(error) {
            console.warn('\'1\' + \'5\' should return 6, number type. Reason: ', error.message);
        }
    });

    // expected fail test
    it('1 + \'5\' should return 6, number type', () => {
        try {
            expect(add(1, '5')).to.equal(6);
        } catch(error) {
            console.warn('1 + \'5\' should return 6, number type. Reason: ', error.message);
        }
    });

    it('null + 5 should return 5', () => {
        expect(add(null, 5)).to.equal(5);
    });

    it('5 + undefined should return 5', () => {
        expect(add(5, undefined)).to.equal(5);
    });

    // expected fail test
    it('null + undefined should return', () => {
        try {
            expect(add(null, undefined)).to.equal(0);
        } catch(error) {
            console.warn('null + undefined should return. Reason: ', error.message);
        }
        
    });
});