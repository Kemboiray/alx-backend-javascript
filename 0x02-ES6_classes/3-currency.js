// This file imolememmts a class `Currency` that models a currency.
// A currency has a name and a code.
// The class has a method `displayFullCurrency` that returns
// a string with the name and the code of the currency.

export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
