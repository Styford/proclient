import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Ping from '@/components/Ping'
import AllProjects from '@/components/AllProjects'
import Registration from '@/components/Registration'
import Login from '@/components/Login'
import FillBase from '@/components/FillBase'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    },
    {
      path: '/projects/all',
      name: 'AllProjects',
      component: AllProjects,
    },
    {
      path: '/user/registration',
      name: 'Registration',
      component: Registration,
    },
    {
      path: '/user/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/fillbase',
      name: 'FillBase',
      component: FillBase,
    },
  ],
  mode: 'history',
})
