import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/home.vue'
import AboutUs from '@/components/about-us/about-us.vue'
import Services from '@/components/our-services/our-services.vue'

Vue.use(Router)

const router = new Router({
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

router.beforeEach(function (to, from, next) {
  window.scrollTo(0, 0)
  next()
})

export default router
