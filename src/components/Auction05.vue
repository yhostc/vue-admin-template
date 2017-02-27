<template>
  <el-row class="publish">
    <el-row class="default">
      <img src="../assets/icon2.png">
      <p>Oops!<br/>您还没有发布任何拍卖!</p>
    </el-row>
    <el-row class="default guid">
      <p>您可以通过“立即发布”发布<br/>发布一个拍卖<br/><br/><el-button type="primary" @click="onSubmit">立即发布</el-button></p>
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


