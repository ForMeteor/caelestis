import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import axios from 'axios'
import 'lib-flexible/flexible'
import router from './router'
import store from './store'
// import func from 'sept_method'
import api from './common/axios/apiCollection'
import filters from './common/filter'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
// Vue.prototype.$method = func
Object.keys(filters).forEach((key: string) => {
  Vue.filter(key, (filters as any)[key])
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
