<template>
	<div class=''>
		<el-container>
			<el-aside width="180px">
				<asideBar></asideBar>
			</el-aside>
			<el-container>
				<el-header>
					<topBar></topBar>
				</el-header>
				<el-main>
					<user></user>
					<div class="count">
						<div class="left-coun">
							<calendar></calendar>
							<announcement></announcement>
						</div>
						<div class="right-coun">
							<card></card>
							<quStart></quStart>
						</div>
					</div>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
import asideBar from '@/components/layout/asideBar.vue'
import topBar from '@/components/layout/topBar.vue'
import user from '@/components/user.vue'
import calendar from "@/components/calendar.vue"
import announcement from "@/components/announcement.vue"
import card from "@/components/card.vue"
import quStart from "@/components/quStart.vue"
export default {
	components: { quStart,card,asideBar ,topBar,user,calendar,announcement},
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
.count{
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
}
.left-coun,.right-coun{
	width: 49%;
}
</style>
<style>
.el-aside{
	 box-shadow: 1px 1px 11px 3px #5c5c5cbb;
	 z-index: 2;
	 position: fixed;

}
.el-header{
	height: 45px;
	background: linear-gradient(to right, #3e6ef8, #5b8cff);
	/* z-index: -99; */
	padding-left: 200px;
}
.el-main{
	background-color:#f0f2f5 ;
	padding-left: 200px;
}

</style>
