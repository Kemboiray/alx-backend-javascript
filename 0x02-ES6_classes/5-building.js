/*
 * This file implements a class `Building` with the following properties:
 * - Constructor: Accepts an argument, `sqft` (Number) used to initialise
 *   an instance attribute `_sqft`.
 * - Classes that extend from `Building` must implement a method `evacuationWarningMessage`,
 *   otherwise, an error is thrown.
 */

export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}
