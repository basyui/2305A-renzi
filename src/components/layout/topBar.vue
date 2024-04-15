<template>
	<div class='top'>
		<div class="left">
			<i @click="show" class="el-icon-s-fold" style="color: white;"></i>
			<div class="tit">江苏传智播客教育科技股份有限公司</div>
			<div class="version">体验版</div>
		</div>

		<div class="right">
			<div class="sear">
				<el-tooltip class="item" effect="dark" content="站内搜索" placement="bottom">
					<img src="../../assets/common/search.png" alt="">
				</el-tooltip>
			</div>
			<div class="full" @click="fn">
				<el-tooltip class="item" effect="dark" :content="flag==false?'全屏':'退出全屏'" placement="bottom">
					<img :src="flag==false?require('../../assets/common/full.png'):require('../../assets/common/escfull.png')" alt="">
				</el-tooltip>
			</div>
			<div class="zh">
				<el-tooltip class="item" effect="dark" content="多语言" placement="bottom">
					<el-dropdown trigger="click">
						<span class="el-dropdown-link">
							<img src="../../assets/common/En.png" alt="">
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item >中文</el-dropdown-item>
							<el-dropdown-item>Engelsh</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</el-tooltip>
			</div>
		</div>
	</div>
</template>

<script>
import screenfull from 'screenfull'
export default {
	components: {},
	data() {
		return {
			flag: false
		};
	},
	computed: {},
	watch: {},
	methods: {
		show(){
			this.$store.commit('changeCollapse')
		},
		fn(){
			this.flag=!this.flag
			screenfull.toggle();
		}
	},
}
</script>

<style scoped>
.bottom {
	clear: both;
	text-align: center;
}

.top {
	/* background-color: #4f80fc; */
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	z-index: 99;
	justify-content: space-between;
}
.sear img{
	width: 25rx;
	height: 25px;
}
.left {
	display: flex;
	align-items: center;
}

.right {
	display: flex;
	align-items: center;
}

.tit {
	color: white;
	font-size: 20px;
	margin-left: 20px;
}

.version {
	color: white;
	background-color: #84a9fe;
	padding: 5px 10px;
	font-size: 12px;
	border-radius: 15%;
	margin-left: 20px;
	/* border-radius: 5px; */
}

.zh img {
	width: 25px;
	height: 25px;
}
.full{
	margin: 0 10px;
}
</style>
