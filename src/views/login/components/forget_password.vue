<template>
	<!-- 忘记密码 -->
	<el-dialog v-model="state.forgetPasswordDialog" title="忘记密码" width="400px">
		<el-form class="login-form" :label-position="labelPosition" :rules="rules">
			<el-form-item label="输入您的注册账号" prop="account">
				<el-input v-model="forgetData.account" placeholder="输入您的注册账号" />
			</el-form-item>
			<el-form-item label="输入您的个人邮箱" prop="email">
				<el-input v-model="forgetData.email" placeholder="输入您的个人邮箱" />
			</el-form-item>
		</el-form>
		<template #footer>
			<div class="dialog-footer">
				<el-button @click="state.forgetPasswordDialog = false">取消</el-button>
				<el-button type="primary" @click="openChangePassword">
					下一步
				</el-button>
			</div>
		</template>
	</el-dialog>
	<!-- 修改密码 -->
	<el-dialog v-model="state.changePasswordDialog" title="修改密码" width="400px">
		<el-form class="login-form" :label-position="labelPosition" :rules="rules">
			<el-form-item label="输入您的新密码" prop="password">
				<el-input v-model="forgetData.password" placeholder="输入您的新密码" />
			</el-form-item>
			<el-form-item label="再次确认您的新密码" prop="repassword">
				<el-input v-model="forgetData.repassword" placeholder="再次确认您的新密码" />
			</el-form-item>
		</el-form>
		<template #footer>
			<div class="dialog-footer">
				<el-button @click="state.changePasswordDialog = false">取消</el-button>
				<el-button type="primary" @click="state.changePasswordDialog = false">
					确定
				</el-button>
			</div>
		</template>
	</el-dialog>
</template>

<script lang="ts" setup>
	import { reactive, ref } from 'vue'

	const labelPosition = ref('top')
	interface forgetData {
		account : number;
		email : string;
		password : string;
		repassword : string;
	}
	//表单对象
	const forgetData : forgetData = reactive({
		account: null,
		email: '',
		password: '',
		repassword: '',
	})
	//表单规则
	const rules = reactive({
		account: [
			{ required: true, message: '请输入您的注册账号', trigger: 'blur' },
		],
		email: [
			{ required: true, message: '请输入您的注册邮箱', trigger: 'blur' },
		],
		password: [
			{ required: true, message: '请输入您的新密码', trigger: 'blur' },
		],
		repassword: [
			{ required: true, message: '请再次确认您的新密码', trigger: 'blur' },
		],
	})

	const state = reactive({
		forgetPasswordDialog: false,
		changePasswordDialog: false,
	})

	const open = () => {
		state.forgetPasswordDialog = true
	}
	defineExpose({
		open
	})
	//打开修改密码的弹窗
	const openChangePassword = () => {
		state.forgetPasswordDialog = false
		state.changePasswordDialog = true
	}
</script>         

<style lang="scss" scoped>
</style>