import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout/Layout.vue'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login'),
    mate: { keepAlive: false },
    hidden: false
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/pages/404'),
    mate: { keepAlive: false },
    hidden: false
  },
  {
    path: '/',
    name: 'default',
    redirect: 'login',
    hidden: false
  },
  {
    path: '/home',
    name: '首页',
    mate: { keepAlive: true },
    component: Layout,
    redirect: 'home/index',
    children: [{
      path: 'index',
      name: '首页',
      component: () => import('@/pages/home'),
      mate: { keepAlive: true }
    }]
  }
]

export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/operation',
    name: '运营',
    mate: { keepAlive: true, roles: ['normal'] },
    component: Layout,
    redirect: 'operation/index',
    children: [{
      path: 'index',
      name: '运营',
      component: () => import('@/pages/operation/index'),
      mate: { keepAlive: true, roles: ['normal'] }
    }]
  },
  { path: '*', redirect: '/404', hidden: true }
]
