import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dhData:[],
    isCollapse:false,
  },
  mutations: {
    changeDHData(state,param) {
      state.dhData = param
      console.log(state.dhData,'dhData')
    },
    changeIsCollapse(state,param){
      state.isCollapse = param
    }
  },
  actions: {
  },
  modules: {
  },
});
