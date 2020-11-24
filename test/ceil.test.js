import ceil from '../src/ceil.js'
import chai from 'chai'

let expect = chai.expect;

describe('ceil test', () => {
    
    it('4.006 with precision 0 should return 5', () => {
        expect(ceil(4.006)).to.equal(5);
    });

    it('6.004 with precision 2 should return 6.01', () => {
        expect(ceil(6.004, 2)).to.equal(6.01);
    });

    it('6040 with precision -2 should return 6100', () => {
        expect(ceil(6040, -2)).to.equal(6100);
    });
});