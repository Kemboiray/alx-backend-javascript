/**
 * This implements a class, `EVCar` that extends from `Car`
 * - `EVCar` has an additional attribute, `range` (String).
 * - When `cloneCar` is called on an `EVCar` object, it returns an instance
 *   of `Car`, and not `EVCar`, for privacy reasons.
 */

import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  // eslint-disable-next-line class-methods-use-this
  cloneCar() {
    return new Car();
  }
}
