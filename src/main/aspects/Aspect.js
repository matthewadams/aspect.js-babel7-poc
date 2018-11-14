const {
  beforeStaticMethod,
  beforeMethod,
  afterStaticMethod,
  afterMethod,
  beforeGetter,
  beforeSetter,
  afterGetter,
  afterSetter
} = require('aspect.js')

// const json = require('../json')
const counts = require('../Counts')

class MethodCallCounterAspect {
  constructor () {
    this._counts = counts
  }

  @beforeStaticMethod({ classNamePattern: /.*/, methodNamePattern: /^new$/ })
  beforeNew (meta) {
    // console.log('Aspect beforeNew', json(meta))
    this._counts.increment(meta.method.name)
  }

  @afterStaticMethod({ classNamePattern: /.*/, methodNamePattern: /^new$/ })
  afterNew (meta) {
    // console.log('Aspect afterNew', json(meta))
  }

  @beforeStaticMethod({ classNamePattern: /.*/, methodNamePattern: /^staticMethod$/ })
  beforeStaticMethod (meta) {
    // console.log('Aspect beforeStaticMethod', json(meta))
    this._counts.increment(meta.method.name)
  }

  @afterStaticMethod({ classNamePattern: /.*/, methodNamePattern: /^staticMethod$/ })
  afterStaticMethod (meta) {
    // console.log('Aspect afterStaticMethod', json(meta))
  }

  @beforeMethod({ classNamePattern: /.*/, methodNamePattern: /.*/ })
  beforeMethod (meta) {
    // console.log('Aspect beforeMethod', json(meta))
    this._counts.increment(meta.method.name)
  }

  @afterMethod({ classNamePattern: /.*/, methodNamePattern: /.*/ })
  afterMethod (meta) {
    // console.log('Aspect afterMethod', json(meta))
  }

  @beforeGetter({ classNamePattern: /.*/, fieldNamePattern: /.*/ })
  beforeGetter (meta) {
    // console.log('Aspect beforeGetter', json(meta))
    this._counts.increment(meta.method.name, 'get')
  }

  @afterGetter({ classNamePattern: /.*/, fieldNamePattern: /.*/ })
  afterGetter (meta) {
    // console.log('Aspect afterGetter', json(meta))
  }

  @beforeSetter({ classNamePattern: /.*/, fieldNamePattern: /.*/ })
  beforeSetter (meta) {
    // console.log('Aspect beforeSetter', json(meta))
    this._counts.increment(meta.method.name, 'set')
  }
  @afterSetter({ classNamePattern: /.*/, fieldNamePattern: /.*/ })
  afterSetter (meta) {
    // console.log('Aspect afterSetter', json(meta))
  }
}

module.exports = MethodCallCounterAspect
