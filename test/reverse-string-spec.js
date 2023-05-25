const reverseString = require('../problems/reverse-string.js');
const { expect } = require('chai');
describe ('reverseString', () => {
    it('should reverse string', () => {
        const input = 'fun';
        const expected = 'nuf';
        const result = reverseString(input);
        expect(result).to.equal(expected);
    })

    it('should throw error', () => {
        const input = 123;
        expect(() => reverseString(input).to.throw(TypeError))
    })
})
