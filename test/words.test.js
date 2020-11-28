import words from '../src/words.js';
import chai from 'chai';

let expect = chai.expect;

describe('Test word.js function', () => {

    it('Give null to method, method is failed because match method of String is missing', () => {
        expect(() => {
            words(null, null);
        }).to.throw(TypeError);
    });

    it('Give undefined to method, method is failed because match method of String is missing', () => {
        expect(() => {
            words(undefined, null);
        }).to.throw(TypeError);
    });

    it('Give empty string without pattern, return empty array', () => {
        expect(words('')).to.be.instanceOf(Array).that.eql([]);
    });

    it('Give sample valid string, return array with splitted words and remove all special chars', () => {
        expect(words('abc.a abc abb')).to.be.instanceOf(Array).that.eql(['abc', 'a', 'abc', 'abb']);
        expect(words('abc.a a,bc ab|b')).to.be.instanceOf(Array).that.eql(['abc', 'a', 'a', 'bc', 'ab', 'b']);
    });

    it('Give sample valid string, return array with splitted words match patterns', () => {
        const SPLIT_WORDS_BY_SPACE_AND_COMMA = /[^, ]+/g;
        expect(words('abc.a ab,c abb', SPLIT_WORDS_BY_SPACE_AND_COMMA))
                .to.be.instanceOf(Array)
                .that.eql(['abc.a', 'ab', 'c', 'abb']);
    });
});