<template>
	<div class='count'>
		<div class="top-title">
			组织结构
			<div class="top-hr"></div>
		</div>
		<div class="ter-Box">
			<div class="top-btn">
				<div class="btn-l">
					<img style="width: 19px; height: 19px;margin-right: 3px;" src="../assets/common/yinhang.png" alt="">
					江苏传智播客教育科技股份有限公司
				</div>
				<div class="btn-r">
					负责人
					<el-dropdown>
						<span class="el-dropdown-link">
							操作<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>添加部门</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</div>

			<el-tree :data="data"  node-key="id" default-expand-all
				:expand-on-click-node="false">
				<span class="custom-tree-node" slot-scope="{ node, data }">
					<span>{{ node.label }}</span>
					<span style="float: right;">
						<el-button type="text" size="mini">

						</el-button>
						<el-button type="text" size="mini">
							操作
						</el-button>
						<el-button class="el-icon-arrow-down" type="text" size="mini">

						</el-button>
					</span>
				</span>
			</el-tree>
		</div>
	</div>
</template>

<script>
import {mentApi} from "@/api/api"
import {getToken} from '@/utils/auth'
export default {

	components: {},
	data() {

		return {

		}
	},
	computed: {},
	watch: {},
	methods: {



	},
	created(){
		// mentApi({Authorization:getToken()}).then(res=>{
		// 	console.log(res)
		// })
		console.log(getToken());
	}

}
</script>

<style scoped>
.count {
	background-color: #fff;
	padding: 20px;
	box-sizing: border-box;
	border-radius: 4px;
	border: 1px solid #ebeef5;
	overflow: hidden;
	color: #303133;
	font-size: 14px;
}

.top-title {
	padding-left: 30px;
	padding-top: 30px;
	color: #5384fd;
}

.top-hr {
	background-color: #e4e7ed;
	height: 2px;
	width: 100%;
	border-left: 60px solid #5384fd;
	box-sizing: border-box;
	padding-left: 20px;
	margin-top: 10px;
}

.ter-Box {
	padding: 30px 120px 0;
}

.top-btn {
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #cfcfcf;
	padding: 10px 0;
	margin-bottom: 10px;
	/* font-weight: 700; */
}

.btn-l {
	display: flex;
	align-items: center;
	font-weight: 700;
}

.btn-r {
	display: flex;
	align-items: center;
}
</style>
<style lang="scss">
.el-dropdown {
	margin-left: 30px;
}

.el-tree-node__content {
    display: flex;
    align-items: center;
    height: 26px;
    cursor: pointer;
    justify-content: space-between;
}
.custom-tree-node{
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
