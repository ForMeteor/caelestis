// 项目域名地址
let BaseUrl = 'http://47.97.73.43:3006'

let Env
// 由于封装的axios请求中，会将ROOT打包进去，为了方便之后不再更改，判断了当前环境，而生成的不同的ROOT
if (process.env.NODE_ENV === 'development') {
  // npm run serve ---> development
  // 开发环境下的代理地址，解决本地跨域跨域，配置在vue.config.js里
  Env = '/api'
} else {
  // npm run build --> pro...
  // 生产环境下的地址
  Env = BaseUrl
}
export default { Env, BaseUrl }
