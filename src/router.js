import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/home.vue'
import AboutUs from '@/components/about-us/about-us.vue'
import Services from '@/components/our-services/our-services.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/about-us',
      name: 'About Us',
      component: AboutUs
    }, {
      path: '/our-services',
      name: 'Our Services',
      component: Services
    }
  ]
})
