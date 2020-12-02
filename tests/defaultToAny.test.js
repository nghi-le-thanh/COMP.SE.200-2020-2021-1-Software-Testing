import defaultToAny from '../src/defaultToAny.js';
import chai from 'chai';

const assert = chai.assert;

describe('defaultToAny.js test', () => {
    it('defaultToAny null as 1st and 2nd parameters expect return last parameter', () => {
        assert.strictEqual(defaultToAny(null, null, 100), 100);
    });

    it('defaultToAny NaN, null as 2nd paramter, expect return last parameter', () => {
        assert.strictEqual(defaultToAny(NaN, null, 100), 100);
    });

    it('defaultToAny undefined as 1st parameter, null as 2nd paramter, NaN as 3rd parameter, expect return last parameter', () => {
        assert.strictEqual(defaultToAny(undefined, null, NaN, 100), 100);
    });

    it('defaultToAny valid 1st parameter, return 1st parameter', () => {
        assert.strictEqual(defaultToAny(5.55, null, undefined), 5.55);
    });
});