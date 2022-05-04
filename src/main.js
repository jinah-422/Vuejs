import Vue from 'vue'
import App from './App.vue'
import {router} from './routes/index.js';
import {store} from './store/index.js'
import '@fortawesome/fontawesome-free/js/all.js'
// store를 모듈화

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, // router: router
  store, // store: store 
}).$mount('#app')
