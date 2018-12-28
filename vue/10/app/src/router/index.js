import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home'
import About from '@/pages/About'
import NotFound from '@/pages/NotFound'
import News from '@/pages/News'

import NewsDetail from '@/pages/NewsDetail'


Vue.use(VueRouter)


// 通过new Vue-router 实例化一个路由对象
export default new VueRouter({
    // 1. mode 路由的模式 可选 默认为hash模式
    mode: 'history',
    // 2. routes 路由的规则
    routes: [
        {
            // 匹配的路径
            path: '/',
            // 指定一个组件
            component: Home
        },
        {
            // 匹配的路径
            path: '/about',
            // 指定一个组件
            component: About
        },
        {
            path: '/news',
            component: News,
            children: [ 
                { // 谁的子路由就在谁的组件里切换
                    path: ':id',
                    component: NewsDetail
                }
            ]
        },
        {
            path: '/goodslist',
            // 显示商品列表
        },
        {
            path: ':item',
            // 显示商品详情
        },
        {
            path: '/error.html',
            component: NotFound
        },
        {
            path: '*',
            // redirect重定向
            redirect: 'error.html',
        }
    ]
})