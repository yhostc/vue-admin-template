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
</script>

<style lang="scss" src="./assets/style.scss"></style>