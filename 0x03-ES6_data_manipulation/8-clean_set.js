/*
*******************************************************************************

`cleanSet` returns a string of all set values that start with a specified
substring.

The return value is a '-' separated list of matches with the prefix removed

*******************************************************************************
*/

function typeCheck(set, startString) {
  if (!(set instanceof Set)) throw TypeError('set must be an instance of Set');
  if (!Array.from(set).every((item) => typeof item === 'string')) {
    throw TypeError('Every member of set must be a string');
  }
  if (typeof startString !== 'string') throw TypeError('startString must be a string');
}

export default function cleanSet(set = new Set(), startString = '') {
  typeCheck(set, startString);
  if (startString) {
    const matches = Array.from(set).filter((item) => item.startsWith(startString));
    return matches.map((item) => item.slice(startString.length)).join('-');
  }
  return '';
}
