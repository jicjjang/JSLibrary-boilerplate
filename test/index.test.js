var expect = require('chai').expect;
var githubDatas = require('../src/index')

describe('jslibrary-boilerplate', function () {
  describe('getDatas', function () {
    it('should be object of datas', function () {
      expect(githubDatas).to.satisfy(function (obj) {
        return typeof obj === 'object';
      });
    });
  });
  describe('getNames', function () {

  });
  describe('getRandomDatas', function () {

  });
  describe('getRandomNames', function () {

  });
});
