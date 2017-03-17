<template>
  <div>
    <div class="auction-header text-center">
      <p>共参加了{{totalLength}}个拍卖，{{loadingLength}}个正在进行</p>
    </div>
    <div class="auction-shadow"></div>
    <div class="auction-body">
      <p></p>
      
      <p class="title">正在拍卖</p>
      <div class="auction-rows" v-if="loading">
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
                <div class="price">当前价<span>&yen;{{item.price}}</span></div>
                <div class="split"></div>
                <div class="time"><img width="20" src="../assets/icon-time.png"></div>
                <div class="times">当前落槌<span>{{item.times}}/{{item.sale_times}}次</span></div>
                <div class="remain">倒计时<span>{{item.remain}}秒</span></div>
                <div class="clear"></div>
              </div>
              <router-link :to="{ path:'/auction/detail?got_state='+item.got.is_has+'&id='+item.id}">
                <div class="auction-got-success" v-if="item.got.is_has">
                  我的出价最高&yen;{{item.price}}&nbsp;>&nbsp;
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
      <p class="tCenter" v-if="loading.length==0">暂无</p>
      
      <p class="title">已结束</p>
      <div class="auction-rows" v-if="has">
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
              <div class="remain">成交价<span>&yen;{{item.price}}</span></div>
              <div class="clear"></div>
            </div>
          </div>
        </mt-cell-swipe>
        <!-- 3数据循环体结束 -->
      </div>
      <p class="tCenter" v-if="has.length==0">暂无</p>
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
  computed: {
    loadingLength: function(){
      console.log('computed:', this.loading);
      return this.loading.length;
    },
    totalLength:function(){
      return this.has.length + this.loading.length;
    }
  },
  created: function(){
    this.getAuctionList();
  },
  methods: {
    getAuctionList: function(){
      var that = this;
      var url = config.service + '/join/myJoinList';
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

</style>
