<template>
	<div class="message">
		<div class="info">
      <p class="state">发布成功！</p>
      <p>
        <img style="width:100%" src="../assets/bg1.png" />
      </p>
      <p>分享拍卖信息，可以让更多人参与拍卖</p>
    </div>

    <div class="controller">
      <mt-button type="primary" size="large">立即分享</mt-button>
      <br/>
      <mt-button type="default" size="large" @click="onSubmit">完 成</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Auction',
  data () {
    return {
      
    }
  },
  methods: {
    onSubmit: function(){
      this.$router.push("/auction/list");
    }
  }
}
</script>


<style lang="css">
.message{
  width: 100%;
}

.message .info{
  background-color: #6FCC49;
  color: #fff;
  padding: 15px;
  text-align: center;
}

.message .state{
  font-size: 18px;
  font-weight: bold;
}


.message .controller{
  margin-top: 160px;
  padding: 10px;
  font-size: 14px;
}
</style>
