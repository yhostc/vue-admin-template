<template>
  <div>
    <div class="auction-header text-center">
      <p>共参加了3个拍卖，2个正在进行</p>
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

</style>
