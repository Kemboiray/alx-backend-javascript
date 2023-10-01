/*
  This file implements a class, `Pricing`, which models
  the pricing of items. It has the following properties:
  - Constructor: parameters `amount` (Number) and `currency`
    (Currency) stored in properties of the same name with a leading
    underscore.
  - A getter and setter for each property.
  - A method `displayFullPrice` that returns attributes in
    the format `amount currency_name (currency_code)`.
  - A static method `convertPrice` that accepts two arguments,
    `amount` (Number), `conversionRate` (Number) and returns
    the converted price (Number).
*/

import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    const amountIsNumber = typeof amount === 'number';
    const currencyIsCurrency = currency instanceof Currency;
    if (amountIsNumber && currencyIsCurrency) {
      this._amount = amount;
      this._currency = currency;
    } else if (!amountIsNumber) {
      throw new TypeError('amount must be a number');
    } else if (!currencyIsCurrency) {
      throw new TypeError('currency must be an instance of Currency');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('amount must be a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('currency must be an instance of Currency');
    }
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    let conversion;
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      conversion = amount * conversionRate;
    } else if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    } else if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return conversion;
  }
}
