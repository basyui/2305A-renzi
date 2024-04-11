<template>
	<div class=''>
		<div class="bg">
			<div class="login">
				<img class="logo" src="../assets//common//login-logo.png" alt="">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
					<el-form-item prop="mobile">
						<el-input class="a" prefix-icon="el-icon-user-solid" v-model="ruleForm.mobile"></el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input prefix-icon="el-icon-lock" show-password v-model="ruleForm.password"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="PostLogin('ruleForm')">登录</el-button>
					</el-form-item>
				</el-form>

				<div class="desc">
					仅用于IT培训教学使用，为保障您的个人信息安全，请勿向平台录入任何个人敏感信息 (如手机号、身份证号等)!
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { login } from '@/api/api'
import { setToken } from '@/utils/auth'
export default {

	components: {},
	data() {
		return {
			ruleForm: {
				mobile: '13800000002',
				password: '888itcast.CN764%...'
			},
			rules: {
				mobile: [
					{ required: true, message: '手机号不能为空', trigger: 'blur' },
				],
				password: [
					{ required: true, message: '密码不能为空', trigger: 'blur' },
				],

			}
		};
	},
	computed: {},
	watch: {},
	methods: {
		PostLogin(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					login(this.ruleForm).then(res => {
						if (res.code == 10000) {
							console.log(res);
							setToken(res.data)
							this.$message({
								message: '登陆成功.',
								type: 'success'
							});
							this.$router.replace('/index')
						} else {
							console.log(res);
							this.$message.error(res.message);
						}
					})
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		}
	},
}
</script>

<style scoped lang="scss">
.bg {
	width: 100vw;
	height: 100vh;
	background-image: url('../assets/common/login.jpg');
	// background-repeat: no-repeat;
	background-position: center;
	//background-size: 100% 100%;

	.logo {
		margin-bottom: 50px;
	}

	.login {
		padding: 0 35px !important;
		box-sizing: border-box;
		width: 520px;
		padding: 15px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;
		// align-items: center;
		justify-content: space-between;
	}
}

.desc {
	font-size: 14px;
	color: #fff;
	margin-bottom: 10px;
}

.el-button {
	// background: #407ffe;
	width: 100%;
	height: 64px;
	line-height: 32px;
	font-size: 24px;
}

.el-input,
.a {
	// border: 1px solid rgba(255, 255, 255, 0.1);
	background-color: #ffffffb9 !important;
	border-radius: 5px;
	color: #454545;
	outline: 0;
}
</style>
<style>
.el-form-item__error {
	color: #ffffff;
	font-size: 12px;
	line-height: 1;
	padding-top: 4px;
	position: absolute;
	top: 100%;
	left: 0;
}

.el-input__inner {
	-webkit-appearance: none;
	background-color: #ffffff08;
	background-image: none;
	border-radius: 4px;
	border: 1px solid #DCDFE6;
	box-sizing: border-box;
	color: #61a0ff;
	display: inline-block;
	height: 52px;
	line-height: 40px;
	outline: 0;
	padding: 0 15px;
	transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
	width: 100%;
}
</style>
