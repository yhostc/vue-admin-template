<template>
	<div class="auction-detail">
		<div class="auction-header">
      <span>已有18个拍卖</span>   <mt-button type="primary" size="small">发布新拍卖</mt-button>
    </div>

    <div class="auction-shadow"></div>
    <div class="auction-body">
      <p>自家大棚15日出货</p>
      <p>内容详情内容详情内容详情内容详情内容详情……内容详情内容详情内容详情内容详情……内容详情内容详情内容详情……</p>
      <div class="swipe">
        <mt-swipe :auto="4000">
          <mt-swipe-item>1</mt-swipe-item>
          <mt-swipe-item>2</mt-swipe-item>
          <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="tab">
        <a @click="active='tab-container1'">当前参拍<span>50</span></a>
        <a @click="active='tab-container2'">当前出价<span>23</span></a>
      </div>
      <div class="tab-container">
        <mt-tab-container v-model="active">
          <mt-tab-container-item id="tab-container1">
            <ul class="auction-userlist">
              <li>
                <div class="avatar"><img width="35" src="../assets/user.jpg"></div>
                <div class="user">UserName<br/>18600000000</div>
                <div class="time">20分钟前</div>
              </li>
              <li>
                <div class="avatar"><img width="35" src="../assets/user.jpg"></div>
                <div class="user">UserName<br/>18600000000</div>
                <div class="time">20分钟前</div>
              </li>
              <li>
                <div class="avatar"><img width="35" src="../assets/user.jpg"></div>
                <div class="user">UserName<br/>18600000000</div>
                <div class="time">20分钟前</div>
              </li>
            </ul>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container2">
            <ul class="auction-userlist">
              <li>
                <div class="avatar"><img width="35" src="../assets/user.jpg"></div>
                <div class="user">UserName<br/>18600000000</div>
                <div class="time">20分钟前</div>
                <div class="price">出价<span>&yen;8800</span></div>
              </li>
              <li>
                <div class="avatar"><img width="35" src="../assets/user.jpg"></div>
                <div class="user">UserName<br/>18600000000</div>
                <div class="time">20分钟前</div>
                <div class="price">出价<span>&yen;8800</span></div>
              </li>
              <li>
                <div class="avatar"><img width="35" src="../assets/user.jpg"></div>
                <div class="user">UserName<br/>18600000000</div>
                <div class="time">20分钟前</div>
                <div class="price">出价<span>&yen;8800</span></div>
              </li>
            </ul>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Auction',
  data () {
    return {
      active: 'tab-container1'
    }
  },
  methods: function(){

  },
  created: function(){
    
  }
}
</script>


<style lang="css">
.auction-body .swipe{
  height: 150px;
  border: red solid 1px;
}

.auction-body .tab{
  margin: 10px 0;
  box-shadow: 2px 0px 8px #888888;
}
.auction-body .tab a{
  display: inline-block;
  width: 49%;
  text-align: center;
  padding: 5px 0;
}
.auction-body .tab a span{
  display: block;
}
.auction-body .tab a:hover{
  color: #000;
  border-bottom: #6FCC49 solid 3px;
}

.auction-userlist{
  padding: 0;
  list-style: none;
}
.auction-userlist li{
  padding: 5px 0;
  border-bottom: #D7D7D7 solid 1px;
}
.auction-userlist li div{
  display: inline-block;
  vertical-align: top;
  height: 40px;
}
.auction-userlist .avatar{

}
.auction-userlist .user{
  color: #000;
  line-height: 18px;
}
.auction-userlist .price, .auction-userlist .time{
  padding: 0px 10px;
  float: right;
}
.auction-userlist .price span{
  color: red;
  display: block;
  font-weight: bold;
}
.auction-userlist .time{
  line-height: 30px;
}

</style>
