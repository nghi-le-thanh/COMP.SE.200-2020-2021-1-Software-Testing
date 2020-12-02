import keys from '../src/keys.js';
import chai from 'chai';

const assert = chai.assert;
const expect = chai.expect;

describe('keys.js test', () => {
    it('keys sample object, expect an array of object properties', () => {
        expect(keys({
            a: '1',
            b: '2',
            c: '3',
            d: '4'
        })).to.include.members(['a', 'b', 'c', 'd']);
    });

    it('keys empty object, expect an empty array', () => {
        assert.deepEqual(keys({}), []);
    });

    it('keys a string, expect an array with values of character index', () => {
        expect(keys('abcd')).to.include.members(['0', '1', '2', '3']);
    });

    it('keys a number, expect an empty array', () => {
        assert.deepEqual(keys(100), []);
    });

    it('keys null, expect thrown error', () => {
        assert.throws(() => {
            keys(null);
        }, 'Invalid arguments');
    });

    it('keys undefined, expect thrown error', () => {
        assert.throws(() => {
            keys(undefined);
        }, 'Invalid arguments');
    });

    it('keys undefined, expect thrown error', () => {
        assert.throws(() => {
            keys(undefined);
        }, 'Invalid arguments');
    });


});