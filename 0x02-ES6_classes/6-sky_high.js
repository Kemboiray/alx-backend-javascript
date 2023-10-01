/*
 * This file implements a class `SkyHighBuilding` that extends from `Building`
 * It has the following additional properties:
 * - Constructor: parameter, `floors` (Number), used to set an attribute `_floors`
 * - A getter for each attribute
 * - An override of `evacuationWarningMessage` that returns a string
 */

import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (!(typeof floors === 'number')) {
      throw TypeError('Floors must be a number');
    }
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
