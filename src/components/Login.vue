<template>
	<el-row>
		<el-col :span="6" :offset="9" id="panel-header" class="panel-header">
			<el-form :model="myform" :rules="checkRules" label-position="left" label-width="0px" >
				<h3 class="title">系统登录</h3>
				<el-form-item prop="account">
					<el-input type="text" v-model="myform.account" auto-complete="off" placeholder="账号"></el-input>
				</el-form-item>
				<el-form-item prop="checkPass">
					<el-input type="password" v-model="myform.password" auto-complete="off" placeholder="密码"></el-input>
				</el-form-item>
				<el-form-item style="width:100%;">
					<el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit">登录</el-button>
				</el-form-item>
			</el-form>
		</el-col>
	</el-row>
</template>

<script>
  export default {
    data() {
      return {
        myform: {
          account: '',
          password: ''
        },
        checkRules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        },
        checked: true
      };
    },
    methods: {
      handleReset() {
        this.$refs.myform.resetFields();
      },
      handleSubmit(ev) {
        var that = this;
        this.$refs.myform.validate((valid) => {
        	// TODO: 异步提交表单验证
			if (valid) {
				that.$router.replace('/');
			} else {
				console.log('error submit!!');
				return false;
			}
        });
      }
    }
  }
</script>



