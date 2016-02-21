import lib1 from '../src/lib1.js'
import chai from 'chai'
const expect = chai.expect

describe('lib1', function () {
  it('should return 1', function () {
    expect(lib1()).to.equal(1);
  })
})
