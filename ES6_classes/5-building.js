export default class Building {
  constructor(sqft) {
    // Vérification du type
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }

    this._sqft = sqft;

    // Vérification que la classe dérivée implémente evacuationWarningMessage
    if (this.constructor !== Building) {
      if (this.evacuationWarningMessage === undefined ||
          typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  // Getter
  get sqft() {
    return this._sqft;
  }
}
