// This file defines `calculateNumber`, a function that does arithmetic operations
// on numbers and returns the result.

const r = Math.round;

const math = {
  SUM: (a, b) => r(a) + r(b),
  SUBTRACT: (a, b) => r(a) - r(b),
  DIVIDE: (a, b) => r(b) === 0 ? 'Error' : r(a) / r(b),
};

const calculateNumber = (type, a, b) => math[type](a, b);

module.exports = calculateNumber;
