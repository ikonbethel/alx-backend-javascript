/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/no-hooks */
// 4-payment.test.js
const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('test sendPaymentRequestToApi', () => {
  let stub;
  let consoleSpy;

  beforeEach(() => {
    // Configure stub and spy
    stub = sinon.stub(Utils, 'calculateNumber');
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore stub and spy
    stub.restore();
    consoleSpy.restore();
  });
  it('should call Utils.calculateNumber and log 10', () => {
    // Configure stub to return 10
    stub.returns(10);

    // Call function being tested
    sendPaymentRequestToApi(100, 20);

    // Verify that Utils.calculateNumber was called with the appropriate values
    assert.strictEqual(stub.calledWith('SUM', 100, 20), true);

    // verify that right output was logged
    assert.strictEqual(consoleSpy.calledWith('The total is: 10'), true);
  });
});
