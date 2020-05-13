import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

export default new Vuex.Store({
    modules: {
        users
    }
})