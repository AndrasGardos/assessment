const chai = require("chai");
const assert = require("chai").assert;
const convertNumbers = require("../src/convert_numbers.js").convertNumbers;

describe("Test convertNumbers function", function() {
  describe("Test for single digit numbers", function() {
    it("should convert single digits", function() {
      assert.equal(convertNumbers(4), "four");
      assert.equal(convertNumbers(9), "nine");
    });
  });

  describe("Test for double digit numbers", function() {
    it("should convert 10", function() {
      assert.equal(convertNumbers(10), "ten");
    });
    it("should convert 12", function() {
      assert.equal(convertNumbers(12), "twelve");
    });
    it("should convert 17", function() {
      assert.equal(convertNumbers(17), "seventeen");
    });
    it("should convert 42", function() {
      assert.equal(convertNumbers(42), "fourty-two");
    });
    it("should convert 50", function() {
      assert.equal(convertNumbers(50), "fifty");
    });
  });

  describe("Test for three digit numbers", function() {
    it("should convert 100", function() {
      assert.equal(convertNumbers(100), "one hundred");
    });
    it("should convert 200", function() {
      assert.equal(convertNumbers(200), "two hundred");
    });
    it("should convert 123", function() {
      assert.equal(convertNumbers(123), "one hundred and twenty-three");
    });
    it("should convert 345", function() {
      assert.equal(convertNumbers(345), "three hundred and fourty-five");
    });
    it("should convert 404", function() {
      assert.equal(convertNumbers(404), "four hundred and four");
    });
  });
});
