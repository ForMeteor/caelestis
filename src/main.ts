import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import axios from 'axios'
import 'lib-flexible/flexible'
import router from './router'
import store from './store'
import http from './common/axios/http'
// import func from 'sept_method' 声明文件
import api from './common/axios/apiCollection'
import filters from './common/filter'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = http
// Vue.prototype.$method = func
Object.keys(filters).forEach((key: string) => {
  Vue.filter(key, (filters as any)[key])
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
