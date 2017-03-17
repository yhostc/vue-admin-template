<template>
	<div>
		<!-- 创建我的拍卖 -->
		<div class="auction-header auction-navi">
      <div class="icon"><img src="../assets/icon7.png" width="45" /></div>
      <div class="title">价格规则</div>
      <div class="subtitle">选择拍卖价格及规则</div>
      <div class="nav">
        <img width="55" src="../assets/icon4.png" @click="onSave">
      </div>
    </div>
    <div class="auction-shadow"></div>
    <div class="auction-body auction-body-rule">
      <p class="title">开拍设置</p>
      <div class="row-input">
        <img width="18" src="../assets/icon8.png">
        <span>起拍价*</span>
        <i>元</i>
        <input type="number" v-model="rules.price_start" @change="onCheck">
        <div class="clear"></div>
      </div>

      <div class="row-input">
        <img width="18" src="../assets/icon9.png">
        <span>加价额*</span>
        <i>元</i>
        <input name="price_start" type="number" v-model="rules.price_step" @change="onCheck"/>
        <div class="clear"></div>
      </div>

      <div class="row-input">
        <img width="18" src="../assets/icon10.png">
        <span>开拍时间选择</span>
        <select name="sale_time" v-model="rules.sale_time">
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

      <!-- <p class="title">成交设置</p>
      <div class="row-input">
        <img width="18" src="../assets/icon11.png">
        <span>拍卖时效</span>
        <select name="sale_times" v-model="rules.sale_duration">
          <option value="86400">1天</option>
          <option value="259200">3天</option>
          <option value="604800">7次</option>
          <option value="1296000">15天</option>
          <option value="2592000">30天</option>
        </select>
        <div class="clear"></div>
      </div> -->

      <div class="row-input">
        <img width="18" src="../assets/icon11.png">
        <span>落槌倒数次数</span>
        <select name="sale_times" v-model="rules.sale_times">
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
        <select name="sale_remain" v-model="rules.sale_remain">
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
        <input name="price_fare" type="number" v-model="rules.price_fare"/>
        <div class="clear"></div>
      </div>


    </div>
    <div class="panel-footer">
      
    </div>
  </div>
</template>

<script>
import config from '../config'

export default {
  name: 'Auction',
  data () {
    return {
      rules: {
        id: '',
        price_start: '0',
        price_step: '100',
        sale_duration: '259200',
        sale_time: '0',
        sale_times: '1',
        sale_remain: '60',
        price_fare: 0
      }
    }
  },
  created: function(){
    this.rules.id = this.$route.query.id;
  },
  methods: {
    onCheck: function(){

    },
    onSave: function(){
      if(!this.rules.id){
        that.$toast('参数错误，请重新发布！');
      }

      var that = this;
      var url = config.service + '/auction/update';
      this.$http.post(url, this.rules).then(res => {
        if(res.body.status){
          this.$router.push("/publish/success");
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


</style>
