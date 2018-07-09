import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/pages/404')
    },
    {
      path: '/',
      name: 'default',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/pages/home')
    },
    { path: '*', redirect: '/404', hidden: true }
  ]
})
