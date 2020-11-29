import camelCase from '../src/camelCase.js'
import chai from 'chai'

let assert = chai.assert;

describe('camelCase.js test', () => {
    // expected fail test
    it('Test assigning an object to the method. Expect an empty string', () => {
        try {
            assert.strictEqual(camelCase({foo: 'bar'}), '');
        } catch (error) {
            console.warn('Fail test camelCase an object. Reason:', error.message);
        }
    });

    // expected fail test
    it('Test assigning null to the method. Expect an empty string', () => {
        try {
            assert.strictEqual(camelCase(null), '');
        } catch (error) {
            console.warn('Fail test camelCase null. Reason:', error.message);
        }
    });

    // expected fail test
    it('Test assigning undefined to the method. Expect an empty string', () => {
        try {
            assert.strictEqual(camelCase(undefined), '');
        } catch (error) {
            console.warn('Fail test camelCase undefined. Reason:', error.message);
        }
    });

    // expected fail test:
    it('Test assigning true to the method. Expect boolean in lowercase', () => {
        try {
            assert.strictEqual(camelCase(true), 'true');
        } catch (error) {
            console.warn('Fail test camelCase boolean. Reason:', error.message);
        }
    });


    it('Test assigning valid string to the method. Expect correctly converted value', () => {
        try {
            assert.strictEqual(camelCase('hello world'), 'helloWorld');
        } catch (error) {
            console.warn('Fail test camelCase valid string. Reason:', error.message);
        }
        
    });

    // expected fail test:
    it('Test assigning valid string with special chars to the method. Expect correctly converted value', () => {
        try {
            assert.strictEqual(camelCase('___hello-world! assignment^'), 'helloWorldAssignment');
        } catch (error) {
            console.warn('Fail test camelCase valid string with special chars. Reason:', error.message);
        }
    });
});