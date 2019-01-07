import Vue from 'vue'
import Vuex from 'vuex'

import http from '@/utils/http'

Vue.use(Vuex)



export default new Vuex.Store({
    state: {
        user: {},
        menu: []
    },
    actions: {
        GET_USER_INFO({commit}) {
            http.get('/sys/user/info').then(({data}) => {
                const {code, user} = data
                if (code === 0) {
                    commit('setUser', user)
                }
            })
        },
        GET_MENU_LIST({commit}){
            http.get('/sys/menu/list').then(({data}) => {
                function deep(arr, parentId) {
                    if (!Array.isArray(arr)) return;
                    return arr.filter((k) => {
                        if (k.parentId === parentId) {
                            k.expand = false
                            k.children = deep(arr, k.menuId)
                            return true
                        }
                    })
                }
                commit('setMenu', deep(data, 0))
            })
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setMenu(state, menu) {
            state.menu = menu
        }
    },
    getters: {
        user(state) {
            return state.user
        },
        menu(state) {
            return state.menu
        }
    }
})