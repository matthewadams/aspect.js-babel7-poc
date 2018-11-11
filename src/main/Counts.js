'use strict'

class Counts {
  _counts = {}

  increment (name, propertyAccess) {
    if (propertyAccess === 'set') {
      this._counts[name] = this._counts[name] || {}
      this._counts[name].set = this._counts[name].set || 0
      this._counts[name].set++
    } else if (propertyAccess === 'get') {
      this._counts[name] = this._counts[name] || {}
      this._counts[name].get = this._counts[name].get || 0
      this._counts[name].get++
    } else {
      this._counts[name] = this._counts[name] || 0
      this._counts[name]++
    }
  }

  get (name, propertyAccess) {
    if (!propertyAccess) return this._counts[name] || 0
    else return (this._counts[name] && this._counts[name][propertyAccess]) || 0
  }

  reset () {
    this._counts = {}
  }
}

module.exports = new Counts()
