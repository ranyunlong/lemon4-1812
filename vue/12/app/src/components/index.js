import Screen from './Screen'
import Icon from './Icon'

const components = {
    Screen,
    Icon
}

export default {
    install(Vue) {
        Object.keys(components).forEach(k => {
            Vue.component(components[k].name, components[k])
        })
    }
}