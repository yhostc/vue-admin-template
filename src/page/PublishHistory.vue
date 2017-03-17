<template>
	<div>
    <div class="auction-header text-right">
      <span>已有{{count}}个拍卖</span>
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
        <mt-cell-swipe v-for="item in loading" title="text" :value="22222" :right="rightButtons">
            <div class="auction-image"><img width="95" :src="item.image"></div>
            <div class="auction-content">
              <div class="title">
                <router-link :to="{ path:'/auction/detail?id='+item.id}">{{item.title}}</router-link>
              </div>
              <div class="auction-state">
                <div class="chuizi"><img width="20" src="../assets/icon7.png"></div>
                <div class="price">当前价<span>&yen;{{item.price}}</span></div>
                <div class="split"></div>
                <div class="time"><img width="20" src="../assets/icon-time.png"></div>
                <div class="times">当前落槌<span>{{item.times}}/{{item.sale_times}}次</span></div>
                <div class="remain">倒计时<span>{{item.remain}}秒</span></div>
                <div class="clear"></div>
              </div>
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
            handler: ()=>{}
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
              <div class="remain">成交价<span>&yen;{{item.price}}</span></div>
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
      has: [],
      count: 0
    }
  },
  created: function(){

    /*  定义右键菜单 */
    this.rightButtons = [
      {
        content: 'Delete',
        style: { background: 'red', color: '#fff' },
        handler: ()=>{
          console.log(this);
          console.log(this.removeBidding(11))
        }
      }
    ];


    this.getAuctionList();
  },
  methods: {
    getAuctionList: function(){
      var that = this;
      var url = config.service + '/product/myPublishList';
      this.$http.post(url, {}).then(res => {
        if(res.body.status){
          that.loading = res.body.data.loading;
          that.has = res.body.data.has;
          that.count = res.body.data.count
        }
      }, res => {
        that.$toast(res.body.info);
      });
    },
    removeBidding: function(id){
      console.log('->removeBidding:',arguments);

      return;

      var that = this;
      var url = config.service + '/bidding/remove';
      this.$http.post(url, {id:id}).then(res => {
        if(res.body.status){
          
        }
      }, res => {
        that.$toast(res.body.info);
      });
    }
  }
}
</script>
