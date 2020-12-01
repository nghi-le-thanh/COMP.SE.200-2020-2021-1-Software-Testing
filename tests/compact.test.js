import compact from '../src/compact.js';
import chai from 'chai';

const assert = chai.assert;

describe('compact.js test', () => {
    // expect fail test
    it('compact an empty array, return empty array', () => {
        assert.deepEqual(compact([]), []);
    });

    it('compact null, expect throws error', () => {
        assert.throw(() => {
            compact(null);
        }, 'Invalid argument');
    });

    it('compact undefined, expect throws error', () => {
        assert.throw(() => {
            compact(undefined);
        }, 'Invalid argument');
    });

    it('compact string, expect throws error', () => {
        assert.throw(() => {
            compact("Hello");
        }, 'Invalid argument');
    });

    it('compact object, expect throws error', () => {
        assert.throw(() => {
            compact({foo: 'bar'});
        }, 'Invalid argument');
    });

    it('compact an array with valid and falsey values, return array with valid values', () => {
        assert.deepEqual(compact([123, undefined, 'Hello', null, '', false, {foo: 'bar'}, 0, 5.55]), 
                                 [123, 'Hello', {foo: 'bar'}, 5.55]);
    });
});