// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add } from '../calculation.js';
import { subtract } from '../calculation.js';
import { multiply } from '../calculation.js';
import { divide } from '../calculation.js';
import { calculate } from '..calculation.jss';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 4;
    const y = 4;
    const expected = 8;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = add(x, y);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, expected);
});

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 4;
    const y = 4;
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = subtract(x, y);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, expected);
});

test('time to test a function', (expect) => {
    const x = 4;
    const y = 4;
    const expected = 16;
    const result = multiply(x, y);
    expect.equal(result, expected);
});

test('time to test a function', (expect) => {
    const x = 4;
    const y = 4;
    const expected = 1;
    const result = divide(x, y);
    expect.equal(result, expected);
});

test('time to test a function', (expect) => {
    const x = 4;
    const y = 4;
    const operator = 'add';
    const expected = 8;
    const result = calculate(x, y, operator);
    expect.equal(result, expected);
});