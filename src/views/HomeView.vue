<template>
	<div class='home'>
		<user></user>
		<div class="count">
			<div class="left-coun">
				<calendar></calendar>
				<announcement></announcement>
			</div>
			<div class="right-coun">
				<card></card>
				<quStart></quStart>
				<help></help>
			</div>
		</div>
	</div>
</template>

<script>
import user from '@/components/user.vue'
import calendar from "@/components/calendar.vue"
import announcement from "@/components/announcement.vue"
import card from "@/components/card.vue"
import quStart from "@/components/quStart.vue"
import help from "@/components/help.vue"
export default {
	components: {user,calendar,announcement,card,quStart,help},
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
.count {
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
}

.left-coun {
	width: 60%;
}
.right-coun{
	margin-left: 20px;
}
</style>
