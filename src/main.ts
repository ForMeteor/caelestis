import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import * as filters from './common/filter'
// import axios from './common/http'
import axios from 'axios'
import router from './router'
import store from './store'
import api from './common/apiCollection'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$api = api
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
