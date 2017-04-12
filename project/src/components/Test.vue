<template id="Test">
	<div id="wrapper">
		<router-link to="/">Go to App</router-link><br>
		<router-link to="/foo">Go to Foo</router-link><br>
		<router-link to="/bar">Go to Bar</router-link><br>
		<router-link to="/user/bar">Go to User</router-link><br>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {}
		},
		mounted:function(){},
		watch: {
		    '$route' (to, from) {
		    	// console.log(to);
		      // 对路由变化作出响应...
		    }
		}
	}
</script>
<style lang="sass">

</style>