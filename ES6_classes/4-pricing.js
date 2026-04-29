import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    // Vérifications
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be a Currency');
    }

    this._amount = amount;
    this._currency = currency;
  }

  // GETTERS
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // SETTERS
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be a Currency');
    }
    this._currency = value;
  }

  // Méthode instance
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Méthode statique
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion rate must be a number');
    }
    return amount * conversionRate;
  }
}
