import axios from 'axios'
import router from '@/router'
import store from '@/store'
let qs = require('qs')
const instance = axios.create({
  timeout: 15000
})

const xhr = {
  get (url:string) {
    return new Promise((resolve, reject) => {
      instance.get(url).then((res:any) => {
        resolve(res)
      }).catch((err:any) => {
        reject(err)
      })
    })
  },
  post (url:string, data:any) {
    return new Promise((resolve, reject) => {
      instance.post(url, data).then((res:any) => {
        resolve(res)
      }).catch((err:any) => {
        reject(err)
      })
    })
  }
}

// 请求拦截器新增非get请求添加请求头和token
instance.interceptors.request.use(config => {
  console.log(config)
  if (config.method !== 'get') {
    config.data = qs.stringify(config.data)
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  let token = store.state.token
  if (token) {
    config.headers.common['token'] = token
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use(response => {
  // console.log(response)
  // 对响应数据做点什么
  return response
}, error => {
  if (error.response) {
    console.log('error.response', error.response)
  }
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default xhr
