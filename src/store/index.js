import Vue from 'vue';
import Vuex from 'vuex';
import count from './modules/count';

Vue.use(Vuex);

export default
new Vuex.Store({
  state: {
    messege: ""
  },
  getters: {
    messege: state => state.messege
  },
  mutations: {
    updateMessege(state, newMessege) {
      state.messege = newMessege;
    }
  },
  actions: {
    updateMessege({commit}, newMessege) {
      commit("updateMessege", newMessege);
    }
  },
  modules: {
    count
  }
});