/*
 * This file implements a class `HolbertonClass` with the properties:
 * - Constructor: parameters `size` (Number) and `location` (String) used to
 *   initialize attributes with the same names but with a leading underscore.
 * - Getters for each attribute.
 * - When cast to Sting,location is returned.
 * - When cast to Number, size is returned.
 */

export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getter
  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // Cast to toString
  toString() {
    return this._location;
  }

  // Cast to toNumbe
  valueOf() {
    return this._size;
  }
}
