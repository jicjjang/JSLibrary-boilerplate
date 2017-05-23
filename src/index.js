var axios = require('axios');
var uniqueRandomArray = require('unique-random-array');

var datas = [];

axios.get('https://api.github.com/users').then(function(res) {
  datas = res.data;
  return datas;
})

module.exports = {
  getDatas: function () {
    return datas;
  },
  getNames: function () {
    var names = [];
    this.getDatas().map(function (val, key) {
      names.push(val.login);
    });
    return names;
  },
  getRandomDatas: function () {
    return uniqueRandomArray(this.getDatas())();
  },
  getRandomNames: function () {
    return uniqueRandomArray(this.getNames())();
  }
}
