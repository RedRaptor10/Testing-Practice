const tests = require('./tests');

test('Capitalizes first character in a string.', () => {
    expect(tests.capitalize('test')).toBe('Test');
});

test('Capitalizes first character in a string.', () => {
    expect(tests.reverseString('test')).toBe('tset');
});

test('Performs basic operations between two numbers.', () => {
    expect(tests.calculator.add(12,4)).toBe(16);
    expect(tests.calculator.subtract(12,4)).toBe(8);
    expect(tests.calculator.multiply(12,4)).toBe(48);
    expect(tests.calculator.divide(12,4)).toBe(3);
})

test('Uses the Caesar Cipher method to encipher or decipher text.', () => {
    expect(tests.caesar('Test', 1)).toBe('Uftu');
    expect(tests.caesar('Test', 100)).toBe('Paop');
    expect(tests.caesar('Test', -10)).toBe('Juij');
    expect(tests.caesar('Test!', 1)).toBe('Uftu!');
});

test('Analyzes an array of numbers and returns an object with the ' +
    'average, min, max, and length.', () => {
    expect(tests.analyze([1,8,3,4,2,6])).toEqual(
        {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        }
    );
});