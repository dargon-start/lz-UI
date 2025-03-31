import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/button-test',
      component: () => import('./button/button-test.vue'),
      name: 'ButtonTest'
    },
    {
      path: '/',
      redirect: '/button-test'
    },
    {
      path: '/title-basic',
      component: () => import('./title/title-basic.vue'),
      name: 'TitleBasic'
    },
  ]
})

export default router
