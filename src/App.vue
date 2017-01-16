<template>
  <div id="app">
    <p><img src="./assets/logo.png"></p>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

console.log([1,2,3,4,5].map(x=>x+1));
</script>

<style lang="scss" src="./assets/style.scss"></style>