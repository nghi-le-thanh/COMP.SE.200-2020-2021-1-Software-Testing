import chunk from '../src/chunk.js';
import chai from 'chai';

const assert = chai.assert;


describe('chunk.js test', () => {
    // expect fail test
    it('chunk a valid array with zero size, expect return unchanged array', () => {
        assert.deepEqual(chunk([1, 2, 3], 0), [1, 2, 3]);
    });

    // expect fail test
    it('chunk a valid array with negavitve size, expect empty array', () => {
        assert.deepEqual(chunk([1, 2, 3], -100.55), []);
    });

    it('chunk an empty array with valid size, expect empty array', () => {
        assert.deepEqual(chunk([], 10), []);
    });

    it('chunk an empty array with negative size, expect empty array', () => {
        assert.deepEqual(chunk([], -10), []);
    });

    // expect fail test
    it('chunk invalid type with valid size, expect thrown error', () => {
        assert.throws(() => {
            chunk("hello world", 2)
        }, 'Invalid input');    
    });

    // unexpected fail test
    it('chunk valid type with valid size, expect valid sub arrays', () => {
        assert.deepEqual(chunk(['foo', 'doctor', 'hello'], 2), [['foo', 'doctor'], ['hello']]);
    });

    it('chunk an array without explicitly size, default size is 1', () => {
        assert.deepEqual(chunk(['a', 'b', 'c', 'd']), [['a'], ['b'], ['c'], ['d']]);
    });

    it('chunk a null, then expect return empty array, discard size', () => {
        assert.deepEqual(chunk(null, 2), []);
    });

});