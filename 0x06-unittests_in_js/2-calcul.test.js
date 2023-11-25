// This des the same tests as 1-calcul.test.js but with `expect` (from chai) instead of `assert`.
// The `expect` syntax is more readable and more expressive than `assert`

const expect = require('chai').expect;
const calculateNumber = require('./2-calcul');

describe('calculateNumber', () => {
  it('returns rounded sum with SUM_METHOD', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUM', 1.4, 4.4)).to.equal(5);
    expect(calculateNumber('SUM', 1.4, 4.3)).to.equal(5);
    expect(calculateNumber('SUM', 1.4, 4.2)).to.equal(5);
    expect(calculateNumber('SUM', 1.4, 4.1)).to.equal(5);
    expect(calculateNumber('SUM', 1.4, 4.0)).to.equal(5);
    expect(calculateNumber('SUM', 1.4, 3.9)).to.equal(5);
    expect(calculateNumber('SUM', 1.4, 3.8)).to.equal(5);
    expect(calculateNumber('SUM', 1.4, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.4, 3.6)).to.equal(5);
    expect(calculateNumber('SUM', 1.4, 3.5)).to.equal(5);
    expect(calculateNumber('SUM', 1.4, 3.4)).to.equal(4);
    }
  );});
