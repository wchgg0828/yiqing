/*
 * @Autor: wencaihao
 * @Date: 2022-12-11 12:50:51
 * @LastEditors: wencaihao
 * @LastEditTime: 2022-12-11 13:45:50
 * @aim: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import City from '../views/City.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/city/:city',
    name: 'city',
    component: City,
    props:true
  },
  {
    path:"/spring/:citys",
    name:"SpringView",
    component:() => import("../views/SpringView.vue"),
    props:true
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
