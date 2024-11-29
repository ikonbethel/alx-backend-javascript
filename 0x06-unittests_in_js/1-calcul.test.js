/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
// Test suite for calculateNumber
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('round and add calculator', () => {
  it('should round numbers and return their sum', () => {
    assert.strictEqual(calculateNumber('SUM', 1.6, 2.3), 4);
    assert.strictEqual(calculateNumber('SUM', 2.2, 2.5), 5);
  });
  it('should round numbers and return their difference', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 4.1), 0);
    assert.strictEqual(calculateNumber('SUBTRACT', 0.7, 2.1), -1);
  });
  it('should round numbers and return their quotient', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 3.7, 1.2), 4);
  });
  it('should return error if rounded b is less than 1', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 2.2, 0.1), 'Error');
  });
  it('should return error if no or invalid type is passed', () => {
    assert.strictEqual(calculateNumber('', 2.2, 0.1), 'Missing or invalid operator');
    assert.strictEqual(calculateNumber('INVALID', 2.2, 0.1), 'Missing or invalid operator');
  });
});
