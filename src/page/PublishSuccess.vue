<template>
	<div class="message">
		<div class="info">
      <p class="state">发布成功！</p>
      <p>
        <img style="width:100%" src="../assets/bg1.png" />
      </p>
      <p>分享拍卖信息，可以让更多人参与拍卖</p>
    </div>

    <div class="controller">
      <!-- <mt-button type="primary" size="large">立即分享</mt-button>
      <br/> -->
      <mt-button type="default" size="large" @click="onSubmit">完 成</mt-button>
    </div>
  </div>
</template>

<script>
import config from '../config'
import wx from 'weixin-js-sdk'


export default {
  name: 'Auction',
  data () {
    return {
      
    }
  },
  mounted: function(){
    this.doShare();
  },
  methods: {
    onSubmit: function(){
      this.$router.push("/publish/history");
    },
    doShare: function(){
      console.log('wx->', wx);

      var that = this;
      var url = config.service + '/wechat/signature';
      var data = {
        url: config.client+"/#"+this.$route.fullPath
      }

      this.$http.post(url, data).then(res => {
        var cfg = {
          debug: false,
          appId: res.data.appId,
          timestamp: parseInt(res.data.timestamp),
          nonceStr: res.data.nonceStr,
          signature: res.data.signature,
          jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'hideAllNonBaseMenuItem',
            'showMenuItems'
          ]
        };
        console.log('->config:', cfg);
        wx.config(cfg);
        wx.ready(function () {
          var info = {
            title: '拍卖助手', // 分享标题
            desc: '快来抢啊！！！',
            link: 'http://m.yhostc.com/#/auction/detail?id='+that.$route.query.id, // 分享链接
            imgUrl: '', // 分享图标
            success: function () { 
                // 用户确认分享后执行的回调函数
                console.log('->分享成功');
            },
            cancel: function () { 
                // 用户取消分享后执行的回调函数
                console.log('->分享取消成功');
            }
          };

          // wx.showOptionMenu();
          wx.hideAllNonBaseMenuItem();
          // wx.hideMenuItems({
          //     menuList: [
          //       'menuItem:share:qq',
          //       'menuItem:share:weiboApp',
          //       'menuItem:favorite',
          //       'menuItem:share:facebook',
          //       'menuItem:share:QZone',
          //       'menuItem:copyUrl',
          //       'menuItem:originPage',
          //       'menuItem:readMode',
          //       'menuItem:openWithQQBrowser',
          //       'menuItem:openWithSafari',
          //       'menuItem:share:email',
          //       'menuItem:share:brand'
          //     ]
          // });
          wx.showMenuItems({
            menuList: [
              'menuItem:share:appMessage',
              'menuItem:share:timeline'
            ]
          });
          wx.onMenuShareTimeline(info);
          wx.onMenuShareAppMessage(info);
        });
      }, res => {
        that.$toast(res.body.info);
      });
    }
  }
}
</script>



<style lang="css">
.message{
  width: 100%;
}

.message .info{
  background-color: #6FCC49;
  color: #fff;
  padding: 15px;
  text-align: center;
}

.message .state{
  font-size: 18px;
  font-weight: bold;
}


.message .controller{
  margin-top: 120px;
  padding: 10px;
  font-size: 14px;
}
</style>
