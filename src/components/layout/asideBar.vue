<template>
	<div class='aside'>

		<div class="showlog">
			<img style="width: 100%;" src="../../assets/common/logo.png" alt="">
		</div>

		<el-menu default-active="1-4-1" class="el-menu-vertical-demo"
			:collapse="this.$store.state.isCollapse" router>
			<el-menu-item index="/home">
				<i class="el-icon-s-platform ico"></i>
				<span slot="title">首页</span>
			</el-menu-item>
			<el-menu-item index="/about">
				<i class="el-icon-menu ico"></i>
				<span slot="title">组织架构</span>
			</el-menu-item>
			<el-menu-item index="/staff">
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
			isCollapse: this.$store.state.isCollapse
		};
	},
	created(){
		console.log(this.$store.state.isCollapse);
	},
	computed: {},
	watch: {},
	methods: {

	},
}
</script>

<style scoped>
.aside {
	background-color: #4777fa;
	height: 100vh;
	background-image: url('../../assets/common/leftnavBg.png');
	/* background-size: 100% 100%; */
	background-repeat: no-repeat;
	background-position: bottom;
}

.showlog {
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

.ico {
	color: white !important;
}

:hover.el-menu-item {
	color: #4777fa;
	background-color: #ffffff6e;
}

.el-menu {
	border: 0;
}
</style>
