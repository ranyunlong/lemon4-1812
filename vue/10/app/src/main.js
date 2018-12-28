// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 1.导入路由
import router from './router'

import myPlugin from './myPlugin'

// 安装插件的
// Vue.use(myPlugin)

// Vue.useing = function(plugin, ...args) {
//   if (typeof plugin === 'object' && !Array.isArray(plugin)) {
//     if (typeof plugin.install === 'function') {
//       if (args.length > 0) {
//         return plugin.install(Vue, ...args)
//       }
//       return plugin.install(Vue)
//     }
//   } else {
//     throw new TypeError('Invalid plugin')
//   }
// }


Vue.use(myPlugin)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 注册路由
  router,
  components: { App },
  template: '<App/>'
})
