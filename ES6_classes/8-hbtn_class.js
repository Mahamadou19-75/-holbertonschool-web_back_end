export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  // Cast to number → return size
  valueOf() {
    return this._size;
  }

  // Cast to string → return location
  toString() {
    return this._location;
  }
}
