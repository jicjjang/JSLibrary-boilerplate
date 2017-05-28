import axios from 'axios';
import uniqueRandomArray from 'unique-random-array';


var githubInfo = axios.get('https://api.github.com/users').then(function(res) {
  return res.data;
  // this.datas = res.data;
  // this.datas.map(function (val, key) {
  //   names.push(val.login);
  // });
  // this.names = names;
}).catch(function (e) {
  console.log('Error!');
});

module.exports = {
  datas: null,
  names: null,
  getDatas: function () {
    return githubInfo.then(function (datas) {
      return datas;
    });
  },
  getNames: function () {
    return githubInfo.then(function (datas) {
      var names = [];
      datas.map(function (val, key) {
        names.push(val.login);
      });
      return names;
    });
  },
  getRandomAnythings: function (datas) {
    return uniqueRandomArray(datas)();
  }
};
