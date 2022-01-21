import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/minecraft',
    name: 'MC',
    component: () => import(/* webpackChunkName: "mc" */ '../views/MC.vue')
  },
  {
    path: '/thanks',
    name: 'Thanks',
    component: () => import(/* webpackChunkName: "mc" */ '../views/Thanks.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
