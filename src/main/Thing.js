'use strict'

// NOTE: "Advised" is better than "Wove" -- see https://github.com/mgechev/aspect.js/issues/67
const { Wove: Advised } = require('aspect.js')

// now simply require the aspects that you want to advise with -- advices get called in reverse order of require'ing
require('./aspects/MethodCallCounterAspect')

@Advised()
class Thing {
  // demonstrates how you'd intercept constructor invocations by providing a static 'new' method
  static new (s = '', t = 0) {
    return new Thing(...arguments)
  }

  static staticMethod () {
    return 'staticMethod'
  }

  _s = ''
  _t = 0

  constructor (s = '', t = 0) {
    this.s = s
    this.t = t
  }

  method () {
    return 'method'
  }

  get s () { return this._s }

  set s (value) { this._s = value }

  get t () { return this._t }

  set t (value) { this._t = value }
}

module.exports = Thing
