<template>
  <div class="wechat">
    
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import config from '../config'
import util from '../common/util'

export default {
  name: 'WechatLogin',
  computed: {
    ...mapGetters({
        getSid: 'sid',
        getUser: 'user',
        getCacheSid: 'getCacheSid',
        getCacheUserInfo: 'getCacheUserInfo'
    }),
    ...mapActions({
        UserLogin: 'UserLogin',
        UserInfo: 'UpdateUserInfo'
    })
  }, 
  mounted: function(){
    console.log("=>getSid:", this.getSid);
    console.log("=>getCacheSid", this.getCacheSid);

    // 1、当前状态验证
    if(this.getSid){
      console.log("->通过SID登录");
      this.$router.push("/auction/list");
      return;
    }

    // 2、当前离线SESSION验证
    if(this.getCacheSid){
      console.log("->通过CACHE SID登录");
      this.$store.dispatch('UserLogin', {sid: this.getCacheSid});
      this.$router.push("/auction/list");
      return;
    }

    // 3、接收SID
    var sid = this.$route.query.sid;
    if(sid){
      console.log("->通过URL SID登录");
      this.$store.dispatch('UserLogin', {sid});
      this.$router.push("/auction/list");
      return;
    }

    // 4、跳转到微信授权登录
    this.$toast('准备请求微信授权登录');
    setTimeout(()=>location.href = config.service + '/wechat/auth', 1000);
    //location.href = config.service + '/wechat/auth';
  }, 
  methods: {
    
  }
}
</script>

<style lang="css">

</style>
