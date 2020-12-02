import endsWith from '../src/endsWith.js';
import chai from 'chai';

const assert = chai.assert;

describe('endsWith.js test', () => {
    it('endsWith \'abc\', expect \'c\', return true ', () => {
        assert.strictEqual(endsWith('abc', 'c'), true);
    });

    it('endsWith \'abc\', expect \'b\', return false ', () => {
        assert.strictEqual(endsWith('abc', 'b'), false);
    });

    it('endsWith \'abc\', expect \'b\' ends at position 1, return true ', () => {
        assert.strictEqual(endsWith('abc', 'b', 1), false);
    });

    it('endsWith \'abc\', expect \'b\' ends at position more than length, position is end of string, return false', () => {
        assert.strictEqual(endsWith('abc', 'b', 100), false);
    });

    it('endsWith \'abc\', expect \'b\' ends at negative position, position is start of string, return true', () => {
        assert.strictEqual(endsWith('abc', 'a', -100), true);
    });

    it('endsWith null, expect throwns error ', () => {
        assert.throws(() => {
            endsWith(null)
        }, 'Invalid argument');
    });

    it('endsWith undefined, expect throwns error ', () => {
        assert.throws(() => {
            endsWith(undefined)
        }, 'Invalid argument');
    });

    it('endsWith incorrect type, expect throwns error ', () => {
        assert.throws(() => {
            endsWith(123)
        }, 'Invalid type');
    });
});