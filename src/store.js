import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default
new Vuex.Store({
  state: {
    count: 2,
    messege: ""
  },
  getters: {
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3,
    messege: state => state.messege
  },
  mutations: {
    increment(state, number) {
      state.count += number;
    },
    decrement(state, number) {
      state.count -= number;
    },
    updateMessege(state, newMessege) {
      state.messege = newMessege;
    }
  },
  actions: {
    increment({ commit }, number) {
      commit('increment', number);
    },
    decrement({ commit }, number) {
      commit('decrement', number);
    },
    updateMessege({commit}, newMessege) {
      commit("updateMessege", newMessege);
    }
  }
});