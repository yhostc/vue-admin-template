<template>
	<div class="message">
		<div class="info">
      <p class="state">发布成功！</p>
      <p>
        <img src="../assets/bg1.png" />
      </p>
      <p>分享拍卖信息，可以让更多人参与拍卖</p>
    </div>

    <div class="controller">
      <mt-button type="primary" size="large">立即分享</mt-button>
      <br/>
      <mt-button type="default" size="large">完 成</mt-button>
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
  methods: function(){

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


.controller{
  margin-top: 200px;
  padding: 10px;
  font-size: 14px;
}
</style>
