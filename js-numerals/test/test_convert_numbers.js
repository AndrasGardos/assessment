const chai = require("chai");
const assert = require("chai").assert;
const convertNumber = require("../src/convert_numbers.js").convertNumber;

describe("Test convertNumber function", function() {
  describe("Test for single digit numbers", function() {
    it("should convert single digits", function() {
      assert.equal(convertNumber(4), "four");
      assert.equal(convertNumber(9), "nine");
    });
  });

  describe("Test for double digit numbers", function() {
    it("should convert 10", function() {
      assert.equal(convertNumber(10), "ten");
    });
    it("should convert 12", function() {
      assert.equal(convertNumber(12), "twelve");
    });
    it("should convert 17", function() {
      assert.equal(convertNumber(17), "seventeen");
    });
    it("should convert 42", function() {
      assert.equal(convertNumber(42), "fourty-two");
    });
    it("should convert 50", function() {
      assert.equal(convertNumber(50), "fifty");
    });
  });

  describe("Test for three digit numbers", function() {
    it("should convert 100", function() {
      assert.equal(convertNumber(100), "one hundred");
    });
    it("should convert 200", function() {
      assert.equal(convertNumber(200), "two hundred");
    });
    it("should convert 123", function() {
      assert.equal(convertNumber(123), "one hundred and twenty-three");
    });
    it("should convert 345", function() {
      assert.equal(convertNumber(345), "three hundred and fourty-five");
    });
    it("should convert 404", function() {
      assert.equal(convertNumber(404), "four hundred and four");
    });
  });

  describe("Test for 4 to 6 digit numbers", function() {
    it("should convert 2000", function() {
      assert.equal(convertNumber(2000), "two thousand");
    });
    it("should convert 2020", function() {
      assert.equal(convertNumber(2020), "two thousand and twenty");
    });
    it("should convert 3456", function() {
      assert.equal(
        convertNumber(3456),
        "three thousand four hundred and fifty-six"
      );
    });
    it("should convert 10 000", function() {
      assert.equal(convertNumber(10000), "ten thousand");
    });
    it("should convert 654321", function() {
      assert.equal(
        convertNumber(654321),
        "six hundred and fifty-four thousand three hundred and twenty-one"
      );
    });
  });
});
