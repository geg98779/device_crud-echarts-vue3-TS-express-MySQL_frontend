<template>
	<div class="common-layout">
		<el-container>
			<el-aside width="200px">
				<el-menu class="el-menu-vertical-demo" router>
					<div class="title">CRUD-设备管理系统</div>
					<el-menu-item index="home">
						<el-icon>
							<House />
						</el-icon>
						<span>首页</span>
					</el-menu-item>
					<el-menu-item index="2">
						<el-icon>
							<Document />
						</el-icon>
						<span>系统概览</span>
					</el-menu-item>
					<el-sub-menu index="3">
						<template #title>
							<el-icon>
								<User />
							</el-icon>
							<span>用户管理</span>
						</template>
						<el-menu-item-group title="管理员管理">
							<el-menu-item index="3-1">产品管理员</el-menu-item>
							<el-menu-item index="3-2">用户管理员</el-menu-item>
							<el-menu-item index="3-3">消息管理员</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="员工管理">
							<el-menu-item index="3-4">用户列表</el-menu-item>
						</el-menu-item-group>
					</el-sub-menu>
					<el-sub-menu index="4">
						<template #title>
							<el-icon>
								<TakeawayBox />
							</el-icon>
							<span>产品管理</span>
						</template>
						<el-menu-item-group title="入库管理">
							<el-menu-item index="4-1">产品列表</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="出库管理">
							<el-menu-item index="4-2">用户列表</el-menu-item>
						</el-menu-item-group>
					</el-sub-menu>
					<el-sub-menu index="5">
						<template #title>
							<el-icon>
								<ChatDotRound />
							</el-icon>
							<span>消息管理</span>
						</template>
						<el-menu-item-group title="消息管理">
							<el-menu-item index="5-1">消息列表</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="回收站">
							<el-menu-item index="5-2">回收站</el-menu-item>
						</el-menu-item-group>
					</el-sub-menu>
					<el-menu-item index="6">
						<el-icon>
							<CircleCheck />
						</el-icon>
						<span>合同管理</span>
					</el-menu-item>
					<el-menu-item index="7">
						<el-icon><icon-menu /></el-icon>
						<span>操作日志</span>
					</el-menu-item>
					<el-menu-item index="8">
						<el-icon><icon-menu /></el-icon>
						<span>登录日志</span>
					</el-menu-item>
					<el-menu-item index="9">
						<el-icon>
							<tools />
						</el-icon>
						<span>系统设置</span>
					</el-menu-item>

				</el-menu>
			</el-aside>
			<el-container>
				<el-header>
					<span class="header-left-content">尊敬的 王总 欢迎您登录本系统</span>
					<div class="header-right-content">
						<el-icon>
							<Message />
						</el-icon>
						<el-avatar :size="24" :src="circleUrl" />
						<el-dropdown>
							<span class="el-dropdown-link">
								设置
							</span>
							<template #dropdown>
								<el-dropdown-menu>
									<el-dropdown-item>设置账号</el-dropdown-item>
									<el-dropdown-item>更改头像</el-dropdown-item>
									<el-dropdown-item @click="goLogin">退出登录</el-dropdown-item>
								</el-dropdown-menu>
							</template>
						</el-dropdown>
					</div>
				</el-header>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script lang='ts' setup>
	import {
		Menu as IconMenu,
	} from '@element-plus/icons-vue'
	import { useRouter } from 'vue-router';
	import {
		reactive,
		toRefs,
		ref,
	} from 'vue'
	const router = useRouter()
	const state = reactive({
		circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
	})

	const {
		circleUrl,
	} = toRefs(state)
	
	const goLogin = ()=>{
		router.push('/login')
	}
</script>

<style lang="scss" scoped>
	.el-aside {
	height: 100vh;
	background: #2b303b;
	width: 210px;
	overflow-x: hidden;

	.el-menu {
	background: #2b303b;
	width: 210px;
	height: 100vh;
	border-right: 0px;
	}

	.title {
	padding: 20px;
	display: flex;
	justify-content: center;
	color: #fff;
	background: #2b303b;
	}

	.el-menu-item {
	color: #fff;
	}

	}

	.el-header{
	display: flex;
	height: 55px;
	background: #262f3e;
	color: #c1c6c8;
	align-items: center;
	justify-content: space-between;

	.header-left-content{
	font-size: 16px;
	}
	.header-right-content{
	width: 160px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	}
	}

	.el-menu-item:hover {
	background: #006eff;
	}

	:deep(.el-sub-menu__title:hover) {
	background: #006eff;
	}

	:deep(.el-sub-menu__title) {
	color: #fff;
	}

	:deep(.el-menu--inline) {
	background: #2b303b;
	}
</style>