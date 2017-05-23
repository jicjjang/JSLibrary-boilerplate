var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");

var githubDatas = require('../src/index')

chai.use(chaiAsPromised);

// http://chaijs.com/plugins/chai-as-promised/

// describe('jslibrary-boilerplate', function () {
//   describe('getDatas', function () {
//     it('should be object from datas', function () {
//       expect(githubDatas.getDatas()).to.satisfy(function (obj) {
//         return typeof obj === 'object';
//       });
//     });
//     it('should be array of object', function () {
//       expect(githubDatas.getDatas()).to.satisfy(function (objs) {
//         return objs.map(function (obj, key) {
//           return typeof obj === 'object';
//         });
//       });
//     });
//   });
//
//   describe('getNames', function () {
//     it('should be object from names', function () {
//       expect(githubDatas.getNames()).to.satisfy(function (names) {
//         return typeof names === 'object';
//       });
//     });
//     it('should be array of string', function () {
//       expect(githubDatas.getNames()).to.satisfy(function (names) {
//         return names.map(function (name, key) {
//           return typeof name === 'string';
//         });
//       });
//     });
//   });
//   // console.log(githubDatas.getDatas());
//   // console.log(githubDatas.getNames());
//   // console.log(githubDatas.getRandomData());
//   // console.log(githubDatas.getRandomName());
//   describe('getRandomData', function () {
//     it('should be object from data', function () {
//       expect(githubDatas.getRandomData()).to.satisfy(function (data) {
//         return typeof data === 'object';
//       });
//     });
//   });
//
//   describe('getRandomNames', function () {
//     it('should be string from name', function () {
//       expect(githubDatas.getRandomName()).to.satisfy(function (name) {
//         return typeof name === 'string';
//       });
//     });
//   });
// });
