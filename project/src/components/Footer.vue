<template>
	<div class="part footer" v-html="message" :title="tip" @click="hello">
	</div>
</template>
<script>
export default {
	name: 'x-footer',
	props:['message','sayHello'],
	data () {
		return {
			tip:'This is Footer!'
		}
	},
	methods:{
		hello() {
			console.log('hello world!');
			this.sayHello('子组件打招呼啦！');//子组件与父组件之间的通信
		}
	}
}
</script>
<style lang="sass">
	.footer{
		color:#fff;
		text-align: center;
		line-height: 60px;
	}
</style>
