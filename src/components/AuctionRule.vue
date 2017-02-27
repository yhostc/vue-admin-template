<template>
	<div>
		<!-- 创建我的拍卖 -->
		<div class="panel-header">
      <div class="icon"><img src="../assets/icon7.png" width="45" /></div>
      <div class="title">价格规则</div>
      <div class="subtitle">选择拍卖价格及规则</div>
      <div class="nav">
        <img width="55" src="../assets/icon4.png">
      </div>
    </div>
    <div class="panel-body">
      <p class="title">开拍设置</p>
      <div class="row-input">
        <img width="18" src="../assets/icon8.png">
        <span>起拍价</span>
        <i>元</i>
        <input name="price_start" type="number" />
        <div class="clear"></div>
      </div>

      <div class="row-input">
        <img width="18" src="../assets/icon9.png">
        <span>加价额</span>
        <i>元</i>
        <input name="price_start" type="number" />
        <div class="clear"></div>
      </div>

      <div class="row-input">
        <img width="18" src="../assets/icon10.png">
        <span>开拍时间选择</span>
        <select name="time_start">
          <option value="0">立即开拍</option>
          <option value="600">10分钟后</option>
          <option value="1800">30分钟后</option>
          <option value="3600">60分钟后</option>
          <option value="7200">2小时后</option>
          <option value="10800">3小时候</option>
        </select>
        <div class="clear"></div>
      </div>

      <div class="line"></div>

      <p class="title">成交设置</p>
      <div class="row-input">
        <img width="18" src="../assets/icon11.png">
        <span>落槌倒数次数</span>
        <select name="times">
          <option value="1">1次</option>
          <option value="2">2次</option>
          <option value="3">3次</option>
          <option value="5">5次</option>
        </select>
        <div class="clear"></div>
      </div>

      <div class="row-input">
        <img width="18" src="../assets/icon10.png">
        <span>倒数计时选择</span>
        <select name="time_start">
          <option value="60">60秒</option>
        </select>
        <div class="clear"></div>
      </div>


      <div class="line"></div>

      <p class="title">其它设置</p>
      <div class="row-input">
        <img width="18" src="../assets/icon8.png">
        <span>运费</span>
        <i>元</i>
        <input name="price_start" type="number" />
        <div class="clear"></div>
      </div>


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
      msg: 'This is auction list page.',
      slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          textAlign: 'right'
        }
      ]
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

</style>
