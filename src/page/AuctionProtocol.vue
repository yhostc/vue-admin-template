<template>
  <div>
    <!-- 创建我的拍卖 -->
    <div class="auction-header auction-navi">
      <div class="icon"><img src="../assets/icon12.png" width="45" /></div>
      <div class="title">拍卖发布协议</div>
      <div class="subtitle">发布拍卖即表示同意</div>
      <div class="nav">
        <router-link :to="{ path:'/auction/create'}">
          <img width="55" src="../assets/icon5.png">
        </router-link>
      </div>
    </div>
    <div class="auction-shadow"></div>
    <div class="auction-body protocol">
      <h3>诚信承诺</h3>
      <p>协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容</p>
      <h3>拍卖发布协议</h3>
      <p>协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuctionProtocol',
  methods: {
    
  }
}
</script>


<style lang="css">

.panel-body{
  background-color: #fff;
  min-height: 500px;
  background: linear-gradient(#DEDEDE, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);
  padding-top: 20px;
}
.panel-body .clear{
  clear: both;
}

.panel-body p{
  margin: 0 10px;
}

.panel-body p.title{
  font-size: 14px;
  color: #72CD4D;
}

.panel-body .row-input{
  margin: 0 10px;
  font-size: 16px;
}
.panel-body .row-input img{
  vertical-align: middle;
  float: left;
  margin: 10px 5px 0 0;
}
.panel-body .row-input span{
  float: left;
  margin: 8px 0;
}

.panel-body .row-input input, .panel-body .row-input select{
  float: right;
  margin: 8px 0;
  max-width: 120px;
  font-size: 16px;
}
.panel-body .row-input select option {
  text-align: right;
  font-size: 14px;
}

.panel-body .row-input i{
  float: right;
  margin: 8px 0;
}

.panel-body .line{
  border: #D7D7D7 solid 1px;
  margin: 10px 0;
}

.protocol h3{
  text-align: center;
  font-size: 18px;
}

</style>
