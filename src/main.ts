import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import axios from 'axios'
import 'lib-flexible/flexible'
import router from './router'
import store from './store'
import api from './common/axios/apiCollection'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
