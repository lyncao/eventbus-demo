import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/views/Layout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page',
      component: Page
    }
  ]
})
