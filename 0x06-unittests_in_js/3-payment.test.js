/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
// 3-payment.test.js
const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber', () => {
    const main = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    assert.strictEqual(main.calculateNumber.calledWith('SUM', 100, 20), true);
    assert.strictEqual(main.calculateNumber.callCount, 1);
    main.calculateNumber.restore();
  });
});
