const DIGITS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];

const TEN_TO_NINETEEN = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen"
];

const MULTIPLES_OF_TEN = [
  "",
  "ten",
  "twenty",
  "thirty",
  "fourty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety"
];

function convertNumber(number) {
  if (number >= 0 && number <= 9) {
    return DIGITS[number];
  } else if (number >= 10 && number <= 19) {
    return TEN_TO_NINETEEN[number - 10];
  } else if (number >= 20 && number <= 99) {
    if (number % 10 == 0) {
      return MULTIPLES_OF_TEN[number / 10];
    } else {
      return (
        MULTIPLES_OF_TEN[Math.floor(number / 10)] + "-" + DIGITS[number % 10]
      );
    }
  } else if (number >= 100 && number <= 999) {
    let hundreds = Math.floor(number / 100);
    let remainder = number % 100;
    if (number % 100 == 0) {
      return DIGITS[hundreds] + " hundred";
    } else {
      return convertNumber(hundreds * 100) + " and " + convertNumber(remainder);
    }
  } else if (number >= 1000 && number <= 999999) {
    let thousands = Math.floor(number / 1000);
    let remainder = number % 1000;

    if (remainder == 0) {
      return convertNumber(thousands) + " thousand";
    } else if (remainder < 100) {
      return (
        convertNumber(thousands) + " thousand and " + convertNumber(remainder)
      );
    } else {
      return convertNumber(thousands) + " thousand " + convertNumber(remainder);
    }
  } else if (number >= 1000000 && number <= 999999999) {
    let millions = Math.floor(number / 1000000);
    let remainder = number % 1000000;

    if (remainder == 0) {
      return convertNumber(millions) + " million";
    } else if (remainder < 100) {
      return (
        convertNumber(millions) + " million and " + convertNumber(remainder)
      );
    } else {
      return convertNumber(millions) + " million " + convertNumber(remainder);
    }
  } else if (number >= 1000000000 && number <= 999999999999) {
    let billions = Math.floor(number / 1000000000);
    let remainder = number % 1000000000;

    if (remainder == 0) {
      return convertNumber(billions) + " billion";
    } else if (remainder < 100) {
      return (
        convertNumber(billions) + " billion and " + convertNumber(remainder)
      );
    } else {
      return convertNumber(billions) + " billion " + convertNumber(remainder);
    }
  }
}

try {
  module.exports = {
    convertNumber: convertNumber
  };
} catch (e) {}
