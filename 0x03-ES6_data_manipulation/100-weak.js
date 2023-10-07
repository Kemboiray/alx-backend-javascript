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
