import Vue from 'vue'
import Router from 'vue-router'

import Contacts from '@/components/Contacts'
import AboutUs from '@/components/AboutUs'
import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/',
      name:"Home",
      component: Home
    }
  ]
})
