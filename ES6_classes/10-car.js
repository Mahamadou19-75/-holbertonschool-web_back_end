const classType = Symbol('classType');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    // stocke la classe réelle (Car ou classe enfant)
    this[classType] = this.constructor;
  }

  cloneCar() {
    return new this[classType]();
  }
}
