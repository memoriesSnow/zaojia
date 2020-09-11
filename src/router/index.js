import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'header',
    component: () => import('../views/header.vue')
  },
  {
    path: '/lunbo',
    name: 'lunbo',
    component: () => import('../views/home/lunbo')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
