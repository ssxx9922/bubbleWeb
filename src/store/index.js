import Vue from 'vue'
import Vuex from 'vuex'
import info from './modules/info'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    info
  },
  getters
})

export default store
