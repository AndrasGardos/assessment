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
});
