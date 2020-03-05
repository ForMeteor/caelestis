import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import charts from '../views/game/charts.vue'
import navv from '../views/document/navv.vue'
Vue.use(VueRouter)
Vue.use(Vuex)
const routes = [
  {
    path: '/',
    name: 'home',
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
    path: '/charts',
    name: 'charts',
    component: () => import('../views/game/charts.vue')
  },
  {
    path: '/navv',
    name: 'navv',
    component: () => import('../views/document/navv.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  console.log(to.name)
  console.log(Vuex)
  next()
})
export default router
// 路由守卫  登录判定 轮播组件 首页+修饰完整 持久化 