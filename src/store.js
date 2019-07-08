import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isListDisplayed: true
  },
  getters: {
    listState: state => { return state.isListDisplayed }
  },
  mutations: {
    toggleListDisplay: state => state.isListDisplayed = !state.isListDisplayed
  },
  actions: {

  }
})
