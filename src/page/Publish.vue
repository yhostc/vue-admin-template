<template>
	<div class="publish">
    <!-- 我的拍卖 -->
		<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Auction',
  data () {
    return {
      msg: 'This is publish list page.'
    }
  }
}
</script>