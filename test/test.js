const assert = require('assert')
const plusMinus = require('../day1/plusMinus')

describe("plusMinus", function() {
  describe("function()", function() {
    it("test1", function() {
      assert.equal(plusMinus([1, 1, 2, 0, -2, 5, 100, 2, -5, -5, -2, 0, 0, 5, -10]), '0.466667, 0.333333, 0.200000');
    });
    it("test2", function() {
      assert.equal(plusMinus([1, 2, 0, -5, -2]), '0.400000, 0.400000, 0.200000');
    })
  });
})