import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Admin from '@/views/Admin'
import Login from '@/views/Login'
import AdminUser from '@/views/User'
import AdminMenu from '@/views/Menu'
import AdminUserDetail from '@/views/UserDetail'

Vue.use(Router)

// 嵌套路由 是页面格式不发生巨大的变化，只有局部发生变化时使用

// 兄弟路由 是页面与其他页面完全不同的情况 使用

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { // 路由的元数据
        test: 100
      }
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: {
        auth_login: true
      },
      children: [
        {
          path: 'user',
          name: 'AdminUser',
          component: AdminUser,
          children: [
            {
              path: ':name',
              name: 'AdminUserDetail',
              component: AdminUserDetail,
            }
          ]
        },
        {
          path: 'menu',
          name: 'AdminMenu',
          component: AdminMenu
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
