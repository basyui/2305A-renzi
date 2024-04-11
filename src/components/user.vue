<template>
	<div class='userInfo'>
		<div class="Avatar">
			<img src="../assets/common/head.jpg" alt="">
		</div>
		<div class="info">
			<h2>早安，管理员，祝你开心每一天！</h2>
			<p>管理员 | 传智播客-总裁办</p>
		</div>
	</div>
</template>

<script>

export default {
	components: {},
	data() {
		return {

		};
	},
	computed: {},
	watch: {},
	methods: {

	},
}
</script>

<style scoped>
.userInfo {
	background-color: #fff;
	display: flex;
	align-items: center;
	border-radius: 10px;
	padding: 20px;
	border: 1px solid #ebeef5;
	box-shadow: 0px 0px 20px 0px #d3d3d3;
}
.Avatar{
	margin-right: 20px;
}
.info h2 {
	font-weight: normal;
	font-size: 24px;
	margin-bottom: 15px;
}
.info p{
	font-size: 20px;
    color: #7f8c8d;
}
</style>
