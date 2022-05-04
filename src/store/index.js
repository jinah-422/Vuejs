import Vue from 'vue';
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
<<<<<<< HEAD
        users: {}, 
        item: {},
        list: []
    },
    getters: {
      fetchedAsk(state) {
          return state.ask
      },
      fetchedItem(state) {
          return state.item
      }  
=======
        jobs: []
>>>>>>> 8ac346355a0a2d9ceba259ff0b6b662266193670
    },
  
    mutations: mutations,
    actions: actions

})