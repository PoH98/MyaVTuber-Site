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
    path: '/thanks',
    name: 'Thanks',
    component: () => import(/* webpackChunkName: "thanks" */ '../views/Thanks.vue')
  },
  {
    path:'/patient/:name',
    name: 'Patient',
    component:() => import(/* webpackChunkName: "patient" */ '../views/Patient.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
