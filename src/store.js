import Vue from 'vue'
import Vuex from 'vuex'
import content from './assets/content.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    content: content
  }
})
