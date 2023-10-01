/*
 * This file defines a class `Airport` with the following properties:
 * - Constructor: Parameters `name` (String) and `code` (String) used to
 *   initialise attributes of the same names but with a leading underscore.
 * - Method `toString` that returns the airport code i.e [object CODE].
 */

export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
