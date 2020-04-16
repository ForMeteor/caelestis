import Vue from 'vue'
import store from '@/store/index'
import VueRouter from 'vue-router'
import axios from 'axios'
import constant from '@/common/constant'
import Home from '../views/Home.vue'
Vue.use(VueRouter)
// name 中英文选择？meta
// +axios
const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
      icon: 'dashboard'
    },
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/settings.vue')
  },
  {
    path: '/firstroom',
    name: 'firstroom',
    component: () => import('../views/FirstRoom.vue')
  },
  {
    path: '/battle',
    name: 'battle',
    component: () => import('../views/Battle.vue')
  },
  {
    path: '/lau',
    name: 'lau',
    component: () => import('../views/layout/lau.vue')
  },
  {
    path: '/toy',
    name: 'toy',
    component: () => import('../views/immature/toy.vue')
  },
  {
    path: '/count',
    name: 'count',
    component: () => import('../views/echarts/count.vue')
  },
  {
    path: '/ball',
    name: 'ball',
    component: () => import('../views/animate/ball.vue')
  },
  {
    path: '/navv',
    name: 'navv',
    component: () => import('../views/document/navv.vue'),
    children: [{
      path: '/navv_1',
      name: 'navv_1',
      component: () => import('../views/document/part/navv_1.vue')
    },
    {
      path: '/navv_2',
      name: 'navv_2',
      component: () => import('../views/document/part/navv_2.vue')
    },
    {
      path: '/navv_3',
      name: 'navv_3',
      component: () => import('../views/document/part/navv_3.vue')
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  // mode: 'hash', 
  base: process.env.BASE_URL,
  routes
})
var getRouter:any
router.beforeEach((to, from, next) => {
  if (!getRouter) {
    // 加载动态路由++++
    axios.get('http://caelestis.club:3006/a/linkData').then((res) => {
      console.log(res)
    }).catch()
    console.log('add router')
  }
  if (to.name) {
    store.commit('pageChange', to.name)
    if (constant.ShowBotNavList.includes(to.name)) {
      store.commit('ShowBotNav')
    } else {
      store.commit('HideBotNav')
    }
    if (constant.HideTopNavList.includes(to.name)) {
      store.commit('HideTopNav')
    } else {
      store.commit('ShowTopNav')
    }
  }
  next()
})
export default router
