<template>
    <div class='full'>
			
        <!-- <img @click="flag=!flag" :src="flag==flase?'@/assets/common/f1.png':'@/assets/common/f2.png'" alt=""> -->

    </div>
</template>

<script>

export default {
    components: {},
    data() {
        return {
            flag:false
        };
    },
    computed: {},
    watch: {},
    methods: {
			fn(){
				this.flag=!this.flag
				console.log(this.flag);
			}
    },
}
</script>

<style scoped></style>
