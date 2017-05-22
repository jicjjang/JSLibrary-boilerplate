var axios = require('axios');
var uniqueRandomArray = require('unique-random-array');

var datas = [];

axios.get('https://api.github.com/users').then(function(res) {
  var names = [];
  res.data.map(function (val, key) {
    datas.push(val.login);
  })
})

module.exports = {
  getDatas: function () {
    return datas;
  },
  getRandomDatas: function () {
    return uniqueRandomArray(datas)();
  }
}
