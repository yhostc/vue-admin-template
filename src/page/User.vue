<template>
  <div class="row">
    <div class="user">
      <div class="user-blue" v-bind:style="{'background-image':'url('+user.avatar+')'}"></div>
      <div class="user-shade"></div>
      <div class="user-nickname">{{user.nickname}}</div>
      <div class="user-sign">
        <span v-if="!user.mobile">未认证用户</span>
        <span v-if="user.mobile">认证用户</span>
      </div>
      <div class="user-avatar">
        <img v-bind:src="user.avatar" />
      </div>
    </div>

    <div>
      <div class="sign" @click="checkMobile">
        <img class="sign-icon" src="../assets/icon1.png">
        <span class="sign-state" v-if="!user.mobile">未认证</span>
        <span class="sign-state" v-if="user.mobile>0">{{user.mobile}}</span>
      </div>
    </div>
    <div class="logo-background">
      <img src="../assets/logo-background.png" />
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
  name: 'User',
  data () {
    return {
      user: {
        nickname: '',
        gender: '',
        avatar: '',
        mobile: null
      },
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
  mounted: function(){
    this.getUsrInfo();
  },
  methods: {
    /**
     * 微信用户登录
     * @param {String} [sid] [SESSION ID]
     * @return
     */
    getUsrInfo: function(sid){
      // 获取用户信息
      var that = this;
      var url = config.service + '/user/getUserInfo';
      this.$http.post(url, {}).then(res => {
        if(res.body.status){
          var fans = res.body.data;
          this.user = fans;

          this.$store.dispatch('UpdateUserInfo', {user:JSON.stringify(fans)});
        }
      }, res => {
        console.log('error:', res);
      });
    },
    /**
     * 手机号验证
     * @return {[type]} [description]
     */
    checkMobile: function(){
      if(!this.user.mobile){
        this.telCheck.visible = true;
      }
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
          that.user.mobile = this.telCheck.tel;
        }
      }, res => {
        console.log('error:', res);
      });
    }
  }
}
</script>



<style>
.popup{
  width: 100%;
  min-height: 140px;
  background-color: #F5F5F5;
}
.popup p{
  margin: 10px;
}
.popup input{
  width: 100%;
  height: 40px;
  line-height: 40px;
  float: left;
  border: none;
  background: transparent;
  border-bottom: solid #616161 2px;
  font-size: 16px;
}
.popup .but{
  float: left;
}
.popup .active{
  display: none;
}
.popup .button{
  display: block;
}


.popup-but{
  width: 100%;
  padding:10px;
}
.popup-but-left{
  width: 100%;
  height: auto;
}
.popup-but-center{
  width: 120px;
  height: 45px;
  float: right;
  text-align: right;
}
.popup-but-right{
  width: 45px;
  height: 45px;
  float: right;
  position: relative;
  display: inline-block;
  margin-right: 20px;
}
.popup-but-content{
  margin-right: 90px;
}

.popup2 .popup-but-content{
  margin-right: 200px;
}

.popup2 .popup-but-content input{
  width: 120px;
}

.popup2 .repeat{
    display: inline-block;
    padding: 10px;
    border-radius: 20px;
    background-color: #9E9E9E;
    color: #fff;
    font-size: 16px;
}

.popup2 .repeat-blue{
    background-color: #2196F3;
    color: #fff;
}
.popup2 img{
  vertical-align: middle;
}


.user{
  color: #fff;
  text-align: center;
  position: relative;
}

.user-blue{
  width: 100%;
  height: 157px;
  position: absolute;
  background-image: url(../assets/user.jpg);
  background-size:cover;
  background-position:center;
  filter:blur(3px);
  z-index: -2;
}

.user-shade{
  text-align: center;
  width: 100%;
  position: absolute;
  height: 157px;
  opacity: 0.9; 
  color: #fff; 
  background: rgba(0,0,0,0.8); 
  z-index: -1;
}


.user-nickname{
  padding-top: 34px;
  font-size: 16px;
  text-align: center;
}
.user-sign{
  margin: 5px 0 10px 0;
}
.user-sign span{
  border: #fff solid 1px;
  border-radius: 10px;
  padding:2px 20px;
  font-size: 12px;
}

.user-avatar{
  
}

.user-avatar img{
  width: 86px;
  height: 86px;
  margin: 0 auto;
  border-radius:50%;
  border: #fff solid 1px;
  filter: blur(1px);
}

.sign{
  height: 50px;
  line-height: 50px;
  margin: 20px 15px;
  border: #95989A solid 1px;
  border-radius: 3px;
}
.sign-icon{
  width: 30px;
  height: 30px;
  margin:10px;
}
.sign-state{
  float: right;
  margin-right: 10px;
}

.logo-background{
  position: fixed;
  width: 100%;
  text-align: center;
  bottom: 50px;
  z-index: -1;
}
</style>


