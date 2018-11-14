/* global describe, it, beforeEach */

'use strict'

const chai = require('chai')
chai.use(require('dirty-chai'))
const expect = chai.expect
const uuid = require('uuid/v4')

const Counts = require('../../main/Counts')
const counts = new Counts()

describe('Counts', () => {
  beforeEach(() => {
    counts.reset()
  })

  it('should work', () => {
    expect(counts.get('foo')).to.equal(0)
    expect(counts.get('bar', 'get')).to.equal(0)
    expect(counts.get('bar', 'set')).to.equal(0)
    expect(counts.get(uuid())).to.equal(0)
    expect(counts.get(uuid(), 'get')).to.equal(0)
    expect(counts.get(uuid(), 'set')).to.equal(0)

    counts.increment('foo')
    expect(counts.get('foo')).to.equal(1)

    counts.increment('foo')
    expect(counts.get('foo')).to.equal(2)

    counts.increment('bar', 'get')
    expect(counts.get('bar', 'get')).to.equal(1)

    counts.increment('bar', 'get')
    expect(counts.get('bar', 'get')).to.equal(2)

    counts.increment('bar', 'set')
    expect(counts.get('bar', 'set')).to.equal(1)

    counts.increment('bar', 'set')
    expect(counts.get('bar', 'set')).to.equal(2)

    expect(counts.get(uuid())).to.equal(0)
    expect(counts.get(uuid(), 'get')).to.equal(0)
    expect(counts.get(uuid(), 'set')).to.equal(0)

    counts.reset()
    expect(counts.get('foo')).to.equal(0)
    expect(counts.get('bar', 'get')).to.equal(0)
    expect(counts.get('bar', 'set')).to.equal(0)
    expect(counts.get(uuid())).to.equal(0)
    expect(counts.get(uuid(), 'get')).to.equal(0)
    expect(counts.get(uuid(), 'set')).to.equal(0)
  })
})
