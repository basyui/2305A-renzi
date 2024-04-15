<template>
	<div class='help'>
		<div class="card-body">
			<div class="headertitle">
				帮助链接
			</div>
			<div class="sidenav">
				<div class="sid-it">
					<div class="it-img t1"></div>
					<div class="txt">入门指南</div>
				</div>
				<div class="sid-it">
					<div class="it-img t2"></div>
					<div class="txt">在线帮助手册</div>
				</div>
				<div class="sid-it">
					<div class="it-img t3"></div>
					<div class="txt">联系技术支持</div>
				</div>
			</div>
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
.help {
	margin-top: 20px;
	padding: 5px 10px;
	background-color: #fff;
	box-sizing: border-box;
	border-radius: 10px;
	width: 100%;
	border: 1px solid #ebeef5;
	box-shadow: 0px 0px 20px 0px #d3d3d3;
	/* height: 425px; */
	overflow: hidden;
	color: #303133;
}
.sid-it{
	display: flex;
	flex-direction: column;
	align-items: center;
	/* margin-bottom: 20px; */
}
.it-img{
	width: 76px;
	height: 76px;
	background-color: #8a97f8;
}

.card-body {
	padding: 20px;
	box-sizing: inherit;
}

.headertitle {
	border-bottom: 4px solid #8a97f8;
	padding-bottom: 10px;
	color: #2c3e50;
	font-size: 24px;
	width: 96px;
	height: 41px;
}

.sidenav {
	padding: 30px 0 12px;
	display: flex;
	/* flex-wrap: wrap; */
	justify-content: space-around;
}
.t1{
	background: url(../assets//common/icon.png) no-repeat  6px -6px;
}
.t2{
	background: url(../assets//common/icon.png) no-repeat -222px -6px;
}
.t3{
	background: url(../assets//common/icon.png) no-repeat -460px -1px;
}
</style>
