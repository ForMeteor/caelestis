import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageName: 'home-vuex',
    loginStatus: false
  },
  mutations: {
    login (state) {
      state.loginStatus = true
    },
    logOut (state) {
      state.loginStatus = false
    },
    pageChange (state, str) {
      state.pageName = str
    }
  },
  actions: {
  },
  modules: {
  }
})
