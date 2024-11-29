/* eslint-disable jest/prefer-expect-assertions */
// Test suite for calculateNumber
// eslint-disable-next-line import/no-extraneous-dependencies
const { expect } = require('chai');

const calculateNumber = require('./2-calcul_chai');

describe('round and add calculator', () => {
  it('should round numbers and return their sum', () => {
    expect(calculateNumber('SUM', 1.6, 2.3)).to.equal(4);
    expect(calculateNumber('SUM', 2.2, 2.5)).to.equal(5);
  });
  it('should round numbers and return their difference', () => {
    expect(calculateNumber('SUBTRACT', 3.7, 4.1)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 0.7, 2.1)).to.equal(-1);
  });
  it('should round numbers and return their quotient', () => {
    expect(calculateNumber('DIVIDE', 3.7, 1.2)).to.equal(4);
  });
  it('should return error if rounded b is less than 1', () => {
    expect(calculateNumber('DIVIDE', 2.2, 0.1)).to.equal('Error');
  });
  it('should return error if no or invalid type is passed', () => {
    expect(calculateNumber('', 2.2, 0.1)).to.equal('Missing or invalid operator');
    expect(calculateNumber('INVALID', 2.2, 0.1)).to.equal('Missing or invalid operator');
  });
});
