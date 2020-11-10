import add from '../src/add.js'
import chai from 'chai'

let expect = chai.expect;

describe('sum test', () => {
    it('1 + 2 should return 3', () => {
        expect(add(1, 2)).to.equal(3);
    });
});