/*
 * ****************************************************************************
 *
 * `updateUniqueItems` updates Map values whose quantity is 1 to 100.
 *
 * It has one parameter, `map` that accepts instances of `Map`. An error,
 * `Cannot process` is thrown if this condition is violated.
 *
 * ****************************************************************************
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw Error('Cannot process');
  }
  map.forEach((v, k) => { if (v === 1) map.set(k, 100); });
  return map;
}
