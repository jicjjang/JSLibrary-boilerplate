var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");

var githubDatas = require('../src/index')

chai.use(chaiAsPromised);

// http://chaijs.com/plugins/chai-as-promised/

describe('jslibrary-boilerplate', function () {
  describe('getDatas', function () {
    it('should be object from datas', function () {
      expect(githubDatas.getDatas()).to.eventually.satisfy(function (obj) {
        return typeof obj === 'object';
      });
    });
    it('should be array of object', function () {
      expect(githubDatas.getDatas()).to.eventually.satisfy(function (objs) {
        return objs.map(function (obj, key) {
          return typeof obj === 'object';
        });
      });
    });
  });

  describe('getNames', function () {
    it('should be object from names', function () {
      expect(githubDatas.getNames()).to.eventually.satisfy(function (names) {
        return typeof names === 'object';
      });
    });
    it('should be array of string', function () {
      expect(githubDatas.getNames()).to.eventually.satisfy(function (names) {
        return names.map(function (name, key) {
          return typeof name === 'string';
        });
      });
    });
  });

  describe('getRandomData', function () {
    it('should be object from data', function () {
      expect(githubDatas.getRandomData()).to.eventually.satisfy(function (data) {
        return typeof data === 'object';
      });
    });
  });

  describe('getRandomNames', function () {
    it('should be string from name', function () {
      expect(githubDatas.getRandomName()).to.eventually.satisfy(function (name) {
        return typeof name === 'string';
      });
    });
  });
});
