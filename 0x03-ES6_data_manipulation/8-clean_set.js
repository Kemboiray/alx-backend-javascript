/**
 * `cleanSet` returns a string of all set values that start with a specified substring.
 * The return value is a '-' separated list of matches
 */
export default function cleanSet(set, startString) {
  const matches = Array.from(set).filter((item) => item.startsWith(startString));
  return matches.map((item) => item.slice(startString.length)).join('-');
}
