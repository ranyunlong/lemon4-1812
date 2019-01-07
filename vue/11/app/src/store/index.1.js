import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: { // 存储原始数据
        user: '张三',
        count: 100,
        test: 'test'
    },
    getters: {  // 用来查询数据的
        user(state) {
            // 在getter 里不能修改state 这里的state 是深拷贝的副本
            return state.user
        },
        cc(state) {
            return state.count
        },
        test(state) {
            return state.test
        }
    },
    mutations: {  // 用来修改数据
        setUser(state, data) {
            state.user = data
        },
        changeCount(state) {
            state.count ++
        }
    },
    actions: { // 提交mutation修改的
        SET_USER({commit}, username) {
            commit('setUser', username)
        }
    },
    modules: { // 分模块

    }
})

// store 对象

/**
 * commit 方法
 * 用来提交 mutation 修改器
 * 
 * dispatch 方法
 * 用来触发 actions 请求
 */