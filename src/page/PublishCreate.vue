<template>
	<div>
		<!-- 创建我的拍卖 -->
		<div class="auction-header auction-navi">
      <div class="icon"><img src="../assets/icon6.png" width="45" /></div>
      <div class="title">拍品信息</div>
      <div class="subtitle">编辑标题及图文介绍</div>
      <div class="nav">
        <img width="55" src="../assets/icon4.png" @click="onSave">
      </div>
    </div>
    <div class="auction-shadow"></div>
    <div class="auction-body auction-body-create">
      <form id="myform" method="post" @submit.prevent="onSave">
        <p class="title">拍卖标题</p>
        <p>
          <mt-field placeholder="必填" v-model="myform.title"></mt-field>
        </p>
        <div class="line"></div>

        <p class="title">文字介绍</p>
        <p>
          <mt-field placeholder="必填" type="textarea" rows="4" v-model="myform.intro"></mt-field>
        </p>
        <div class="line"></div>

        <p class="title">图片介绍</p>
        <p>
          <ul class="upload">
            <li v-for="item in myform.album">
              <img :src="item"  width="80">
            </li>
            <li><img src="../assets/icon14.png" width="80" @click="onTriggerUpload"></li>
          </ul>
          <input type="file" id="file" @change="onUpload">
        </p>
      </form>
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
      msg: 'This is auction list page.',
      myform: {
        title: '',
        intro: '',
        album: []
      }
    }
  },

  methods:{
    
    /**
     * 触发上传
     * @return {[type]} [description]
     */
    onTriggerUpload: function(){
      if(this.myform.album.length<9){
        document.getElementById("file").click();
      }
    },
    /**
     * 上传图片
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */
    onUpload: function(e){
      var formData = new FormData();
      formData.append("file", e.target.files[0]);
      
      var that = this;
      var url = config.service + '/media/images';
      this.$http.post(url, formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      }).then(res=>{
        if(res.body.status){
          that.myform.album.push(res.body.data.image);
          console.log(res);
        }
      }, res=>{
        that.$toast(res.body.info);
      });
    },
    /**
     * 保存表单
     * @return {[type]} [description]
     */
    onSave: function(){
      var that = this;
      var url = config.service + '/auction/save';
      this.$http.post(url, this.myform).then(res => {
        if(res.body.status){
          this.$router.push("/publish/rule?id="+res.body.data.id);
        }else{
          that.$toast(res.body.info);
        }
      }, res => {
        that.$toast(res.body.info);
      });
    }

  }
}
</script>
