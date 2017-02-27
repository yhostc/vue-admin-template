<template>
  <div>
    <div class="my-tips">
      共参加了3个拍卖，2个正在进行
    </div>
    <el-row class="my-title">
      正在拍卖
    </el-row>
    <!-- 循环开始 -->
    <el-row class="my-row">
      <el-col :span="7">
        <img src="../assets/user.jpg" />
      </el-col>
      <el-col :span="17" class="my-info">
        <el-row class="name">标题名称最多15个字符</el-row>
        <el-row class="text">
          <el-col :span="2" :offset="1"><img class="icon" src="../assets/icon-business.png"></el-col>
          <el-col :span="5">当前价<span class="yen">&yen;800</span></el-col>
          <el-col :span="5">加价额<span class="yen">&yen;100</span></el-col>
          <el-col :span="2"><span class="line"></span></el-col>
          <el-col :span="2"><img class="icon" src="../assets/icon-time.png"></el-col>
          <el-col :span="7">尚未开始<span class="time">32分钟</span></el-col>
        </el-row>
        <el-row class="msg">
          我的出价被超越 > 
        </el-row>
      </el-col>
    </el-row>
    <!-- 循环结束 -->
    <!-- 循环开始 -->
    <el-row class="my-row">
      <el-col :span="7">
        <img src="../assets/user.jpg" />
      </el-col>
      <el-col :span="17" class="my-info">
        <el-row class="name">标题名称最多15个字符</el-row>
        <el-row class="text">
          <el-col :span="2" :offset="1"><img class="icon" src="../assets/icon-business.png"></el-col>
          <el-col :span="5">当前价<span class="yen">&yen;800</span></el-col>
          <el-col :span="1"><span class="line"></span></el-col>
          <el-col :span="2"><img class="icon"  src="../assets/icon-time.png"></el-col>
          <el-col :span="6">当前落槌<span class="time1">2/3</span></el-col>
          <el-col :span="5">倒计时<span class="time1">15秒</span></el-col>
        </el-row>
        <el-row class="msg msg1">
          我的出价最高8800 > 
        </el-row>
      </el-col>
    </el-row>
    <!-- 循环结束 -->



    <el-row class="my-title">
      拍到的
    </el-row>
    <!-- 循环开始 -->
    <el-row class="my-row">
      <el-col :span="7">
        <img src="../assets/user.jpg" />
      </el-col>
      <el-col :span="17" class="my-info">
        <el-row class="name">标题名称最多15个字符</el-row>
        <el-row class="text">
          <el-col :span="3" :offset="4"><img class="icon" src="../assets/icon-business.png"></el-col>
          <el-col :span="7"><span class="complete">已拍到</span></el-col>
          <el-col :span="2"><span class="line"></span></el-col>
          <el-col :span="7">成交价<span class="time time2">32分钟</span></el-col>
        </el-row>
      </el-col>
    </el-row>
    <!-- 循环结束 -->
  </div>
</template>

<script>
export default {
  name: 'AuctionMy',
  data () {
    return {
      title: '我的参拍'
    }
  }
}
</script>


<style>
.my-tips{
  font-size: 16px;
  text-align: center;
  padding: 18px 0;
}
.my-title{
  font-size: 12px;
  padding: 5px;
  background: linear-gradient(#d4d4d4, #fff);
  color: #6FCC49;
}
.my-row .name{
    font-size: 16px;
    padding: 6px 4px;
}
.my-row{
  border: solid #d4d4d4 1px;
  margin-top: -1px;
}
.my-row .text{
  margin: 4px 0px;
}
.my-row .yen{
  display: block;
  color: red;
  font-size: 14px;
  font-weight: bold;
}
.my-row .icon{
    margin: 10px 0;
}
.my-row .time{
  display: block;
  color: #0090F7;
  font-size: 14px;
  font-weight: bold;
}
.my-row .time2{
  color: #6FCC49;
}
.my-row .line{
  display: block;
  border-left: solid 1px #CCC;
  margin: 6px 0;
  height: 20px;
}
.my-row .msg{
  font-size: 14px;
  padding: 4px 10px 4px 0;
  text-align: right;
  background-color: #FF3A00;
  color: #fff;
}
.my-row .msg1{
  background-color: #0090F7;
}
.my-row .complete{
  color: #6FCC49;
  font-weight: bold;
  font-size: 16px;
  margin-top: 10px;
  display: block;
}

</style>


