import chai from 'chai'
var expect = chai.expect
import githubDatas from '../src/index'

// http://chaijs.com/plugins/chai-as-promised/

describe('jslibrary-boilerplate', function () {
  before((done) => {
    githubDatas.init().then(() => done())
  })

  describe('getDatas', function () {
    it('should be object from datas', (done) => {
      githubDatas.getDatas().then((datas) => {
        expect(datas).to.be.an('array')
        done()
      })
    })
    it('should be array of object', function (done) {
      githubDatas.getDatas().then((datas) => {
        datas.map(function (obj, key) {
          expect(obj).to.be.an('object')
        })
        done()
      })
    })
  })

  describe('getNames', function () {
    it('should be array from names', function (done) {
      githubDatas.getNames().then((names) => {
        expect(names).to.be.an('array')
        done()
      })
    })
    it('should be array of string', function (done) {
      githubDatas.getNames().then((names) => {
        names.map(function (names, key) {
          expect(names).to.be.an('string')
        })
        done()
      })
    })
  })

  describe('getRandomAnythings', function () {
    it('should be random data of datas object', function (done) {
      githubDatas.getDatas().then((datas) => {
        expect(githubDatas.getRandomAnythings(datas)).to.be.a('object')
        done()
      })
    })
    it('should be random data include datas object', function (done) {
      githubDatas.getDatas().then((datas) => {
        expect(datas).to.include(githubDatas.getRandomAnythings(datas))
        done()
      })
    })
    it('should be random name of names array', function (done) {
      githubDatas.getNames().then((names) => {
        expect(githubDatas.getRandomAnythings(names)).to.be.a('string')
        done()
      })
    })
    it('should be random name include names array', function (done) {
      githubDatas.getNames().then((names) => {
        expect(names).to.include(githubDatas.getRandomAnythings(names))
        done()
      })
    })
  })
})
