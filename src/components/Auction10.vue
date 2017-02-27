<template>
  <el-row class="publish">
    <el-row class="default">
      <img src="../assets/icon3.png">
      <p>发布拍卖</p>
    </el-row>
    <el-row class="default guid">
      <p><br/></p>
      <p><br/></p>
      <p>首次发布<br/>需要认证您的手机号<br/><br/><el-button type="primary" @click="onSubmit">开始认证</el-button></p>
    </el-row>
    
  </el-row>
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
.publish .default img{
  margin: 62px 0 0 116px;
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


