<template>
	<el-row class="panel">
		<el-col :span="24" id="panel-header" class="panel-header">
			<!-- 品牌展示区域开始 -->
			<div class="brand">
				<a class="logo" href="">
					<span>Admin Panel</span>
				</a>
			</div>
			<!-- 品牌展示区域结束 -->
		</el-col>
		<el-col :span="24" id="panel-body" class="panel-body">
			<!-- 左侧导航区域开始 -->
			<el-col :span="4">
				this is panel-nav
			</el-col>
			<!-- 左侧导航区域结束 -->
			<!-- 右侧内容区域开始 -->
			<el-col :span="20">
				this is panel-content
			</el-col>
			<!-- 右侧内容区域结束 -->
		</el-col>
		<el-col :span="24" id="panel-footer" class="panel-footer">
				this is panel-footer
		</el-col>
	</el-row>
</template>

<script>
export default {
	data: function(){
		return {
			msg: 'msg'
      }
	},
	methods: {

	}
}
</script>

<style>
 .panel{}

 .panel-header{
 	z-index: 200;
    background: #fff;
    min-height: 80px;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    -ms-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    margin-right: 0;
 }


.panel-header .brand{
 	float: left;
    width: 240px;
    min-height: 80px;
    padding: 0 0 0 10px;
    position: relative;
    background: #1abc9c url(https://e.wecook.cn/statics/assets/img/logo.png) no-repeat 25px 26px;
 }
 .panel-header .logo{
 	color: #fff;
    font-size: 1.7em;
    text-transform: uppercase;
    padding: 23px 0 0 57px;
    display: inline-block;
 }
</style>