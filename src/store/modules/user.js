import { doLogin, getInfo } from '@/api/user'
import {getToken, setToken, removeToken} from '@/utils/auth'
const state = {
  token: getToken(),
  name: '',
  avatar: '',
  roles: []
}

const getters = {
  token: state => state.token,
  name: state => state.name,
  avatar: state => state.avatar,
  roles: state => state.roles
}

const actions = {
  // 登录
  LOGIN ({commit}, userInfo) {
    return new Promise((resolve, reject) => {
      doLogin(userInfo).then((res) => {
        setToken(res.token)
        commit('SET_TOKEN', res.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 获取用户信息
  GET_USER_INFO ({commit, state}) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then((res) => {
        const info = res.data
        if (info.roles && info.roles.length > 0) {
          commit('SET_ROLES', info.roles)
        }
        commit('SET_NAME', info.name)
      })
    })
  },
  LOG_OUT ({commit, state}) {
    commit('SET_TOKEN', '')
    commit('SET_ROLES', [])
    removeToken()
  }
}

const mutations = {
  SET_TOKEN (state, token) {
    state.token = token
  },
  SET_NAME (state, name) {
    state.name = name
  },
  SET_AVATAR (state, avatar) {
    state.avatar = avatar
  },
  SET_ROLES (state, roles) {
    state.roles = roles
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
