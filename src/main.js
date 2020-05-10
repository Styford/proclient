// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';

Vue.use(VueAxios, axios);
Vue.use(Vuex)
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    current_user: ""
  },
  mutations: {
    update_user (state) {
      state.current_user = ""
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
