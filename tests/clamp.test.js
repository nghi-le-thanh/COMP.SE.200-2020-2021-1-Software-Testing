import clamp from '../src/clamp.js';
import chai from 'chai';

const assert = chai.assert;

describe('clamp.js test', () => {
    it('clamp null in range, should throw error', () => {
        assert.throws(() => {
            clamp(null, 1, 10);
        }, 'Invalid Argument');
    });

    it('clamp undefined in range, should throw error', () => {
        assert.throws(() => {
            clamp(undefined, 1, 10);
        }, 'Invalid Argument');
    });

    it('clamp without parameters, should throw error', () => {
        assert.throws(() => {
            clamp();
        }, 'Invalid Argument');
    });

    it('clamp number in incorrect range, should thrown error', () => {
        assert.throws(() => {
            clamp(10, 100, 1);
        }, 'Invalid Range');
    });

    it('clamp number in range without lower, should thrown error', () => {
        assert.throws(() => {
            clamp(10, null, 1);
        }, 'Invalid Range');
    });

    it('clamp number in range without upper, should thrown error', () => {
        assert.throws(() => {
            clamp(10, 1);
        }, 'Invalid Range');
    });

    it('clamp number in range, return number itself', () => {
        assert.strictEqual(clamp(42, 0, 1337), 42);
    });

    it('clamp number less than range, return range lowest number', () => {
        assert.strictEqual(clamp(42, 1337, 9000), 1337);
    });

    it('clamp number greater than range, return range largest number', () => {
        assert.strictEqual(clamp(42, 0, 10), 10);
    });
});