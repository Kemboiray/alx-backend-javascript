// This module defines tests for the `calculateNumber` function, defined in`1-calcul.js`:

const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('should return 6 when adding 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  });
  it('should return 0 when adding 0.1 and 0.3', () => {
    assert.strictEqual(calculateNumber('SUM', 0.1, 0.3), 0);
  });
  it('should return -4 when adding -1 and -3', () => {
    assert.strictEqual(calculateNumber('SUM', -1, -3), -4);
  });
  it('should return -5 when adding -1 and -3.7', () => {
    assert.strictEqual(calculateNumber('SUM', -1, -3.7), -5);
  });
  it('should return 6 when subtracting 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), 6);
  });
  it('should return 0 when subtracting 0.1 and 0.3', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 0.1, 0.3), 0);
  });
  it('should return -4 when subtracting -1 and -3', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -1, -3), -4);
  });
  it('should return -5 when subtracting -1 and -3.7', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -1, -3.7), -5);
  });
})
