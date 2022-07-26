const assert = require('assert')
const plusMinus = require('../day1/plusMinus')
const miniMaxSum = require('../day1/miniMaxSum')
const truckTour = require('../extras/truckTour')

describe("Plus Minus", function() {
  describe("plusMinus()", function() {
    it("#test1", function() {
      assert.equal(plusMinus([1, 1, 2, 0, -2, 5, 100, 2, -5, -5, -2, 0, 0, 5, -10]), '0.466667, 0.333333, 0.200000');
    });
    it("#test2", function() {
      assert.equal(plusMinus([1, 2, 0, -5, -2]), '0.400000, 0.400000, 0.200000');
    })
  });
})

describe("Mini-Max Sum", function() {
  describe("miniMax()", function() {
    it("#test1", () => {
      assert.equal(miniMaxSum([1, 3, 5, 7, 9]), '16 24');
    });
    it("#test2", () => {
      assert.equal(miniMaxSum([1, 2, 3, 4, 5]), '10 14');
    });
  })
})

describe("Truck Tour", () => {
  describe("truckTour()", () => {
    it("#test1", () => {
      assert.equal(truckTour([[1, 5], [10, 3], [3, 4]]), 1)
    })
  })
})