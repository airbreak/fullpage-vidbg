import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'

function hasPermission (roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) {
    return true
  }
  if (!permissionRoles) {
    return true
  }
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === 'login') {
      next({path: '/'})
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GET_USER_INFO').then(res => {
          const roles = res.data.roles
          store.dispatch('GANERATE_ROUTES', { roles }).then(() => {
            console.log(store.getters.addRouters)
            router.addRoutes(store.getters.addRouters)
            next({...to, replace: true})
          })
        }).catch((err) => {
          Message.error(err || '验证失败')
          next({path: '/'})
        })
      } else {
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()
        } else {
          next({
            path: '/401',
            replace: true,
            query: {noGoBack: true}
          })
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
