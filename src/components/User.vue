<template>
  <div id="app">
    {{msg}}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'This is user page.'
    }
  }
}
</script>



