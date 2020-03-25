import axios from 'axios'
// import QS from 'qs' // 引入qs模块，用来序列化post类型的数据
var QS = require('qs')
axios.defaults.timeout = 10000
axios.defaults.baseURL = '..'
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = QS.stringify(config.data)
  }
  return config
}, (error) => {
  return Promise.reject(error)
})
axios.interceptors.response.use((res) => {
  if (res.status !== 200) {
    return Promise.reject(res)
  }
  return res
}, (error) => {
  // 404等问题可以在这里处理
  return Promise.reject(error)
})
export default axios