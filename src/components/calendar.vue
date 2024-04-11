<template>
	<div class='date'>
		<div class="tit">
			工作日历
		</div>
		<hr color="#ebeef5">
		<el-calendar v-model="value">
		</el-calendar>
	</div>
</template>

<script>

export default {
	components: {},
	data() {
		return {
			value: new Date()
		};
	},
	computed: {},
	watch: {},
	methods: {

	},
}
</script>

<style scoped>
.date {
	background-color: #fff;
	box-sizing: border-box;
	border-radius: 10px;
	padding: 5px 10px 40px;
	width: 100%;
	border: 1px solid #ebeef5;
	box-shadow: 0px 0px 20px 0px #d3d3d3;
	/* height: 425px; */
}

.tit {
	color: #2c3e50;
	font-size: 24px;
	padding: 18px 20px;
}
</style>
<style>
.el-calendar {
	/* height: 100px; */
	box-sizing: border-box;
}

.el-calendar-table .el-calendar-day {
	box-sizing: border-box;
	padding: 8px;
	height: 35px;
}
</style>
