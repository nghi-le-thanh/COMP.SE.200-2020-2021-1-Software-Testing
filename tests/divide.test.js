import divide from '../src/divide.js';
import chai from 'chai';

const assert = chai.assert;

describe('divide.js test', () => {
    it('divide 6 by 3, expect return 2', () => {
        assert.strictEqual(divide(6, 3), 2);
    });

    it('divide 10 by 2, expect return 5', () => {
        assert.strictEqual(divide(10, 5), 2);
    });

    it('divide \'10\' by 2, expect return 5', () => {
        assert.strictEqual(divide('10', 5), 2);
    });

    it('divide 6 by \'3\', expect return 2', () => {
        assert.strictEqual(divide(6, '3'), 2);
    });

    it('divide \'foo\' by 3, expect thrown error', () => {
        assert.throws(() => {
            divide('foo', 3);
        }, 'Illegal Argument');
    });

    it('divide null by 3, expect thrown error', () => {
        assert.throws(() => {
            divide(null, 3);
        }, 'Illegal Argument');
    });
});