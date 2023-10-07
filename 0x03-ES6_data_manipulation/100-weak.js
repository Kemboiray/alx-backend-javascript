/*
 * ****************************************************************************
 * This file exports a WeakMap instance, `weakMap` and a function `queryAPI`
 *
 * `weakMap` tracks the number of times `queryAPI` is called with a specific
 * endpoint, and throws a TypeError when the number of calls reaches or exceeds
 * 5.
 *
 * ****************************************************************************
 */
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const before = weakMap.get(endpoint);
    weakMap.set(endpoint, before + 1);
    if (before >= 4) throw TypeError('Endpoint load is high');
  } else {
    weakMap.set(endpoint, 1);
  }
}
