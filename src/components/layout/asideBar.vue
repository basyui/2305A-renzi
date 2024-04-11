<template>
	<div class='aside'>
		<!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
			<el-radio-button :label="false">展开</el-radio-button>
			<el-radio-button :label="true">收起</el-radio-button>
		</el-radio-group> -->
		<div class="log">
			<img src="../../assets/common/logo.png" alt="">
		</div>

		<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
			:collapse="isCollapse">
			<el-menu-item index="1">
				<i class="el-icon-s-platform ico"></i>
				<span slot="title">首页</span>
			</el-menu-item>
			<el-menu-item index="2">
				<i class="el-icon-menu ico"></i>
				<span slot="title">组织架构</span>
			</el-menu-item>
			<el-menu-item index="3">
				<i class="el-icon-user-solid ico"></i>
				<span slot="title">员工</span>
			</el-menu-item>
			<el-menu-item index="4">
				<i class="el-icon-setting ico"></i>
				<span slot="title">公司设置</span>
			</el-menu-item>
			<el-menu-item index="5">
				<i class="el-icon-setting ico"></i>
				<span slot="title">权限设置</span>
			</el-menu-item>
			<el-menu-item index="6">
				<i class="el-icon-menu ico"></i>
				<span slot="title">社保</span>
			</el-menu-item>
			<el-menu-item index="7">
				<i class="el-icon-document-copy ico"></i>
				<span slot="title">考勤</span>
			</el-menu-item>
			<el-menu-item index="8">
				<i class="el-icon-s-finance ico"></i>
				<span slot="title">工资</span>
			</el-menu-item>
			<el-menu-item index="9">
				<i class="el-icon-document ico"></i>
				<span slot="title">审批</span>
			</el-menu-item>
		</el-menu>

	</div>
</template>

<script>

export default {
	name: "asideBar",
	components: {},
	data() {
		return {
			isCollapse: false
		};
	},
	computed: {},
	watch: {},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		}
	},
}
</script>

<style scoped>
.aside {
	background-color: #4777fa;
	height: 100vh;
	background-image: url('../../assets/common/leftnavBg.png') ;
	/* background-size: 100% 100%; */
	background-repeat: no-repeat;
	background-position: bottom;
}
.log{
	width: 100%;
	text-align: center;
	padding: 10px;
	box-sizing: border-box;
}
</style>
<style>
.el-menu-item {
	background-color: #4777fa;
	color: white;
}
.ico{
	color: white!important;
}
:hover.el-menu-item {
	color: #4777fa;
	background-color: #ffffff6e;
}
.el-menu{
	border: 0;
}
</style>
