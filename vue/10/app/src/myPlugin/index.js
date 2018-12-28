import Test from './Test'
import Button from './Button'
import Card from './Card'

const components = {
  Test,
  Button,
  Card
}

// vue的插件实际上就是一个对象，对象里包含一个install方法
export default {
    install(Vue) {
        // console.log(arguments[0])
        // 全局混入
        Vue.mixin({

        })

        Object.keys(components).forEach((key) => {
          Vue.component(key, components[key])
        })

        Vue.component('Test', Test)

        Vue.component('Button', Button)

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
        Vue.filter('currency', (val, curr = '￥') => {
          return curr + val
        })
    }
}