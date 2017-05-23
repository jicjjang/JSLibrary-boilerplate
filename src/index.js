var axios = require('axios');
var uniqueRandomArray = require('unique-random-array');

var datas = [];

var promiseUserDatas = axios.get('https://api.github.com/users').then(function(res) {
  return res.data;
});

module.exports = {
  getDatas: function () {
    return promiseUserDatas;
  },
  getNames: function () {
    var names = [];
    return this.getDatas().then(function (datas) {
      datas.map(function (val, key) {
        names.push(val.login);
      });
      return names;
    });
  },
  getRandomData: function () {
    return this.getDatas().then(function (datas) {
      return uniqueRandomArray(datas);
    });
  },
  getRandomName: function () {
    return this.getNames().then(function (names) {
      return uniqueRandomArray(names);
    });
  }
};
