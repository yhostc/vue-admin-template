<template>
	<div class="auction-list">
  	<div class="auction-header">
      <span>已有18个拍卖</span>   <mt-button type="primary" size="small">发布新拍卖</mt-button>
    </div>
    <div class="auction-shadow"></div>
    <div class="auction-body">
      <p class="title">正在拍卖</p>
      <div class="auction-rows">
        <!-- 1数据循环体开始 -->
        <mt-cell-swipe :right="[
          {
            content: '停拍',
            style: { background: 'red', color: '#fff' },
            handler: () => this.$messagebox('delete')
          }
        ]">
          <div class="auction-image"><img width="95" height="115" src="../assets/bg2.png"></div>
          <div class="auction-content">
            <div class="title">标题名称最多输入15个中文字符</div>
            <div class="state">
              <div class="chuizi"><img width="20" src="../assets/icon7.png"></div>
              <div class="price">当前价<span>&yen;8800</span></div>
              <div class="split"></div>
              <div class="time"><img width="20" src="../assets/icon-time.png"></div>
              <div class="times">当前落槌<span>2/3次</span></div>
              <div class="remain">倒计时<span>15秒</span></div>
              <div class="clear"></div>
            </div>
          </div>
        </mt-cell-swipe>
        <!-- 1数据循环体结束 -->

        <!-- 2数据循环体开始 -->
        <mt-cell-swipe :right="[
          {
            content: '停拍',
            style: { background: 'red', color: '#fff' },
            handler: () => this.$messagebox('delete')
          }
        ]">
          <div class="auction-image"><img width="95" height="115" src="../assets/bg2.png"></div>
          <div class="auction-content">
            <div class="title">标题名称最多输入15个中文字符</div>
            <div class="state">
              <div class="chuizi"><img width="20" src="../assets/icon7.png"></div>
              <div class="price">当前价<span>&yen;8800</span></div>
              <div class="split"></div>
              <div class="time"><img width="20" src="../assets/icon-time.png"></div>
              <div class="times">当前落槌<span>2/3次</span></div>
              <div class="remain">倒计时<span>15秒</span></div>
              <div class="clear"></div>
            </div>
          </div>
        </mt-cell-swipe>
        <!-- 2数据循环体结束 -->
      </div>

      <p class="title">已结束</p>
      <div class="auction-rows">
        <!-- 3数据循环体开始 -->
        <mt-cell-swipe :right="[
          {
            content: '删除记录',
            style: { background: 'red', color: '#fff' },
            handler: () => this.$messagebox('delete')
          }
        ]">
          <div class="auction-image"><img width="95" height="115" src="../assets/bg2.png"></div>
          <div class="auction-content">
            <div class="title">标题名称最多输入15个中文字符</div>
            <div class="state complete">
              <div class="chuizi"><img width="20" src="../assets/icon7.png"></div>
              <div class="price">已成交</div>
              <div class="split"></div>
              <div class="remain">成交价<span>&yen;2800</span></div>
              <div class="clear"></div>
            </div>
          </div>
        </mt-cell-swipe>
        <!-- 3数据循环体结束 -->

        <!-- 4数据循环体开始 -->
        <mt-cell-swipe :right="[
          {
            content: '删除记录',
            style: { background: 'red', color: '#fff' },
            handler: () => this.$messagebox('delete')
          }
        ]">
          <div class="auction-image"><img width="95" height="115" src="../assets/bg2.png"></div>
          <div class="auction-content">
            <div class="title">标题名称最多输入15个中文字符</div>
            <div class="state">
              <div class="chuizi"><img width="20" src="../assets/icon7.png"></div>
              <div class="price">当前价<span>&yen;8800</span></div>
              <div class="split"></div>
              <div class="time"><img width="20" src="../assets/icon-time.png"></div>
              <div class="times">当前落槌<span>2/3次</span></div>
              <div class="remain">倒计时<span>15秒</span></div>
              <div class="clear"></div>
            </div>
          </div>
        </mt-cell-swipe>
        <!-- 4数据循环体结束 -->
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'AuctionList',
  data () {
    return {
      
    }
  },
  methods: function(){

  }
}
</script>


<style lang="css">
.auction-list{
  width: 100%;
}

.auction-header{
  padding: 5px 10px;
  background-color:#F5F5F5;
  font-size: 14px;
  text-align: right;
}

.auction-header span{
  display: inline-block;
  float: left;
  height: 23px;
  padding-top: 7px;
}

.auction-shadow{
  height: 10px;
  background: linear-gradient(#DEDEDE, #FFF);
}

.auction-body{
  background-color: #fff;
  min-height: 200px;
}

.auction-body p{
  margin: 0px 10px;
  padding: 5px 0;
}
.auction-body p.title{
  font-size: 14px;
  color: #72CD4D;
}

.auction-rows{
  border-top: #BCBCBC solid 1px;
}
.auction-rows .mint-cell-title{
  display: none;
}
.auction-rows .mint-cell-wrapper{
  padding:0px;
}

.auction-image{
  float: left;
  width: 95px;
  height: 115px;
}
.auction-image img{
}
.auction-content{
  width: 100%;
  float: left;
  height: 115px;
  border-top: #BCBCBC solid 1px;
  border-bottom: #BCBCBC solid 1px;
  background-color: #fff;
  margin-top: -1px;
}
.auction-content .title{
  margin-top: 5px;
  font-size: 14px;
  padding: 6px 4px;
}
.auction-content .state{
  margin: 20px 5px;
}
.auction-content .complete{

}

.auction-content .chuizi, .auction-content .time{
  width: 20px;
  margin: 5px 5px 0 0;
}
.auction-content .split{
  width: 1px;
  border-left: #D7D7D7 solid 1px;
  height: 20px;
  margin: 5px 10px 0px 10px;
}

.auction-content div{
  float: left;
  font-size: 12px;
}
.auction-content span{
  display: block;
  font-size: 14px;
  margin-top: 5px;
}
.auction-content .price, .auction-content .times, .auction-content .remain{
  width: 40px;
  font-size: 12px;
}
.auction-content .times{
  width: 60px;
}
.auction-content .price span{
  color: red;
}
.auction-content .times span, .auction-content .remain span{
  color: #0090F7;
}

.complete .chuizi{
  margin-left: 30px;
}
.complete .price{
  width: 50px;
  color: #6FCC49;
  font-size: 16px;
  padding-top: 7px;
}
.complete .remain span{
  color: #6FCC49;
}

.auction-rows .mint-cell-swipe-button{
  font-size: 16px;
  font-weight: bold;
  padding-top: 30px;
}

</style>
