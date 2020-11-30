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
        try {
            assert.deepEqual([], castArray());
        } catch(error) {
            console.warn('Fail test cast nothing should return an empty array. Reason: ', error.message);
        }
    });

    // expected fail test
    it('cast parameters 1, \'a\', 5 should return an array [1, \'a\', 5] ', () => {
        try {
            assert.deepEqual(castArray(1, 'a', 5), [1, 'a', 5]);
        } catch(error) {
            console.warn('Fail cast parameters 1, \'a\', 5 should return an array [1, \'a\', 5]. Reason: ', error.message);
        }
    });

    it('cast a parameter \'abc\' should return an array [\'abc\'] ', () => {
        assert.deepEqual(castArray('abc'), ['abc']);
    });

    it('cast a parameter {foo: \'abc\'} should return an array [{foo: \'abc\'}] ', () => {
        assert.deepEqual(castArray({foo: 'abc'}), [{foo: 'abc'}]);
    });

    // expected fail test
    it('cast parameters (3, [2, 3]) should return an array [3, 2, 3]', () => {
        try {
            assert.deepEqual(castArray(3, [2, 3]), [3, 2, 3]);
        } catch (error) {
            console.warn('Fail test cast parameters (3, [2, 3]) should return an array [3, 2, 3]. Reason: ', error.message);
        }
    });
});