import Vue from 'vue'
import Vuex from 'vuex'
import post from './post/index';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    post
  }
})
