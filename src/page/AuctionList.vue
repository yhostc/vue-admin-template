<template>
	<div>
    <div class="auction-header text-right">
      <span>已有18个拍卖</span>
      <router-link :to="{ path:'/auction/create'}">
        <mt-button type="primary" size="small">
          发布新拍卖
        </mt-button>
      </router-link>
    </div>
    <div class="auction-shadow"></div>
    <div class="auction-body">
      <p></p>
      <p class="title">正在拍卖</p>
      <div class="auction-rows">
        <!-- 数据循环体开始 -->
        <mt-cell-swipe  v-for="(item, index) in loading" :right="[
          {
            content: '停拍',
            style: { background: 'red', color: '#fff' },
            handler: () => this.$messagebox('delete')
          }
        ]">
            <div class="auction-image"><img width="95" :src="item.image"></div>
            <div class="auction-content">
              <div class="title">
                <router-link :to="{ path:'/auction/detail?id='+item.id}">{{item.title}}</router-link>
              </div>
              <div class="auction-state">
                <div class="chuizi"><img width="20" src="../assets/icon7.png"></div>
                <div class="price">当前价<span>&yen;{{item.price_start}}</span></div>
                <div class="split"></div>
                <div class="time"><img width="20" src="../assets/icon-time.png"></div>
                <div class="times">当前落槌<span>2/3次</span></div>
                <div class="remain">倒计时<span>15秒</span></div>
                <div class="clear"></div>
              </div>
              <router-link :to="{ path:'/auction/detail?got_state='+item.got.is_has+'&id='+item.id}">
                <div class="auction-got-success" v-if="item.got.is_has">
                  我的出价最高&yen;{{Number(item.got.price)+Number(item.price_start)}}&nbsp;>&nbsp;
                </div>
          
                <div class="auction-got-fail" v-if="!item.got.is_has">
                  我的出价被超越&nbsp;>&nbsp;
                </div>
              </router-link>
            </div>
            

            
            <div class="clear"></div>
        </mt-cell-swipe>
        <!-- 数据循环体结束 -->
      </div>

      <p class="title">已结束</p>
      <div class="auction-rows">
        <!-- 3数据循环体开始 -->
        <mt-cell-swipe v-for="(item, index) in has" :right="[
          {
            content: '删除记录',
            style: { background: 'red', color: '#fff' },
            handler: () => this.$messagebox('delete')
          }
        ]">
          <div class="auction-image"><img width="95" height="115" src="../assets/bg2.png"></div>
          <div class="auction-content">
            <div class="title">
              <router-link :to="{ path:'/auction/detail?id='+item.id}">{{item.title}}</router-link>
            </div>
            <div class="auction-state auction-state-complete">
              <div class="chuizi"><img width="20" src="../assets/icon7.png"></div>
              <div class="price">已成交</div>
              <div class="split"></div>
              <div class="remain">成交价<span>&yen;2800</span></div>
              <div class="clear"></div>
            </div>
          </div>
        </mt-cell-swipe>
        <!-- 3数据循环体结束 -->
      </div>
    </div>
  </div>

</template>

<script>
import config from '../config'

export default {
  name: 'AuctionList',
  data () {
    return {
      loading:[],
      has: []
    }
  },
  created: function(){
    this.getAuctionList();
  },
  methods: {
    getAuctionList: function(){
      var that = this;
      var url = config.service + '/auction/my';
      this.$http.post(url, {}).then(res => {
        if(res.body.status){
          that.loading = res.body.data.loading;
          that.has = res.body.data.has;
        }
      }, res => {
        that.$toast(res.body.info);
      });
    }
  }
}
</script>


<style lang="css">

.auction-header span{
  display: inline-block;
  float: left;
  height: 23px;
  padding-top: 7px;
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
.auction-rows .mint-cell{
  border-bottom: #BCBCBC solid 1px;
}
.auction-rows .mint-cell-title{
  display: none;
}
.auction-rows .mint-cell-wrapper{
  padding:0px;
  background-image: none;
}
.auction-rows .mint-cell-value{
  align-items: top;
}

.auction-rows .mint-cell-swipe-button{
  font-size: 16px;
  font-weight: bold;
  padding-top: 30px;
}




.auction-image{
  float: left;
  width: 90px;
  height: 100px;
}
.auction-image img{
  width: 90px;
  height: auto;
  max-height: 100px;
}
.auction-content{
  width: 100%;
  float: left;
  min-height: 100px;
  background-color: #fff;
  margin-top: -1px;
}
.auction-content .title{
  margin-top: 5px;
  font-size: 14px;
  padding: 6px 4px;
  margin-bottom: 10px;
  margin-left: 5px;
}
.auction-state{
  width:220px;
  margin-left: 5px;
}

.auction-state .chuizi, .auction-state .time{
  width: 20px;
  margin: 5px 5px 0 0;
  float: left;
}
.auction-state .split{
  width: 1px;
  border-left: #D7D7D7 solid 1px;
  height: 20px;
  margin: 5px 10px 0px 10px;
    float: left;
}

.auction-content span{
  display: block;
  font-size: 12px;
  margin-top: 5px;
}
.auction-state .price, .auction-state .times, .auction-state .remain{
  width: 40px;
  font-size: 12px;
  float: left;
  text-align: center;
}
.auction-state .times{
  width: 60px;
  text-align: center;
}
.auction-state .price span{
  color: red;
  float: none;
  padding-top: 0;
}
.auction-state .times span, .auction-state .remain span{
  color: #0090F7;
  float: none;
  padding-top: 0;
}

.auction-state-complete .chuizi{
  margin-left: 30px;
}

.auction-state-complete .price{
  width: 50px;
  color: #6FCC49;
  font-size: 16px;
  padding-top: 7px;
}

.auction-state-complete .remain span{
  color: #6FCC49;
}

.auction-got-success, .auction-got-fail{
  font-size: 14px;
  text-align: right;
  padding: 5px 5px;
  color: #fff;
  display: block;
  width: 100%;
  clear: both;
  float: none;
  margin-top: 10px;
  margin-right: 5px;
}
.auction-got-success{
  background-color: #2196F3
}

.auction-got-fail{
  background-color: red;
}

</style>
