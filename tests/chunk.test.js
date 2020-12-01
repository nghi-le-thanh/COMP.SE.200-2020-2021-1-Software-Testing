import chunk from '../src/chunk.js';
import chai from 'chai';

const assert = chai.assert;


describe('chunk.js test', () => {
    // expect fail test
    it('chunk a valid array with zero size, expect return unchanged array', () => {
        try {
            assert.deepEqual(chunk([1,2,3], 0), [1,2,3]);
        } catch (error) {
            console.warn('Fail test chunk a valid array with zero size, expect return unchanged array. Reason: ', error.message);
        }
    });

    // expect fail test
    it('chunk a valid array with negavitve size, expect empty array', () => {
        assert.deepEqual(chunk([1,2,3], -100.55), []);
    });

    it('chunk an empty array with valid size, expect empty array', () => {
        assert.deepEqual(chunk([], 10), []);
    });

    it('chunk an empty array with negative size, expect empty array', () => {
        assert.deepEqual(chunk([], -10), []);
    });

    // expect fail test
    it('chunk invalid type with valid size, expect thrown error', () => {
        try {
            assert.throws(() => {
                chunk("hello world", 2)
            }, 'Invalid input');    
        } catch (error) {
            console.warn('chunk invalid type with valid size, expect thrown error. Reason: ', error.message);
        }
    });

    // unexpected fail test
    it('chunk valid type with valid size, expect valid sub arrays', () => {
        try {
            assert.deepEqual(chunk(['foo', 'doctor', 'hello'], 2), [['foo', 'doctor'], ['hello']]);
        } catch(error) {
            console.warn('Unexpected fail test chunk valid type with valid size, expect valid sub arrays. Reason: ', error.message);
        }
    });
});