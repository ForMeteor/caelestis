import Vue from 'vue'
import store from '@/store/index'
import VueRouter from 'vue-router'
import constant from '@/common/constant'
import Home from '../views/Home.vue'
import ball from '../views/animate/ball.vue'
import count from '../views/echarts/count.vue'
Vue.use(VueRouter)
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
    path: '/toy',
    name: 'toy',
    component: () => import('../views/game/toy.vue')
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
router.beforeEach((to, from, next) => {
  if (to.name) {
    store.commit('pageChange', to.name)
    if (constant.ShowButtonList.includes(to.name)) {
      store.commit('ShowBotNav')
    } else {
      store.commit('HideBotNav')
    }
  }
  next()
})
export default router
// 登录判定  history&hash
// 性能检测