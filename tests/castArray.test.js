import castArray from '../src/castArray.js'
import chai from 'chai'

let assert = chai.assert;

describe('castArray.js test', () => {
    it('cast null should return array with null as first item', () => {
        assert.deepEqual([null], castArray(null));
    });

    it('cast undefined should return array with undefined as first item', () => {
        assert.deepEqual([undefined], castArray(undefined));
    });

    // failed test
    it('cast nothing should return an empty array', () => {
        assert.deepEqual([], castArray());
    });

    // expected fail test
    it('cast parameters 1, \'a\', 5 should return an array [1, \'a\', 5] ', () => {
        assert.deepEqual(castArray(1, 'a', 5), [1, 'a', 5]);
    });

    it('cast a parameter \'abc\' should return an array [\'abc\'] ', () => {
        assert.deepEqual(castArray('abc'), ['abc']);
    });

    it('cast a parameter {foo: \'abc\'} should return an array [{foo: \'abc\'}] ', () => {
        assert.deepEqual(castArray({foo: 'abc'}), [{foo: 'abc'}]);
    });

    // expected fail test
    it('cast parameters (3, [2, 3]) should return an array [3, 2, 3]', () => {
        assert.deepEqual(castArray(3, [2, 3]), [3, 2, 3]);
    });

    it('cast a single paramter, return an array of that parameter', () => {
        assert.deepEqual(castArray(1), [1]);
    });

    it('cast an array, expect return the array', () => {
        assert.deepEqual(castArray([1, 2, 3]), [1, 2, 3]);
    });
});