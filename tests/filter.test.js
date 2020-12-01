import filter from '../src/filter.js';
import chai from 'chai';

const assert = chai.assert;

const USERS = [
    {user: 'barney', active: true},
    {user: 'fred', active: false}];

describe('filter.js test', () => {
    it('filter user list and take only active user, expect array of active users', () => {
        const filteredUser = filter(USERS, ({active}) => active);
        assert.deepEqual(USERS[0], filteredUser[0]);
    });

    it('filter empty user list and take only active user, expect array of empty array', () => {
        assert.deepEqual(filter([], ({active}) => active), [[]]);
    });

    it('filter empty user list with incorrect predicate, expect array of empty array', () => {
        assert.deepEqual(filter(USERS, ({title}) => title.length > 0), [[]]);
    });

    it('filter null, expect thrown error', () => {
        assert.throws(() => {
            filter(null, ({active}) => active);
        }, 'Invalid argument');
    });

    it('filter undefined, expect thrown error', () => {
        assert.throws(() => {
            filter(undefined, ({active}) => active);
        }, 'Invalid argument');
    });

    it('filter non array type, expect thrown error', () => {
        assert.throws(() => {
            filter('12345', ({active}) => active);
        }, 'Invalid type of parameter');
    });
});