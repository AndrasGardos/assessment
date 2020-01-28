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

function convertNumbers(number) {
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
  }
}

module.exports = {
  convertNumbers: convertNumbers
};
