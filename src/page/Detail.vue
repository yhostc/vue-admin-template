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
      <ul class="auction-userlist" v-if="detail.fans">
        <li style="padding:0 10px;">
          <div class="avatar"><img width="35" :src="detail.fans.avatar"></div>
          <div class="user">
            {{detail.fans.nickname}}<br/>
            <template v-if="detail.fans.mobile">{{detail.fans.mobile}}</template>
            <template v-if="!detail.fans.mobile">未认证用户</template>
          </div>
          <div class="time">{{detail.fans.time}}</div>
        </li>
      </ul>
      <p>{{detail.title}}</p>
      <p>{{detail.intro}}</p>
      <div class="swipe">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="item in detail.album">
            <img width="640" :src="item+'!s6'" />
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
          <mt-button type="primary" size="small" :style="{'background-color':'#6FCC49'}" @click="saveBidding" v-if="bidding.active">出价</mt-button>
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
        visible: false,
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
          that.bidding.visible = !res.body.data.is_own;
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
