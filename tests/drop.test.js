import drop from '../src/drop.js';
import chai from 'chai';

const assert = chai.assert;

describe('drop.js test', () => {
    it('drop [1, 2, 3] without n elements drop, default n is 1, expect [2, 3]', () => {
        assert.deepEqual(drop([1, 2, 3]), [2, 3]);
    });

    it('drop [1, 2, 3] and drop 2 elements, expect return [3]', () => {
        assert.deepEqual(drop([1, 2, 3], 2), [3]);
    });

    it('drop [1, 2, 3] and drop 5 elements, expect return []', () => {
        assert.deepEqual(drop([1, 2, 3], 5), []);
    });

    it('drop [1, 2, 3] and drop 0 elements, expect return [1, 2, 3]', () => {
        assert.deepEqual(drop([1, 2, 3], 0), [1, 2, 3]);
    });

    it('drop [1, 2, 3] and drop -3 elements, expect return [1, 2, 3]', () => {
        assert.deepEqual(drop([1, 2, 3], -3), [1, 2, 3]);
    });

    it('drop [] and drop 3 elements, expect return []', () => {
        assert.deepEqual(drop([], 3), []);
    });

    it('drop false and drop 3 elements, expect thrown error', () => {
        assert.throws(() => {
            drop(false, 3)
        }, 'Invalid argument');
    });

    it('drop null and drop 10 elements, expect return []', () => {
        assert.deepEqual(drop(null, 10), []);
    });
});