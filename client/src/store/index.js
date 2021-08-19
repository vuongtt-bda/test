import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const SET_ACCOUNT = 'SET_ACCOUNT';
const SET_NGANHANG = 'SET_NGANHANG';
export default new Vuex.Store({
  state: {
    account: '',
    nganhang: {},
  },
  getters: {
    getShortAccount: (state) => {
      let acc = state.account;
      return acc ? acc.slice(0,6) + '...' + acc.slice(acc.length - 4)  : '';
    }
  },
  mutations: {
    [SET_ACCOUNT] (state, payload) {
      state.account = payload.account
    },
    [SET_NGANHANG] (state, payload) {
      state.nganhang = payload.nganhang;
    },
  },
  actions: {
    // setAccount({ commit }, account ) {
    //   commit(SET_ACCOUNT, {account})
    // },
    // setnganhang({ commit }, nganhang ) {
    //   commit(SET_NGANHANG, {nganhang})
    // },
  },
  modules: {
  }
})
