// import './assets/styles/index.css'
// alert(1)

import './assets/styles/index.less'
import './assets/styles/bootstrap.css'

import Vue from 'vue'

// 局部组件
import App from './App'


new Vue({
    el: '#app',
    components: {
        App
    },
    template: `<App />`
})