// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 新的虚拟dom对象 = {
//   data： {
//     arr：  ['生产环境部署', '单文件组件', '单元测试', 'JavaScript 支持']
//   }
// }

// 旧的虚拟dom对象 = {
//   data：{
//     arr: ['生产环境部署', '单文件组件', '单元测试', 'TypeScript 支持']
//   }
// } 

// <div V-for="(item, index) in arr" :key="index"></div>



Vue.directive('focus', {
  bind(el, binding, vnode, oldVnode) {
    /**
     * 1. el 指令所绑定的元素 (原生的)
     * 2. binding 就是指令所绑定的数据
     * 3. vnode 虚拟dom 
     * vnode 是vue虚拟出来的dom结构
     * 和dom的结构类似 但它不是一个dom对象
     * 
     */
    console.log(el)
    // el.style.background = 'red';
    // el.focus()
    // 当指令和组件或标签绑定的时候触发
  },
  inserted(el, binding, vnode, oldVnode) {
    el.focus()
    // 当指令所绑定的组件或标签被插入到dom的时候触发
  },
  update(el, binding, vnode, oldVnode) {
    // 当指令所绑定的组件或标签更新时触发
  },
  componentUpdated(el, binding, vnode, oldVnode) {
    // 当指令所绑定的组件更新时触发
  },
  unbind(el, binding, vnode, oldVnode) {
    // 当指令和组件解绑时触发
  }
})

Vue.directive('sync', {
  bind(el, binding, vnode, oldVnode) {
    /**
     * binding 是一个对象
     * 1. expression 原始的表达式（指令引号中的东西） v-sync="value=100"
     * 2. name 指令的名称 不带v-的
     * 3. rawName 指令的名称 带v-的
     * 4. value 表达式计算出来的值
     * 5. modifiers 当指令上出现修饰符时该选项里就会有值 key等于修饰符名称 value 是为true的
     * 6. arg 在指令后加上冒号的数据 也就是参数 只能有一个参数 多个参数呢不会被分开解析
     */

    // bind 钩子只运行一次 在指令和元素绑定的时候运行

    el.value = binding.value
    // console.log(vnode)
  },
  inserted(el, binding, vnode, oldVnode) {
    // 指令所绑定的元素被插入到dom中时触发 
    // inserted 钩子只运行一次 只插入dom一次
    // console.log(binding)
    el.value = binding.value
    el.addEventListener('input', (e) => {
      // console.log(el.value)
      // console.log(binding)
      // vnode.context.value = el.value
      if (typeof vnode.context[binding.expression] !== 'undefined') {
        if (binding.modifiers.number) {
          vnode.context[binding.expression] = Number(el.value.replace(/[^0-9]/g, ''))
        } else {
          vnode.context[binding.expression] = el.value
        }
       
      }
    })
  },

  update(el, binding, vnode, oldVnode) {
    // console.log(binding)
    // 当指令所绑定的标签更新时触发
    // 当指令所绑定的标签包含绑定的数据发生改变时就会触发
    el.value = binding.value
  },
})

Vue.directive('listener', {
  bind(el, binding, vnode, oldVnode) {
    // console.log(binding)
    if (typeof binding.value !== 'function') {
      throw new TypeError(`Invalid key ${binding.expression}, is not a function.`)
    }
    // console.log(binding)
    el.addEventListener(binding.arg, (event) => {
      if (binding.modifiers.stop) {
        event.stopPropagation()
      }
      if (binding.modifiers.a && binding.modifiers.prevent) {
        return binding.value(event)
      }
      if (binding.modifiers.prevent) {
        event.preventDefault()
      }
      binding.value(event)
    })
  }
})



/**
 * 全局过滤器
 * filter(name, callback(value) => value)
 * 1. name 过滤器的名称
 * 2. callback 过滤器的处理函数
 */
Vue.filter('currency', (val, curr = '￥') => {
  return curr + val
})

Vue.filter('UpperCase', (val) => {
  return val.toUpperCase()
})

Vue.filter('FilterNumber',(val) => {
  return val.replace(/[0-9]/g, '')
})

Vue.filter('LowerCase', (val) => {
  return val.toLowerCase()
})

Vue.filter('CamelCase', (val) => {
  if (typeof val !== 'string') return;
  const [first, ...more] = val.split('')

  return [first.toUpperCase(), more.join('').toLowerCase()].join('')
})

/**
 * 局部过滤器
 * 在组件的filters 选项里添加过滤器处理函数即可
 * 对象的key 是过滤器的名称 对象的value是函数
 */

// Vue.component('App', App)

import Button from '@/components/Button'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App, Button },
  render: h => h(App)
  // template: '<App/>',
  // render(h) {
  //   return h('Button', {
  //     // class: { // 不管是不是组件都可以传递进去
  //     //   'app': true
  //     // },
  //     // style: { // 不管是不是组件都可以传递进去
  //     //   background: 'red'
  //     // }
  //     // props: { // 必须在渲染组件的时候传递
  //     //   value: '哈哈'
  //     // },
  //     // attrs: { // 给标签设置自定义的属性
  //     //   index: 'haha'
  //     // },
  //     // domProps: { // 原生html属性，不是html属性就不会被渲染
  //     //   id: 'app',
  //     // },
  //     // on: { // 监听组件的自定义事件（或者标签的事件）
  //     //   click(a) {
  //     //     console.log(a)
  //     //   }
  //     // },
  //     // nativeOn: { // 给组件或标签添加原生事件(只针对组件)
  //     //   // click(a) {
  //     //   //   console.log(a)
  //     //   // },
  //     // }
  //   },[
  //     h('button', { slot: 'before' }, '按钮1'),
  //     h('button', { slot: 'after' }, '按钮2'),
  //     h('input')
  //   ])
  // },
  // beforeCreate() {
  //   console.log('实例的生命周期')
  // }
})
