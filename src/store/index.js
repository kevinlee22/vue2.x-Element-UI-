import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    // 相当于data
  state: {
        language: 'zh'
  },
  // 相当于methods
  mutations: {
   changeLanguage(state,lang){
        state.language = lang;
        Vue.config.lang = state.language;
    }
  }
});


export default store;