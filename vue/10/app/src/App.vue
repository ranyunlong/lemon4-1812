<template>
  <div id="app">
    <!-- 
      router-view 组件
      只有添加了vue-router 就有router-view 这个组件
      路由容器来展示路由的内容

      router-link 来代替a标签的跳转
      router-link 可以兼容 hash 和history模式
     -->

     <router-link to="/">首页</router-link>
     <router-link to="/news">新闻</router-link>
     <router-link to="/about">关于</router-link>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      open:false
    }
  },
  methods: {
    $alert(){
      alert(1222)
    }
  }
}
</script>

<style>
#app {
  padding: 10px;
}
</style>
