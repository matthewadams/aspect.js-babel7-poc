/* global describe, it, beforeEach */

'use strict'

const chai = require('chai')
chai.use(require('dirty-chai'))
const expect = chai.expect

const Thing = require('../../main/Thing')
const counts = require('../../main/Counts')

describe('Thing', () => {
  beforeEach(() => {
    counts.reset()
  })

  it('should be advised', () => {
    Thing.staticMethod()
    expect(counts.get('staticMethod')).to.equal(1)

    Thing.staticMethod()
    expect(counts.get('staticMethod')).to.equal(2)

    const it = Thing.new('hey', 1)
    expect(counts.get('new')).to.equal(1)

    it.method()
    expect(counts.get('method')).to.equal(1)

    it.method()
    expect(counts.get('method')).to.equal(2)

    it.s = '1'
    expect(counts.get('s', 'set')).to.equal(1)

    it.t = parseInt(it.s)
    expect(counts.s.get).to.equal(1)
    expect(counts.t.set).to.equal(1)

    it.s = it.t.toString()
    expect(counts.s.set).to.equal(2)
    expect(counts.t.get).to.equal(1)
  })
})
