import map from '../src/map.js';
import chai from 'chai';

const assert = chai.assert;
const expect = chai.expect;

describe('map.js test', () => {
    it('map double array of number, expect array with double value', () => {
        assert.deepEqual(
            map([1, 2, 3, 4], num => num * 2),
            [2, 4, 6, 8]
        );
    });

    it('map empty array, expect an empty array', () => {
        assert.deepEqual(
            map([], num => num * 2),
            []
        );
    });

    it('map an array without iteratee, expect the same array', () => {
        assert.deepEqual(
            map([1, 2, 3]),
            [1,2,3]
        );
    });

    it('map string, expect thrown error', () => {
        assert.throws(() => {
            map('123', char => char.toUpperCase());
        }, 'Invalid type parameter');
    });

    it('map number, expect thrown error', () => {
        assert.throws(() => {
            map(5000, num => num * 3);
        }, 'Invalid type parameter');
    });

    it('map null, expect thrown error', () => {
        assert.throws(() => {
            map(null);
        }, 'Invalid arguments');
    });

    it('map undefined, expect thrown error', () => {
        assert.throws(() => {
            map(undefined);
        }, 'Invalid arguments');
    });
});