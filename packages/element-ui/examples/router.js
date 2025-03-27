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
    }
  ]
})

export default router
