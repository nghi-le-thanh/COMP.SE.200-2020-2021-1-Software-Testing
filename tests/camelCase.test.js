import camelCase from '../src/camelCase.js'
import chai from 'chai'

let assert = chai.assert;

describe('camelCase.js test', () => {
    // expected fail test
    it('Test assigning an object to the method. Expect an empty string', () => {
        assert.strictEqual(camelCase({foo: 'bar'}), '');
    });

    // expected fail test
    it('Test assigning null to the method. Expect an empty string', () => {
        assert.strictEqual(camelCase(null), '');
    });

    // expected fail test
    it('Test assigning undefined to the method. Expect an empty string', () => {
        assert.strictEqual(camelCase(undefined), '');
    });

    // expected fail test:
    it('Test assigning true to the method. Expect boolean in lowercase', () => {
        assert.strictEqual(camelCase(true), 'true');
    });


    it('Test assigning valid string to the method. Expect correctly converted value', () => {
        assert.strictEqual(camelCase('hello world'), 'helloWorld');
    });

    // expected fail test:
    it('Test assigning valid string with special chars to the method. Expect correctly converted value', () => {
        assert.strictEqual(camelCase('___hello-world! assignment^'), 'helloWorldAssignment');
    });
});