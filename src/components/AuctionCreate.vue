<template>
	<div>
		<!-- 创建我的拍卖 -->
		<div class="panel-header">
      <div class="icon"><img src="../assets/icon6.png" width="45" /></div>
      <div class="title">拍品信息</div>
      <div class="subtitle">编辑标题及图文介绍</div>
      <div class="nav">
        <img width="55" src="../assets/icon4.png">
      </div>
    </div>
    <div class="panel-body">
      <p class="title">拍卖标题</p>
      <p>
        <mt-field placeholder="必填"></mt-field>
      </p>
      <div class="line"></div>

      <p class="title">文字介绍</p>
      <p>
        <mt-field placeholder="必填" type="textarea" rows="4"></mt-field>
      </p>
      <div class="line"></div>

      <p class="title">图片介绍</p>
      <p>
        <ul class="upload">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

      </p>
      <p></p>

    </div>
    <div class="panel-footer">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Auction',
  data () {
    return {
      msg: 'This is auction list page.'
    }
  },
  methods: function(){

  }
}
</script>



<style lang="css">
.panel-header {
  padding: 20px 10px;
  background-color:#F5F5F5;
  position: relative;
  z-index: 0;
}
.panel-header .icon{
  width: 45px;
  float: left;
}
.panel-header .title{
  margin-left: 55px;
  font-size: 20px;
}

.panel-header .subtitle{
  margin-left: 55px;
  font-size: 14px;
  color:#CFCFCF;
}
.panel-header .nav{
  position: absolute;
  top: 60px;
  right: 20px;
  z-index: 1;
}


.panel-body{
  background-color: #fff;
  min-height: 500px;
  background: linear-gradient(#DEDEDE, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);
  padding-top: 20px;
}

.panel-body p{
  margin: 0 10px;
}
.panel-body p.title{
  font-size: 14px;
  color: #72CD4D;
}
.panel-body input{
  margin: 8px 0;
  font-size: 16px;
}

.panel-body .line{
  border: #D7D7D7 solid 1px;
  margin: 10px 0;
}


.panel-body .upload{
  width: 100%;
  padding:0px;
  text-align: center;
}

.panel-body .upload>li{
  width: 80px;
  height: 80px;
  display: inline-block;
  float: left;
  margin-right:8px;
  margin-bottom:8px;
  background-color: gray;
}
</style>
