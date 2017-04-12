<template id="User">
	<div>
		<div>This is User {{ $route.params.id }}</div>
		<router-link to="/child">Go to Child</router-link>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {}
		},
		mounted:function(){
			
		}
	}
</script>