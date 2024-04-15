<template>
	<div class='count'>
		<el-table :data="tableData" sortable  border style="width: 100%">
			<el-table-column   type="index"   label="序号" width="150">
			</el-table-column>
			<el-table-column prop="name"  sortable label="姓名" width="150">
			</el-table-column>
			<el-table-column prop="province"  sortable label="手机号" width="150">
			</el-table-column>
			<el-table-column prop="city"  sortable label="工号" width="150">
			</el-table-column>
			<el-table-column prop="address"  sortable label="聘用形势" width="150">
			</el-table-column>
			<el-table-column prop="zip"  sortable label="部门" width="150">
			</el-table-column>
			<el-table-column prop="zip"  sortable label="入职时间" width="150">
			</el-table-column>
			<el-table-column prop="zip"  sortable label="是否在职" width="150">
			</el-table-column>
			<el-table-column prop="zip"  sortable label="状态" width="150">
			</el-table-column>
			<el-table-column fixed="right" label="操作" width="230">
				<template slot-scope="scope">
					<el-button type="text" size="small">查看</el-button>
					<el-button type="text" size="small">转正</el-button>
					<el-button type="text" size="small">调岗</el-button>
					<el-button type="text" size="small">离职</el-button>
					<el-button type="text" size="small">角色</el-button>
					<el-button type="text" size="small">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
	</div>
</template>

<script>

export default {
	components: {},
	data() {
		return {
			tableData: [{
				date: '2016-05-02',
				name: '王小虎',
				province: '上海',
				city: '普陀区',
				address: '上海市普陀区金沙江路 1518 弄',
				zip: 200333
			}, {
				date: '2016-05-04',
				name: '王小虎',
				province: '上海',
				city: '普陀区',
				address: '上海市普陀区金沙江路 1517 弄',
				zip: 200333
			}, {
				date: '2016-05-01',
				name: '王小虎',
				province: '上海',
				city: '普陀区',
				address: '上海市普陀区金沙江路 1519 弄',
				zip: 200333
			}, {
				date: '2016-05-03',
				name: '王小虎',
				province: '上海',
				city: '普陀区',
				address: '上海市普陀区金沙江路 1516 弄',
				zip: 200333
			}]
		};
	},
	computed: {},
	watch: {},
	methods: {
		handleClick(row) {
			console.log(row);
		}
	},
}
</script>

<style scoped>
.count{
	background-color: #fff;
	padding: 20px;
	box-sizing: border-box;
	border-radius: 10px;
	margin-top: 20px;
}
</style>

<style>
.el-table{
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
	margin-top: 20px;
	border-radius: 10px;
	background-color: #fff;
}
.el-table__fixed-right {
    top: 20px;
    left: auto;
    right: 0;
}
.el-pagination{
	text-align: right;
	margin-top: 10px;
}
</style>
