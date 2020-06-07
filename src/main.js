// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store'
import Navigation from '@/components/Navigation'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCodeBranch, faEnvelope, faMobileAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCodeBranch, faEnvelope, faMobileAlt, faPhone)

Vue.use(VueAxios, axios);
Vue.use(Navigation)

Vue.component('navigation', Navigation);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
