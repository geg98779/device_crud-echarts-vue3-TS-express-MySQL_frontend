<template>
	<div class="common-layout">
		<el-container>
			<el-header class="header-wrapped">
				<div class="header-content">
					<h3>设备管理系统</h3>
					<span class="welcome">欢迎您的登录</span>
				</div>
			</el-header>
			<el-main>
				<div class="login-wrapped">
					<el-card class="box-card">
						<el-tabs v-model="activeName" class="demo-tabs" stretch="true">
							<el-tab-pane label="登录" name="first">
								<el-form class="login-form">
									<el-form-item label="账号">
										<el-input v-model="loginData.account" placeholder="请输入账号" />
									</el-form-item>
									<el-form-item label="密码">
										<el-input v-model="loginData.password" placeholder="请输入密码" />
									</el-form-item>
									<div class="footer-wrapped">
										<div class="forget-password">
											<span class="forget-password-button" @click="openForget">忘记密码</span>
										</div>
										<div class="footer-button">
											<el-button type="primary" @click="Login">登录</el-button>
										</div>
										<div class="footer-go-register">
											还没有账号？<span class="go-register">马上注册</span>
										</div>
									</div>
								</el-form>
							</el-tab-pane>
							<el-tab-pane label="注册" name="second">
								<el-form class="login-form">
									<el-form-item label="账号">
										<el-input v-model="registerData.account" placeholder="账号长度需6-12位" />
									</el-form-item>
									<el-form-item label="密码">
										<el-input v-model="registerData.password" placeholder="请输入密码" />
									</el-form-item>
									<el-form-item label="确认密码">
										<el-input v-model="registerData.repassword" placeholder="请再次输入密码" />
									</el-form-item>
									<div class="footer-button">
										<el-button type="primary" @click="Register">注册</el-button>
									</div>
								</el-form>
							</el-tab-pane>
						</el-tabs>
					</el-card>
				</div>
			</el-main>
			<el-footer class="footer-wrapped">
				<div class="footer-content">
					<div class="title">
						<span>crud项目</span> |
						<span>设备管理系统</span> |
						<span>vue3+nodejs</span>
					</div>
				</div>
			</el-footer>
		</el-container>
	</div>
	<forget ref="forgetP"></forget>
</template>

<script lang="ts" setup>
	import { ref, reactive } from 'vue'
	import { login, register } from '@/api/login.js'
	import { ElMessage } from 'element-plus'
	import forget from './components/forget_password.vue';
	import { useRouter } from 'vue-router';
	const activeName = ref('first')
	const router = useRouter()
	interface formData {
		account : number;
		password : string;
		repassword ?: string;
	}

	const loginData : formData = reactive({
		account: null,
		password: '',

	})

	const registerData : formData = reactive({
		account: null,
		password: '',
		repassword: '',
	})

	//登录
	const Login = async () => {
		const res = await login(loginData)
		const { token } = res.data
		if (res.data.message === "登录成功") {
			ElMessage({
				message: '登录成功',
				type: 'success',
			})
			localStorage.setItem('token',token)
			//登录成功后 页面会跳转到首页
			console.log('准备跳转到/home') // 调试日志
			  await router.push('/home') // 添加await
			  console.log('跳转完成') // 确认是否执行到这里
		} else {
			ElMessage.error('登录失败')
		}
	}

	//注册
	const Register = async () => {
		if (registerData.password === registerData.repassword) {
			const res = await register(registerData)
			if (res.data.message === '注册账号成功') {
				ElMessage({
					message: '注册成功',
					type: 'success',
				})
				activeName.value = 'first'
			} else {
				ElMessage.error('注册失败，请检查数据是否正确')
			}
		} else {
			ElMessage.error('注册失败')
		}

	}

	const forgetP = ref()

	const openForget = () => {
		forgetP.value.open()
	}
</script>

<style lang="scss" scoped>
	.header-wrapped {
		.header-content {
			width: 1200px;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.welcome {
				font-size: 13px;
			}
		}
	}

	.el-main {
		background-image: url('@/assets/bg.jpg');
		height: 1000px;
		background-repeat: no-repeat;
		--el-main-padding: 0;

		.login-wrapped {
			width: 1200px;
			height: 600px;
			margin: 0 auto;

			.box-card {
				width: 350px;
				height: 375px;
				float: right;
				position: relative;
				top: 14%;

				.login-form {
					.footer-wrapped {
						display: flex;
						flex-direction: column;
					}

					.forget-password {
						display: flex;
						justify-content: flex-end;
						margin: 10px 0;

						.forget-password-button {
							font-size: 12px;
							color: #409eff;
							cursor: pointer;
						}
					}

					.footer-button {
						width: 100%;
						display: flex;
						justify-content: center;
					}

					.footer-go-register {
						font-size: 12px;
						margin: 12px 0;
						display: flex;
						justify-content: center;

						.go-register {
							font-size: 12px;
							color: #409eff;
							cursor: pointer;
						}
					}
				}
			}
		}
	}

	.footer-wrapped {
		margin-top: 10px;

		.footer-content {
			width: 1200px;
			margin: 0 auto;
			display: flex;
			justify-content: center;

			.title {
				color: #666;
			}

			span {
				color: #666;
				font-size: 12px;
			}
		}
	}

	:deep(.el-tabs__item) {
		color: #333;
		font-size: 18px;
	}

	.el-form {
		margin-top: 30px;
	}

	:deep(.el-input_inner) {
		height: 40px;
	}

	:deep(.el-form-item_label) {
		height: 40px;
		line-height: 40px;
	}

	:deep(.el-button) {
		width: 300px;
		height: 45px;
		font-size: 16px;
	}
</style>