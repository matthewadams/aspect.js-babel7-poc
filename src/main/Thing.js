const { Wove: Advised } = require('aspect.js')
require('./aspects/Aspect')

@Advised()
class Thing {
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
