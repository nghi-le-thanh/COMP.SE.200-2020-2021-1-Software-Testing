import difference from '../src/difference.js';
import chai from 'chai';

const assert = chai.assert;

describe('difference.js test', () => {
    it('difference [2, 1] and [2, 3], expect return [1]', () => {
        assert.deepEqual(difference([2, 1], [2, 3]), [1]);
    });

    it('difference [2, null] and [1, 2, null, 3], expect return []', () => {
        assert.deepEqual(difference([2, null], [1, 2, null, 3]), []);
    });

    it('difference [] and [3, 4, 5], expect return []', () => {
        assert.deepEqual(difference([], [3, 4, 5]), []);
    });

    it('difference null and [3, 4, 5], expect return []', () => {
        assert.deepEqual(difference(null, [3, 4, 5]), []);
    });

    it('difference undefined and [3, 4, 5], expect return []', () => {
        assert.deepEqual(difference(undefined, [3, 4, 5]), []);
    });

    it('difference not array type and [3, 4, 5], expect return []', () => {
        assert.deepEqual(difference({foo: 'bar'}, [3, 4, 5]), []);
    });
});