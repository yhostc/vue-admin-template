<template>
  <div class="publish">
    <div class="default">
      <img src="../assets/icon3.png">
      <p>发布拍卖</p>
    </div>
    <div class="default guid">
      <p><br/></p>
      <p><br/></p>
      <p>首次发布<br/>需要认证您的手机号<br/><br/><mt-button type="primary" size="normal">立即发布</mt-button></p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'my-publish-auction',
  data () {
    return {
      title: '我的发拍'
    }
  },
  methods: {
    onSubmit: function(){
      console.log(arguments);
    }
  }
}
</script>

<style>
.publish .default{
  text-align: center;
}
.publish .default img{
  margin-top: 62px;
}
.publish .default p{
  text-align: center;
  font-size: 20px;
  color: #9E9E9E;
}

.publish .guid p{
  color: #212121;
}
</style>


