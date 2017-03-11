<template>
	<div>
		<div class="auction-header text-right">
      <div class="auction-state">
        <div class="chuizi"><img width="20" src="../assets/icon7.png"></div>
        <div class="price">当前价<span>&yen;8800</span></div>
        <div class="split"></div>
        <div class="time"><img width="20" src="../assets/icon-time.png"></div>
        <div class="times">当前落槌<span>2/3次</span></div>
        <div class="remain">倒计时<span>15秒</span></div>
        <div class="clear"></div>
      </div>
    </div>

    <div class="auction-shadow"></div>
    <div class="auction-body">
      <p>{{detail.title}}</p>
      <p>{{detail.intro}}</p>
      <div class="swipe">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="item in detail.album">
            <img width="640" :src="item" />
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="tab">
        <a @click="active='tab-container1'">当前参拍<span>{{bilingFansList.length}}</span></a>
        <a @click="active='tab-container2'">当前出价<span>{{bilingFansList.length}}</span></a>
      </div>
      <div class="tab-container">
        <mt-tab-container v-model="active">
          <mt-tab-container-item id="tab-container1">
            <ul class="auction-userlist">
              <li v-for="item in bilingFansList">
                <div class="avatar"><img width="35" :src="item.fans.avatar"></div>
                <div class="user">
                  {{item.fans.nickname}}<br/>
                  <template v-if="item.fans.mobile">{{item.fans.mobile}}</template>
                  <template v-if="!item.fans.mobile">未认证用户</template>
                </div>
                <div class="time">{{item.time}}</div>
              </li>
            </ul>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container2">
            <ul class="auction-userlist">
              <li v-for="item in bilingFansList">
                <div class="avatar"><img width="35" :src="item.fans.avatar"></div>
                <div class="user">
                  {{item.fans.nickname}}<br/>
                  <template v-if="item.fans.mobile">{{item.fans.mobile}}</template>
                  <template v-if="!item.fans.mobile">未认证用户</template>
                </div>
                <div class="time">{{item.time}}</div>
                <div class="price">出价<span>&yen;{{item.price}}</span></div>
              </li>
            </ul>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>

    <mt-popup class="popup-bidding" v-model="bidding.visible" position="bottom">
      <div class="bidding-title">最低加价 {{detail.price_step}}</div>
      <div class="bidding-content">
        <span>&yen;</span>
        <span class="price">
          <input type="number" v-model="bidding.price" @change="onCheck">
        </span>
        <span>
          <mt-button type="primary" size="small" @click="addBiddingPrice">+{{detail.price_step}}</mt-button>
        </span>
        <span>
          <mt-button type="primary" size="small" @click="saveBidding" v-if="bidding.active">出价</mt-button>
          <mt-button type="default" size="small" @click="saveBidding" v-if="!bidding.active" disabled>出价</mt-button>
        </span>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import config from '../config'

export default {
  name: 'Auction',
  data () {
    return {
      active: 'tab-container1',
      detail: {
        title: '',
        intro: '',
        album: [],
        price_step: ''
      },
      bilingFansList: [],
      bidding: {
        visible: true,
        active: false,
        price: 0
      }
    }
  },
  created: function(){
    this.getAuctionDetail();
  },
  methods: {
    onCheck: function(){

    },

    getAuctionDetail: function(){
      var that = this;
      var url = config.service + '/auction/detail';
      this.$http.post(url, {id:this.$route.query.id}).then(res => {
        if(res.body.status){
          that.detail = res.body.data.detail;
          this.bilingFansList = res.body.data.bilingFansList;
        }
      }, res => {
        that.$toast(res.body.info);
      });
    },
    addBiddingPrice: function(){
      this.bidding.price += Number(this.detail.price_step);
      this.bidding.active = this.bidding.price>0 ? true: false;
    },
    /**
     * 出价
     * @return {[type]} [description]
     */
    saveBidding: function(){
      var that = this;
      var url = config.service + '/bidding/price';
      this.$http.post(url, {product_id:this.detail.id, price:this.bidding.price}).then(res => {
        if(res.body.status){
          this.bidding.price = 0;
        }
        that.$toast(res.body.info);
      }, res => {
        that.$toast(res.body.info);
      });
    }
  }
}
</script>


<style lang="css">
.auction-body .swipe{
  height: 150px;
}

.auction-body .tab{
  margin: 10px 0;
  box-shadow: 2px 0px 8px #888888;
}
.auction-body .tab a{
  display: inline-block;
  width: 49%;
  text-align: center;
  padding: 5px 0;
}
.auction-body .tab a span{
  display: block;
}
.auction-body .tab a:hover{
  color: #000;
  border-bottom: #6FCC49 solid 3px;
}

.auction-body  .tab-container{
  padding: 0px 10px;
}
.auction-userlist{
  padding: 0;
  list-style: none;
}
.auction-userlist li{
  padding: 5px 0;
  border-bottom: #D7D7D7 solid 1px;
}
.auction-userlist li div{
  display: inline-block;
  vertical-align: top;
  height: 40px;
}
.auction-userlist .avatar{

}
.auction-userlist .user{
  color: #000;
  line-height: 18px;
}
.auction-userlist .price, .auction-userlist .time{
  padding: 0px 0 0 5px;
  float: right;
}
.auction-userlist .price span{
  color: red;
  display: block;
  font-weight: bold;
}
.auction-userlist .time{
  width: 50px;
  text-align: right;
  line-height: 30px;
}


.popup-bidding{
  width: 100%;
}
.bidding-title{
  margin: 15px 10px;
  font-size: 14px;
}
.bidding-content{
  font-size: 16px;
  margin: 15px 10px;
}
.bidding-content span{
  margin-right: 5px;
}
.bidding-content span.price{

  display: inline-block;
  margin-right: 10px;
  border-bottom: #000 solid 2px;
}
.bidding-content span.price input{
  width: 100px;
  font-size: 20px;
}

</style>
