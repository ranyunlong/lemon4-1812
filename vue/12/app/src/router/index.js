import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/screen/Home'
import NewsDetail from '@/screen/NewsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home/detail',
      name: 'NewsDetail',
      component: NewsDetail
    }
  ]
})
