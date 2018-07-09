import vue from 'vue'
import vuex from 'vuex'
import user from './modules/user'

vue.use(vuex)

export default new vuex.Store({
  modules: {
    user
  }
})
