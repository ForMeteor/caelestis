import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)
const vuexLocal = new VuexPersist({
  storage: window.localStorage // 可选，sessionStorage/indexDB
})
const store = new Vuex.Store({
  state: {
    pageName: 'home-vuex',
    botNavShow: false,
    loginStatus: false,
    testValue: [{
      name: 'lili',
      status: 'female'
    }, {
      name: 'lala',
      status: 'male'
    }, {
      name: 'lulu',
      status: 'female'
    }, {
      name: 'lele',
      status: 'male'
    }]
  },
  mutations: { // 同步事务
    login (state: any) {
      state.loginStatus = true
    },
    logOut (state: any) {
      state.loginStatus = false
    },
    ShowBotNav (state: any) {
      console.log('显示底栏')
      state.botNavShow = true
    },
    HideBotNav (state: any) {
      console.log('隐藏底栏')
      state.botNavShow = false
    },
    pageChange (state: any, str: string) {
      console.log('页面改为' + str)
      state.pageName = str
    }
  },
  getters: {
    trueName: state => {
      return state.testValue.filter((r:any) => {
        console.log(r)
        return r.status === 'female'
      })
    }
  },
  actions: { // 异步事务
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})

export default store
