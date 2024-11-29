// Test suite for calculateNumber
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('round and add calculator', () => {
  it('should round numbers and return their sum', () => {
    assert.strictEqual(calculateNumber(1.6, 2.3), 4);
    assert.strictEqual(calculateNumber(2.2, 2.5), 5);
    assert.strictEqual(calculateNumber(3.6, 4.3), 8);
    assert.strictEqual(calculateNumber(0.6, 2.8), 4);
  });
});
