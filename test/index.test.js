var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");

var githubDatas = require('../src/index')

chai.use(chaiAsPromised);

// http://chaijs.com/plugins/chai-as-promised/

describe('jslibrary-boilerplate', function () {
  describe('getDatas', function () {
    it('should be object from datas', function () {
      githubDatas.getDatas().then(function (datas) {
        return expect(datas).to.be.an('array');
      });
    });
    it('should be array of object', function () {
      githubDatas.getDatas().then(function (datas) {
        return datas.map(function (obj, key) {
          return expect(obj).to.be.an('object');
        });
      });
    });
  });

  describe('getNames', function () {
    it('should be object from names', function () {
      githubDatas.getDatas().then(function (names) {
        return expect(names).to.be.an('array');
      });
    });
    it('should be array of string', function () {
      githubDatas.getNames().then(function (names) {
        return names.map(function (name, key) {
          return expect(name).to.be.a('string');
        });
      });
    });
  });

  describe('getRandomData', function () {
    it('should be object from data', function () {
      githubDatas.getRandomData().then(function (data) {
        return expect(data).to.be.an('object');
      });
    });
  });

  describe('getRandomName', function () {
    it('should be string from name', function () {
      githubDatas.getRandomName().then(function (name) {
        return expect(name).to.be.a('string');
      });
    });
  });
});
