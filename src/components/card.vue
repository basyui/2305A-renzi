<template>
	<div class='application'>
		<div class="card-body">
			<div class="headertitle">
				流程申请
			</div>
			<div class="sidenav">
				<div class="side-ite">加班离职</div>
				<div class="side-ite">请假调休</div>
				<div class="side-ite">审批列表</div>
				<div class="side-ite">我的信息</div>
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
.application {
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
.sidenav{
	padding: 30px 0 12px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.side-ite{
    /* height: 50px; */
		color: #777;
    background-color: transparent;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 195px;
    height: 70px;
    text-align: center;
    line-height: 70px;
    margin: 10px 0;
    font-size: 18px;
}
</style>
