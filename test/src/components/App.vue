<template id="App">
	<div id="wrapper">
		<div class="part part1" v-cloak>
	        <video width="1920px" height="1080px" loop="loop" src="https://hzhy.res.netease.com/pc/gw/20160225115643/data/bg.mp4" autoplay="autoplay">
	            </video>
	    </div>
	    <div class="part part2">
	        <img src="../images/machine.png">
	    </div>
	    <div class="part part3">
	        <img src="../images/chouBtn.png">
	    </div>
	    <div class="part part4"></div>
	    <div class="part part5"></div>
	    <!-- the common footer begin -->
	    <x-footer message="This is Footer!" :sayHello="sayHello"></x-footer>
	    <!-- the common footer end -->
	    <div class="right-nav">
	        <ul>
	            <li class="nav01 current">1</li>
	            <li class="nav02">2</li>
	            <li class="nav03">3</li>
	            <li class="nav04">4</li>
	            <li class="nav05">5</li>
	        </ul>
	    </div>
	</div>
</template>
<script type="text/javascript">
	import '../css/common.css'
	import '../css/index.css'
	import '../js/util.js'
	import childSay from '../js/child.js'
	import 'jquery.mousewheel'//npm局部安装
	// import './jquery.mousewheel.js'//自个请求
	import Scroll from '../js/scroll.js'
	// import VueResource from 'vue-resource'
	import axios from 'axios'
	import Vue from 'vue'
	import xFooter from '../components/Footer.vue'
	import qs from 'qs'//提交form data数据插件

	/*使用VueResource插件*/
	// Vue.use(VueResource);
	// Vue.http.options.root = '';
	// Vue.http.options.emulateJSON = true;
	console.log(childSay)

	function say(str){
		console.log(str)
	}

	say('hello world!!!!!!')
	export default{
		data(){
			return {}
		},
		components: {
			xFooter:xFooter
		},
		created:function(){
			//vue2.0不推荐使用vue-resource，作者停止更新了
			// this.$http.post('/api/evaluate',{id:1}).then(function(response){
   //              // 响应成功回调
   //              console.log(response.data.status);
   //          }, function(response){
   //              // 响应错误回调
   //          });
   			axios.post('/api/evaluate',qs.stringify({id:1})).then(function(res){
   				console.log(res.data.status);
   			})
   			.catch(function(err){
   				console.log(err);
   			})
		},
		mounted:function(){
		  	// /*单屏滚动*/
			let scroll = new Scroll();
		},
		methods:{
			sayHello(msg) {
				console.log(msg);//获取子组件传递过来的信息
            }
		}
	}
</script>