<template>
  <div class="row">
    <div class="user">
      <div class="user-blue"></div>
      <div class="user-shade"></div>
      <div class="user-nickname">UserName</div>
      <div class="user-sign"><span>未认证用户</span></div>
      <div class="user-avatar">
        <img  src="../assets/user.jpg" />
      </div>
    </div>

    <div>
      <div class="sign" @click="handleClick">
        <img class="sign-icon" src="../assets/icon1.png">
        <span class="sign-state">未认证</span>
      </div>
    </div>
    <div class="logo-background">
      <img src="../assets/logo-background.png" />
    </div>

    <mt-popup class="popup" v-model="popupVisible" position="bottom">
      <p>完善您的联系方式</p>
      <p>
        <input type="text" name="tel" placeholder="输入手机号" v-model.lazy="tel" @input="handelChange"/>
          <img v-if="!isActive" src="../assets/icon4.png" height="36" width="36" />
          <img v-if="isActive"src="../assets/icon5.png" height="36" width="36" @click="handleValid"/>
      </p>
    </mt-popup>

    <mt-popup class="popup popup2" v-model="popup2Visible" position="bottom">
      <p>验证码已发送至{{tel}}</p>
      <p>
        <input type="text" name="code" placeholder="输入验证码" v-model="code" @input="handelChange2"/>
        <span class="repeat">60秒后可重发</span>
          <img v-if="!isActive2" src="../assets/icon4.png" height="36" width="36" />
          <img v-if="isActive2"src="../assets/icon5.png" height="36" width="36" @click="handleValid2"/>
      </p>
    </mt-popup>
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      popupVisible: false,
      popup2Visible: false,
      isActive: false,
      isActive2: false,
      tel: '',
      code: ''
    }
  },
  methods: {
    handleClick: function(){
      // TODO: 异步验证是否已经认证，再打开弹出层
      this.popupVisible = true;
    },
    handelChange: function(){
      console.log(this.tel);
      this.isActive = this.tel ? true : false;
    },
    handleValid: function(){
      // TODO:验证手机号有效性，并发送验证码
      if(this.tel){
        this.popupVisible = false;
        this.popup2Visible = true;
      }
    },
    handelChange2: function(){
      this.isActive2 = this.code ? true : false;
    },
    handleValid2: function(){
      // TODO: 检查验证码有效性，有效则绑定账号
    }
  }
}
</script>



<style>
.popup{
  width: 100%;
  height: 260px;
  padding-left: 10px;
  background-color: #F5F5F5;
}
.popup input{
  width: 70%;
  height: 25px;
  padding: 5px;
  float: left;
  border: none;
  background: transparent;
  border-bottom: solid #616161 2px;
  margin: 5px 10px;
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

.popup2 input{
  width: 30%;
}
.popup2 .repeat{
    display: inline-block;
    padding: 10px 20px;
    border-radius: 20px;
    background-color: #9E9E9E;
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


