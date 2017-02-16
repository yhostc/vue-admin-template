<template>
	<el-row class="panel">
		<el-col :span="24" id="panel-header" class="panel-header">
			<!-- 品牌展示区域开始 -->
			<div class="brand">
				<a class="logo" href="">
					<span>Admin</span>
				</a>
			</div>
			<!-- 品牌展示区域结束 -->
		</el-col>
		<el-col :span="24" id="panel-body" class="panel-body">
			<!-- 左侧导航区域开始 -->
			<aside class="sidebar">
                <el-col :span="24">
                    <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark" @open="handleOpen" @close="handleClose">
                        
                        <template v-for="(item,idx) in $router.options.routes" v-if="!item.hidden">
                            <el-submenu :index="idx+''" v-if="item.children">
                                <template slot="title"><i :class="item.icon"></i> {{item.name}}</template>
                                <el-menu-item v-for="child in item.children" index="children.path" >{{child.name}}</el-menu-item>
                            </el-submenu>

                            <el-menu-item :index="item.path" v-if="!item.children"><i :class="item.icon"></i> {{item.name}}</el-menu-item>
                        </template>
<!-- 

                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-message"></i>导航一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-submenu>

                        <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
                        <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item> -->
                    </el-menu>
                </el-col>
    		</aside>
			<!-- 左侧导航区域结束 -->
			<!-- 右侧内容区域开始 -->
			<section class="panel-content">
				
			</section>
			<!-- 右侧内容区域结束 -->
		</el-col>
		<el-col :span="24" id="panel-footer" class="panel-footer">
			this is panel-footer
		</el-col>
	</el-row>
</template>

<script>


  export default {
	data() {
        console.log('this is Home');
        console.log(this.$router.options.routes);

		return {
			
    	}
	},
	methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
	},
    ready: function(){
        console.log('component is ready');
    }
}
</script>

<style>
 .panel{
 	width: 100%;
    height: 100%;
    z-index: 0;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    -ms-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
}

 .panel-header{
 	z-index: 200;
    min-height: 80px;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    -ms-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    margin-right: 0;
 }

.panel-sidebar{
	background: #293949;
}
.panel-content{
	margin-left: 240px;
    margin-right: 0;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    -ms-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    background: #f1f2f7;
    min-height: 768px;
}



.panel-header .brand{
 	float: left;
    width: 240px;
    min-height: 80px;
    padding: 0px;
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

.panel-header .logo span {
    font-weight: 700;
}

.sidebar {
    width: 240px;
    height: 100%;
    background-color: #48576a;
    position: absolute;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    -ms-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    z-index: 100;
}

</style>