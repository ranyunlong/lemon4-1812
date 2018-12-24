// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './assets/styles/index.css'

// 单文件组件(.vue的文件)
// 局部组件
import App from './App'
// 局部组件
import Test from './components/Test'

Vue.component('Test', Test)



// 局部组件
// const App = {
//   template: `
//   <h1>xxx</h1>
//   `
// }

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App value="123"/>'
})
