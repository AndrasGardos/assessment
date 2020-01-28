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

const NUMBER_GROUP_NAMES = [
  "thousand",
  "million",
  "billion",
  "trillion",
  "quadrillion"
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
  } else {
    return convertBigNumber(number);
  }
}

function convertBigNumber(number) {
  const biggestNumberGroupLog = Math.floor(Math.log10(number) / 3) * 3;
  const biggestNumberGroup = Math.pow(10, biggestNumberGroupLog);
  const biggestNumberGroupName =
    NUMBER_GROUP_NAMES[biggestNumberGroupLog / 3 - 1];
  const countOfBiggestNumberGroup = Math.floor(number / biggestNumberGroup);
  const remainder = number % biggestNumberGroup;

  if (remainder == 0) {
    // we are done
    return (
      convertNumber(countOfBiggestNumberGroup) + " " + biggestNumberGroupName
    );
  } else if (remainder < 100) {
    // we need to add "and", because there is no hundreds
    return (
      convertNumber(countOfBiggestNumberGroup) +
      " " +
      biggestNumberGroupName +
      " and " +
      convertNumber(remainder)
    );
  } else {
    // the remainder is bigger than 100, call convertNumber on it
    return (
      convertNumber(countOfBiggestNumberGroup) +
      " " +
      biggestNumberGroupName +
      " " +
      convertNumber(remainder)
    );
  }
}

try {
  module.exports = {
    convertNumber: convertNumber
  };
} catch (e) {}
