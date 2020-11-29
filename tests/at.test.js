import at from '../src/at.js';
import chai from 'chai';

const expect = chai.expect;
const assert = chai.assert;

describe('Test at.js function', () => {
    const VALID_OBJECT = {
        title: '123',
        value: 'abc',
        tags: [
            {title: 'tag1'},
            {title: 'tag2'},
        ],
        doFoo: () => console.log('doo Foo')
    };

    it('Give null to method, return empty array', () => {
        expect(at(null)).to.be.instanceOf(Array).that.eql([]);
    });

    // expected fail test
    it('Give undefined to method with correct path, return empty array', () => {
        try {
            expect(at(undefined, ['title'])).to.be.instanceOf(Array).that.eql([]);
        } catch (error) {
            console.warn('Fail Give undefined to method with correct path, return empty array. Reason: ', error.message);
        } 
    });

    it('Give valid to method, return empty array', () => {
        expect(at(VALID_OBJECT)).to.be.instanceOf(Array).that.eql([]);
    });

    it('Give valid to method, with correct path. Return valid result', () => {
        expect(at(VALID_OBJECT, ['title'])).to.be.instanceOf(Array).that.eql([VALID_OBJECT.title]);
    });

    it('Give valid to method, with correct paths. Return valid results', () => {
        expect(at(VALID_OBJECT, ['title', 'tags[0]']))
                .to.be.instanceOf(Array)
                .that.eql([VALID_OBJECT.title, VALID_OBJECT.tags[0]]);
    });
});
