/* global describe, it, beforeEach */

'use strict'

const chai = require('chai')
chai.use(require('dirty-chai'))
const expect = chai.expect

const Thing = require('../../main/Thing')
const MethodCallCounterAspect = require('../../main/aspects/MethodCallCounterAspect')

describe('Thing', () => {
  const counts = MethodCallCounterAspect.counts

  beforeEach(() => {
    MethodCallCounterAspect.counts.reset()
  })

  it('should be advised', () => {
    Thing.staticMethod()
    expect(counts.get('staticMethod')).to.equal(1)

    Thing.staticMethod()
    expect(counts.get('staticMethod')).to.equal(2)

    const it = Thing.new('hey', 1) // use static 'new' method instead of constructor to get before/after constructor advice
    expect(counts.get('new')).to.equal(1)
    expect(counts.get('s', 'set')).to.equal(1)
    expect(counts.get('t', 'set')).to.equal(1)

    it.method()
    expect(counts.get('method')).to.equal(1)

    it.method()
    expect(counts.get('method')).to.equal(2)

    it.s = '1'
    expect(counts.get('s', 'set')).to.equal(2)

    it.t = parseInt(it.s)
    expect(counts.get('s', 'get')).to.equal(1)
    expect(counts.get('t', 'set')).to.equal(2)

    it.s = it.t.toString()
    expect(counts.get('s', 'set')).to.equal(3)
    expect(counts.get('t', 'get')).to.equal(1)
  })
})
