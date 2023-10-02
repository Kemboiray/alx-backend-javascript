/*
 * This is an implementation of a class `Car` with the properties:
 * - Constructor: parameters `brand` (String), `motor` (String), `color` (String).
 *   The parameters initialise instance attributes of the same name but with a leading underscore.
 * - Getters for each instance attribute.
 * - A method `cloneCar` that returns a new object of the class.
 */

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    return new this.constructor();
  }
}
