<template>
  <div id="app">
    <!-- {{ ivalue | currency('a') }}
    <input v-test v-sync.number="ivalue" />
    <input v-model.number="ivalue" v-listener:keydown.prevent="handler" /> -->
    <!-- <div v-listener:mouseover.stop="handler">哈哈</div> -->
    <!-- {{name | FilterNumber | CamelCase}}
    <div>
      {{user | lower}}
    </div> -->
    <Card2 />
  </div>
</template>

<script>
import Card2 from '@/components/Card2'
import Icon from '@/components/Icon'
export default {
  name: 'App',
  data() {
    return {
      ivalue: '500',
      name: 'zhangsan2255445',
      user: 'LisiAa'
    }
  },
  methods:{
    handler() {
      console.log(1)
    }
  },
  directives: { // 局部指令
    test: {
      bind(el) {
        console.log(el)
      },
      inserted() {

      }
    }
  },
  filters: { // 局部的过滤器
    lower: (val) => {
      return val.toLowerCase()
    }
  },
  components: {
    Icon,
    Card2
  }
}
</script>

<style lang="less">
@import './assets/styles/base.less';
body {
  background: @bgColor;
  display: flex;
  animation: fadeIn 1s linear;
}
</style>
