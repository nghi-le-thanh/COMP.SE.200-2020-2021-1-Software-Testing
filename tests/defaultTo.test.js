import defaultTo from '../src/defaultTo.js';
import chai from 'chai';

const assert = chai.assert;

describe('defaultTo.js test', () => {
    it('defaultTo null, expect return 2nd parameter', () => {
        assert.strictEqual(defaultTo(null, 100), 100);
    });

    it('defaultTo NaN, expect return 2nd parameter', () => {
        assert.strictEqual(defaultTo(NaN, 100), 100);
    });

    it('defaultTo undefined, expect return 2nd parameter', () => {
        assert.strictEqual(defaultTo(undefined, 100), 100);
    });

    it('defaultTo valid 1st parameter , expect return 1st parameter', () => {
        assert.strictEqual(defaultTo('foo', 100), 'foo');
    });
});