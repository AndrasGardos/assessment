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

function convertNumbers(number) {
  return DIGITS[number];
}

module.exports = {
  convertNumbers: convertNumbers
};
