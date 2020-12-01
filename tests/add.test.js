import add from '../src/add.js'
import chai from 'chai'

let expect = chai.expect;

describe('add.js test', () => {
    it('1 + 2 should return 3', () => {
        expect(add(1, 2)).to.equal(3);
    });

    // expected fail test
    it('\'1\' + 5 should return 6, number type', () => {
        expect(add('1', 5)).to.equal(6);
    });

    // expected fail test
    it('\'1\' + \'5\' should return 6, number type', () => {
        expect(add('1', '5')).to.equal(6);
    });

    // expected fail test
    it('1 + \'5\' should return 6, number type', () => {
        expect(add(1, '5')).to.equal(6);
    });

    it('null + 5 should return 5', () => {
        expect(add(null, 5)).to.equal(5);
    });

    it('5 + undefined should return 5', () => {
        expect(add(5, undefined)).to.equal(5);
    });

    // expected fail test
    it('null + undefined should return', () => {
        expect(add(null, undefined)).to.equal(0);
    });
});