<template>
  <div class="publish">
    <div class="default">
      <img src="../assets/icon2.png">
      <p>Oops!<br/>您还没有发布任何拍卖!</p>
    </div>
    <div class="default guid">
      <p><br/></p>
      <p><br/></p>
      <p>您可以通过“立即发布”<br/>发布一个拍卖<br/><br/><mt-button type="primary" size="normal" @click="checkUserSign">立即发布</mt-button></p>
    </div>
    
    <!-- 手机认证部分 -->
    <mt-popup class="popup" v-model="telCheck.visible" position="bottom">
      <p>完善您的联系方式</p>
      <div class="popup-but">
        <div class="popup-but-left">
          <div class="popup-but-content">
            <input type="text" name="tel" placeholder="输入手机号" v-model="telCheck.tel" @input="handelTelChange"/>
          </div>
        </div>
        <div class="popup-but-right">
          <img v-if="!telCheck.active" src="../assets/icon4.png"  width="45" />
          <img v-if="telCheck.active"src="../assets/icon5.png" width="45" @click="handleTelValid"/>
        </div>
        <div class="clear"></div>
      </div>
    </mt-popup>

    <mt-popup class="popup popup2" v-model="codeCheck.visible" position="bottom">
      <p>验证码已发送至{{telCheck.tel}}</p>
      <div class="popup-but">
        <div class="popup-but-left">
          <div class="popup-but-content">
            <input type="text" name="code" placeholder="输入验证码" v-model="codeCheck.code" @input="handelCodeChange"/>
          </div>
        </div>
        <div class="popup-but-right">
          <img v-if="!codeCheck.active" src="../assets/icon4.png" width="45" />
          <img v-if="codeCheck.active" src="../assets/icon13.png" width="45" @click="handleCodeValid"/>
        </div>
        <div class="popup-but-center">
            <span class="repeat" v-if="!codeCheck.active" >60秒后可重发</span>
            <span class="repeat repeat-blue" v-if="codeCheck.active" >重发验证码</span>
        </div>
        <div class="clear"></div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import config from '../config'

export default {
  name: 'my-publish-auction',
  data () {
    return {
      telCheck:{
        tel: '',
        visible: false,
        active: false,
      },
      codeCheck:{
        code: '',
        visible: false,
        active: false,
      }
    }
  },
  methods: {
    /**
     * [checkUserSign description]
     * @return {[type]} [description]
     */
    checkUserSign: function(){
      var that = this;
      var url = config.service + '/user/checkUserSign';
      this.$http.post(url, {}).then(res => {
        if(res.body.status){
          // 跳转到发布协议
          console.log("-> 跳转到发布协议");
          that.$router.push('/publish/protocol?src=1');
        }else{
          // 引导认证
          console.log("-> 引导认证");

          that.telCheck.visible = true;
        }
      }, res => {
        console.log('error:', res);
      });
    },
    handelTelChange: function(){
      if(/^(1(([3,8][0-9])|(4[5,7])|(5[^4])|(7[0,6,7,8])))\d{8}$/.test(this.telCheck.tel)){ 
        this.telCheck.active = true;
      }else{
        this.telCheck.active = false;
      }
    },
    handleTelValid: function(){
      var that = this;
      // 验证手机号有效性，并发送验证码
      if(/^(1(([3,8][0-9])|(4[5,7])|(5[^4])|(7[0,6,7,8])))\d{8}$/.test(this.telCheck.tel)){ 
        var url = config.service + '/user/verify';
        this.$http.post(url, {mobile:this.telCheck.tel}).then(res => {
          if(res.body.status){
            that.telCheck.visible = false;
            that.codeCheck.visible = true;
          }else{
            that.$toast(res.body.info);
          }
        }, res => {
          console.log('error:', res);
        });
      }
    },
    handelCodeChange: function(){
      if(/\d{6}$/.test(this.codeCheck.code)){
        this.codeCheck.active = true;
      }else{
        this.codeCheck.active = false;
      }
    },
    handleCodeValid: function(){
      var that = this;
      // TODO: 检查验证码有效性，有效则绑定账号
      var url = config.service + '/user/account';
        this.$http.post(url, {mobile:this.telCheck.tel, code:this.codeCheck.code}).then(res => {
        that.$toast(res.body.info);
        if(res.body.status){
          that.telCheck.visible = false;
          that.codeCheck.visible = false;

          that.$router.push('/publish/protocol?src=1');
        }
      }, res => {
        console.log('error:', res);
      });
    }
  }
}
</script>
