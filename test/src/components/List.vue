<template id="List">
	<div id="wrapper">
		<div class="scroll-box">
	    	<div class="scroll">
	        	34<br />
	        	34243<br />
	        	34<br />
	        	34<br />
	        	423<br />
	        	432<br />
	        	43<br />
	        	44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	        </div>
	    </div>

	    <div class='diy_select'>
			<input type='hidden' name='' class='diy_select_input'/>
			<div class='diy_select_txt'>--请选择--</div>
			<div class='diy_select_btn'></div>
			<ul class='diy_select_list'>
				<li data-id="1">Javascript</li>
				<li data-id="2">Html</li>
				<li data-id="3">Css</li>
				<li data-id="4">Php</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	import '../css/common.css'
	import '../css/list.css'
	import '../js/jquery.niceScroll.min.js'
	import diy_select from '../js/select.js'
	export default{
		data(){
			return {}
		},
		mounted:function(){
			const theme = {
		      touchbehavior:true,
		      cursorcolor:"#0096ce",
		      cursorwidth:"8px",
		      // cursorborder:"0",
		      background:"#a0ffa0",
		      cursoropacitymin:1
		    }

		    let nice = $(".scroll-box .scroll").niceScroll(theme);

		    let TTDiy_select=new diy_select({  //参数可选
		    TTContainer:'diy_select',//控件的class
		    TTDiy_select_input:'diy_select_input',//用于提交表单的class
		    TTDiy_select_txt:'diy_select_txt',//diy_select用于显示当前选中内容的容器class
		    TTDiy_select_btn:'diy_select_btn',//diy_select的打开按钮
		    TTDiv_select_list:'diy_select_list',//要显示的下拉框内容列表class
		    TTFcous:'focus',//得到焦点时的class
		    TTActive:'active'//得到焦点时的class
		    });//如同时使用多个时请保持各class一致.
		    let theme2 = {
		      touchbehavior:false,
		      cursorcolor:"#666",
		      cursorwidth:"6px",
		      background:"#ccc",
		      cursoropacitymin:1
		    }

		    let nice2 = $(".diy_select_list").niceScroll(theme2);
		}
	}
</script>