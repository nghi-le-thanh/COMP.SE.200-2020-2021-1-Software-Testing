import countBy from '../src/countBy.js';
import chai from 'chai';

const assert = chai.assert;

const USERS = [
    { user: 'barney', active: true },
    { user: 'betty', active: true },
    { user: 'fred', active: false }
]

describe('countBy.js test', () => {
    it('countBy a valid array with valid iteratee, expect return compacted object', () => {
        const countedObject = countBy(USERS, user => user.active);
        assert.equal(countedObject.true, 2);
        assert.equal(countedObject.false, 1);
    });

    it('countBy a valid array with invalid iteratee, expect return empty object', () => {
        assert.deepEqual(countBy(USERS, user => user.title), {});
    });

    it('countBy a valid array with void return iteratee, expect return empty object', () => {
        assert.deepEqual(countBy(USERS, user => {}), {});
    });

    it('countBy a valid array without iterator, expect thrown message', () => {
        assert.throws(() => {
            countBy(USERS)
        }, 'Invalid Iteratee');
    });

    it('countBy invalid array with valid iterator, expect thrown message', () => {
        assert.throws(() => {
            countBy(undefined, user => user.active);
        }, 'Invalid Argument');
    });
});