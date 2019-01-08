<template>
  <div id="app">
    <transition 
      :enter-active-class="enter"
      :leave-active-class="leave">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      enter: 'swipe slideInLeft',
      leave: 'swipe slideOutRight'
    }
  },
  watch: {
    $route(to, from) {
      const toLen = to.path.split('/').length
      const fromLen = from.path.split('/').length
      if (toLen > fromLen) {
        this.enter = 'swipe slideInLeft'
        this.leave = 'swipe slideOutRight'
      } else if(toLen < fromLen) {
        this.enter = 'swipe slideInRight'
        this.leave = 'swipe slideOutLeft'
      }
    }
  }
}
</script>

<style>
.swipe{
  animation-duration: .3s;
  -moz-animation-timing-function: ease-out;
}
body{
  margin: 0;
}
#app {
  width: 100vw;
  height: 100vh;
}
.mint-header{
    background: #ff88bb;
}
.mint-tabbar {
    border-top: 1px solid #ddd;
}
.mint-tabbar .mint-tab-item{
    color: #999;
}
.mint-tabbar .mint-tab-item.is-selected{
    background: none;
    color: #ff88bb;
}
</style>
