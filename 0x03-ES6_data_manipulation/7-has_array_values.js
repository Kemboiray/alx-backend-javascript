/**
 * This file exports a function `hasValuesFromArray` that returns a boolean
 * if all the elements in an array exist within a given set
 */

export default function hasValuesFromArray(set, array) {
  for (const item of array) {
    if (!set.has(item)) return false;
  }
  return true;
}
