import axios from 'axios' // 引入axios
/*import QS from 'qs' // 引入qs模块，用来序列化post类型的数据
axios.defaults.timeout = 20000
// axios.defaults.withCredentials = true
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
// let http = axios.create({
//   　　baseURL: 'http://caelestis.club:8000/',
//   　　withCredentials: true,
//   　　headers: {
//   　　　　'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
//   　　},
//   　　transformRequest: [function (data) {
//   　　　　let newData = '';
//   　　　　for (let k in data) {
//   　　　　　　if (data.hasOwnProperty(k) === true) {
//   　　　　　　　　newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
//   　　　　　　}
//   　　　}
//   　　　　return newData;
//   　　}]
//   });
  
//   function apiAxios(method:string, url:string, params:any, response:any) {
//   　　http({
//   　　　　method: method,
//   　　　　url: url,
//   　　　　data: method === 'POST' || method === 'PUT' ? params : null,
//   　　　　params: method === 'GET' || method === 'DELETE' ? params : null,
//   　　　　}).then(function (res) {
//   　　　　　　response(res);
//   　　　　}).catch(function (err) {
//   　　　　response(err);
//   　　　　})
//   }
  
//   export default {
//   　　get: function (url, params, response) {
//   　　　　return apiAxios('GET', url, params, response)
//   　　},
//   　　post: function (url, params, response) {
//   　　　　return apiAxios('POST', url, params, response)
//   　　},
//   　　put: function (url, params, response) {
//   　　　　return apiAxios('PUT', url, params, response)
//   　　},
//   　　delete: function (url, params, response) {
//   　　　　return apiAxios('DELETE', url, params, response)
//   　　}
//   }

