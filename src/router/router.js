import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = () => import('../pages/index/index')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    }
    // {
    //   path: '/',
    //   redirect: '/recommend'
    // },
  ]
})
