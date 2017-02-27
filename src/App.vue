<template>
  <!-- 顶层页面视图 -->
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    
  },
  created: function(){
    // 检查SESSION会话
    // this.$router.replace('/login');
  }
}
</script>


<style lang="css" src="./assets/style.css" />

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
