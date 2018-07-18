import { asyncRouterMap, constantRouterMap } from '@/router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param {Array} roles
 * @param {object} route
 */
function hasPermIssion (roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => {
      return route.meta.roles.indexOf(role) >= 0
    })
  } else {
    return true
  }
}

/**
 * @param {object} asyncRouterMap
 * @param {Array} roles
 */
function filterAsyncRouter (asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermIssion(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    permissionRouter: constantRouterMap,
    addRouters: []
  },
  getters: {
    permissionRouter: state => state.permissionRouter,
    addRouters: state => state.addRouters
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.permissionRouter = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GANERATE_ROUTES ({commit}, data) {
      return new Promise(resolve => {
        const roles = data.roles
        let accessedRouters
        if (roles.indexOf('admin') >= 0) {
          accessedRouters = asyncRouterMap
        } else {
          accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
