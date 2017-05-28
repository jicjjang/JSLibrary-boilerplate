import axios from 'axios'
import uniqueRandomArray from 'unique-random-array'
import localDatas from './localDatas.json'

const githubDatas = {
  datas: localDatas,
  init: () => {
    // if (githubDatas.datas) {
      return new Promise((resolve, reject) => {
        resolve(githubDatas.datas)
      })
    // } else {
    //   return axios({
    //     method: 'get',
    //     url: './githubDatas.json',
    //     timeout: 5000
    //   }).then((res) => {
    //     return githubDatas.datas = res.data
    //   })
    // }
  },
  getDatas: () => {
    return githubDatas.init()
  },
  getNames: () => {
    var names = []
    return githubDatas.init().then((datas) => {
      datas.map((val, key) => {
        names.push(val.login)
      })
      return names
    })
  },
  getRandomAnythings: (datas) => {
    return uniqueRandomArray(datas)()
  }
}

export default githubDatas
