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
    it("should convert 0", function() {
      assert.equal(convertNumber(0), "zero");
    });
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
    it("should convert 654 321", function() {
      assert.equal(
        convertNumber(654321),
        "six hundred and fifty-four thousand three hundred and twenty-one"
      );
    });
  });

  describe("Test for 7 to 9 digit numbers", function() {
    it("should convert 2 000 000", function() {
      assert.equal(convertNumber(2000000), "two million");
    });
    it("should convert 3 000 001", function() {
      assert.equal(convertNumber(3000001), "three million and one");
    });
    it("should convert 123 456 789", function() {
      assert.equal(
        convertNumber(123456789),
        "one hundred and twenty-three million four hundred and fifty-six thousand seven hundred and eighty-nine"
      );
    });
  });

  describe("Test for 10 to 12 digit numbers", function() {
    it("should convert 2 000 000 000", function() {
      assert.equal(convertNumber(2000000000), "two billion");
    });
    it("should convert 3 000 001", function() {
      assert.equal(convertNumber(3000000001), "three billion and one");
    });
    it("should convert 987 123 456 789", function() {
      assert.equal(
        convertNumber(987123456789),
        "nine hundred and eighty-seven billion one hundred and twenty-three million four hundred and fifty-six thousand seven hundred and eighty-nine"
      );
    });
  });

  describe("Test for 12 to 15 digit numbers", function() {
    it("should convert 2 000 000 000 000", function() {
      assert.equal(convertNumber(2000000000), "two billion");
    });

    it("should convert 3 141 592 653 589 793", function() {
      assert.equal(
        convertNumber(3141592653589793),
        "three quadrillion one hundred and fourty-one " +
          "trillion five hundred and ninety-two billion " +
          "six hundred and fifty-three million five hundred " +
          "and eighty-nine thousand seven hundred and ninety-three"
      );
    });
  });

  describe("Test for negative numbers", function() {
    it("should convert - 123 456 789", function() {
      assert.equal(
        convertNumber(-123456789),
        "minus one hundred and twenty-three million four hundred and fifty-six thousand seven hundred and eighty-nine"
      );
    });
    it("should convert -404", function() {
      assert.equal(convertNumber(-404), "minus four hundred and four");
    });
  });

  describe("Test error checking", function() {
    it("should throw error if number is a string", function() {
      assert.throw(_ => convertNumber("not a number!"));
    });

    it("should throw error if argument is empty", function() {
      assert.throw(_ => convertNumber());
    });

    it("should throw error if argument is not a safe integer", function() {
      assert.throw(_ => convertNumber(9123137219873982173819273));
    });
  });
});
