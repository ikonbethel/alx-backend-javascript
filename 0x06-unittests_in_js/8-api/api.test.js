/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
// api.test.js
const request = require('request');
const assert = require('assert');

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

  it('return correct result', () => new Promise((done) => {
    request('http://localhost:7865/', (error, _, body) => {
      if (error) {
        done(error);
      } else {
        assert.strictEqual(body, 'Welcome to the payment system');
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
});
