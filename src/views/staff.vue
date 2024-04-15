<template>
	<div class=''>
		<div class="Top">
			<el-button type="primary" size="mini"> 导入</el-button>
			<el-button type="primary" size="mini"> +新增</el-button>
		</div>
		<EmployeeList></EmployeeList>
	</div>
</template>

<script>
import EmployeeList from '@/components/EmployeeList.vue'
export default {
	components: {EmployeeList},
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
.Top{
	padding: 20px;
	display: flex;
	justify-content: right;
	align-items: center;
	border: 10px;
	background-color: #fff;
	border: 1px solid #ebeef5;
	box-shadow: 0px 0px 20px 0px #d3d3d3;
}
</style>
