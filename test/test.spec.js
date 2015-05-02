var test = require('../src/test');

var assert = require('assert');

describe('test', function () {
  it('should assert stuff.', function () {
    assert.ok(test.fn());
  });
});
