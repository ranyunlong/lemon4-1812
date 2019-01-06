<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body,#app {
  width: 100%;
  height: 100%;
  margin: 0;
}
#app {
  display: flex;
  min-width: 1000px;
}
</style>
