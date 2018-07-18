import vue from 'vue'
import vuex from 'vuex'
import user from './modules/user'
import permission from './modules/permission'

vue.use(vuex)

export default new vuex.Store({
  modules: {
    user,
    permission
  }
})
