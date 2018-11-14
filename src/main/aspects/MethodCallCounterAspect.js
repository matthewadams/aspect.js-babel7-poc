'use strict'

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
const Counts = require('../Counts')
const counts = new Counts()

class MethodCallCounterAspect {
  @beforeStaticMethod({ classNamePattern: /.*/, methodNamePattern: /^staticMethod$/ })
  beforeStaticMethod (meta) {
    // console.log('Aspect beforeStaticMethod', json(meta))
    counts.increment(meta.method.name)
  }

  @afterStaticMethod({ classNamePattern: /.*/, methodNamePattern: /^staticMethod$/ })
  afterStaticMethod (meta) {
    // console.log('Aspect afterStaticMethod', json(meta))
  }

  @beforeMethod({ classNamePattern: /.*/, methodNamePattern: /.*/ })
  beforeMethod (meta) {
    // console.log('Aspect beforeMethod', json(meta))
    counts.increment(meta.method.name)
  }

  @afterMethod({ classNamePattern: /.*/, methodNamePattern: /.*/ })
  afterMethod (meta) {
    // console.log('Aspect afterMethod', json(meta))
  }

  @beforeGetter({ classNamePattern: /.*/, fieldNamePattern: /.*/ })
  beforeGetter (meta) {
    // console.log('Aspect beforeGetter', json(meta))
    counts.increment(meta.method.name, 'get')
  }

  @afterGetter({ classNamePattern: /.*/, fieldNamePattern: /.*/ })
  afterGetter (meta) {
    // console.log('Aspect afterGetter', json(meta))
  }

  @beforeSetter({ classNamePattern: /.*/, fieldNamePattern: /.*/ })
  beforeSetter (meta) {
    // console.log('Aspect beforeSetter', json(meta))
    counts.increment(meta.method.name, 'set')
  }
  @afterSetter({ classNamePattern: /.*/, fieldNamePattern: /.*/ })
  afterSetter (meta) {
    // console.log('Aspect afterSetter', json(meta))
  }

  // these last two methods demonstrate how you can intercept constructor invocations; requires static 'new' method on your classes
  @beforeStaticMethod({ classNamePattern: /.*/, methodNamePattern: /^new$/ })
  beforeNew (meta) {
    // console.log('Aspect beforeNew', json(meta))
    counts.increment(meta.method.name)
  }

  @afterStaticMethod({ classNamePattern: /.*/, methodNamePattern: /^new$/ })
  afterNew (meta) {
    // console.log('Aspect afterNew', json(meta))
  }
}

MethodCallCounterAspect.counts = counts

module.exports = MethodCallCounterAspect
