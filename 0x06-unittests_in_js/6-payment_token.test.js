// 6-payment_token.test.js
const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('test the result of getPaymentTokenFromAPI(true)', async () => {
    expected_result = { data: 'Successful response from the API' }
    result = await getPaymentTokenFromAPI(true);
    assert.deepStrictEqual(result, expected_result);
  });
});
