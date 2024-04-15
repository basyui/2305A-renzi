<template>
	<div>
			<el-container>
				<el-aside :class="this.$store.state.isCollapse == false ? 'hidden' : 'show'">
					<asideBar></asideBar>
				</el-aside>
				<!-- <div class="box"></div> -->
				<el-container>
					<el-header>
						<topBar></topBar>
					</el-header>
					<el-main>

						<router-view />
						<bootom></bootom>
					</el-main>
				</el-container>
			</el-container>
		</div>
</template>

<script>
import asideBar from '@/components/layout/asideBar.vue'
import topBar from '@/components/layout/topBar.vue'
import bootom from '@/components/bootom.vue'

export default {
	components: { asideBar, topBar, bootom },
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

<style scoped></style>
<style lang="scss">
.el-aside {
	box-shadow: 1px 1px 11px 3px #5c5c5cbb;
	z-index: 2;
	/* position: fixed; */
}


.show {
	width: 64px !important;
	transition: width 0.2s ease-in-out;
}

.hidden {
	width: 180px !important;
	transition: width 0.2s ease-in-out;
}

.el-header {
	height: 45px;
	background: linear-gradient(to right, #3e6ef8, #5b8cff);
	display: flex;
	/* z-index: -99; */
	/* padding-left: 200px; */
}

.el-main {
	background-color: #f0f2f5;
	/* width: 100vw; */
	height: (100vh - 7vh);
	/* padding-bottom: 80px; */
	/* display: flex; */
	/* padding-left: 200px; */
}


.box {
	background-color: aqua;
	width: 180px;
	height: 100vh;
	/* z-index: 99; */
}
</style>

