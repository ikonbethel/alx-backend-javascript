/* eslint-disable no-unused-vars */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
// api.test.js
const request = require('request');
const assert = require('assert');
const { url } = require('inspector');

describe('app', () => {
  it('return correct status code for "/"', () => new Promise((done) => {
    request('http://localhost:7865/', (error, response, _) => {
      if (error) {
        done(error);
      } else {
        assert.strictEqual(response.statusCode, 200);
        done();
      }
    });
  }));

  it('return correct result for "/"', () => new Promise((done) => {
    request('http://localhost:7865/', (error, _, body) => {
      if (error) {
        done(error);
      } else {
        assert.strictEqual(body, 'Welcome to the payment system');
        done();
      }
    });
  }));

  it('return correct result for GET "/available_payments"', () => new Promise((done) => {
    request('http://localhost:7865/available_payments', (error, _, body) => {
      if (error) {
        done(error);
      } else {
        assert.strictEqual(body, '{"payment_methods":{"credit_cards":true,"paypal":false}}');
        done();
      }
    });
  }));

  it('return correct result for POST "/login"', () => new Promise((done) => {
    const options = {
      url: 'http://localhost:7865/login',
      json: true,
      body: {
        userName: 'James',
      },
    };
    request.post(options, (error, _, body) => {
      if (error) {
        done(error);
      } else {
        assert.strictEqual(body, 'Welcome James');
        done();
      }
    });
  }));

  it('return correct status code for unknown route', () => new Promise((done) => {
    request('http://localhost:7865/unknown', (error, response, _) => {
      if (error) {
        done(error);
      } else {
        assert.strictEqual(response.statusCode, 404);
        done();
      }
    });
  }));

  it('return correct status code for non integer param', () => new Promise((done) => {
    request('http://localhost:7865/u', (error, response, _) => {
      if (error) {
        done(error);
      } else {
        assert.strictEqual(response.statusCode, 404);
        done();
      }
    });
  }));

  it('return correct status code for integer param', () => new Promise((done) => {
    request('http://localhost:7865/cart/5', (error, response, body) => {
      if (error) {
        done(error);
      } else {
        assert.strictEqual(body, 'Payment methods for cart 5');
        done();
      }
    });
  }));
});
