/*单屏滚动*/
function Scroll(){
	this.partNum=0;
	this.partTop=[];//各区域距离顶部的距离
	this.partLength = $('.part').length;
	this.canScroll=true;
	for(var i=0;i<this.partLength;i++){
		this.partTop[i]=$(".part").eq(i).offset().top;
	}
	this.init();
}
Scroll.prototype = {
	init:function(){
		var windowTop,partTop = this.partTop,_this = this;
		$(".part").mousewheel(function(event, delta) {
			_this.loghandle(event, delta);
			return false;
		});
		$(window).scroll(function(){
			windowTop = $(window).scrollTop();
			$('.right-nav').show();
			$(".right-nav ul li").removeClass("current");
			if( windowTop <= partTop[0]){
				_this.partNum=0;
				$(".nav01").addClass("current");
			}else if(windowTop > partTop[0] && windowTop <= partTop[1]){
				_this.partNum=1;
				$(".nav02").addClass("current");
			}else if(windowTop > partTop[1] && windowTop <= partTop[2]){
				_this.partNum=2;
				$(".nav03").addClass("current");
			}else if(windowTop > partTop[2] && windowTop <= partTop[3]){
				_this.partNum=3;
				$(".nav04").addClass("current");
			}else if(windowTop > partTop[3]){
				_this.partNum=4;
				$(".nav05").addClass("current");
			}
			if($(document).scrollTop()>=($(document).height()-$(window).height())){
				_this.partNum=4;
				$(".right-nav ul li").removeClass("current");
				$(".nav05").addClass("current");
			}else{
				// console.log('滑动中');	
			}
			$('.part'+(_this.partNum+1)+'').addClass('active').siblings().removeClass('active');
		});
		_this.right_nav_scroll();
		var touchFlag = 'ontouchstart' in window ? true : false;
		if(!touchFlag) return;//---------pc端和wap端华丽分界线---------
		var _startX = 0,_startY = 0,_moveX = 0,_moveY = 0,index = 1,marX = 0,marY = 0,_flagY = 0;
		var $len = $('.pages').length;	
		$(window)[0].addEventListener('touchstart',function(event){
			_startX = event.touches[0].clientX;
			_startY = event.touches[0].clientY;
			_flagX = _startX;
			_flagY = _startY;
		})
		$(window)[0].addEventListener('touchmove',function(event){
			event.preventDefault();
			_moveY = event.touches[0].clientY;
			var cha = _moveY - _startY;
			var curY = marY + cha;
			_flagX = _moveX;
			_flagY = _moveY;
		})
		$(window)[0].addEventListener('touchend',function(event){
			var cha = _moveY - _startY;
			var dis = Math.abs(cha);
			if(Math.abs(_flagY- _startY)>=10){
				if(cha<0){
					//向下滑动
					console.log('down');
					_this.scroll_down();
				}else{
					//向上滑动
					console.log('up');
					_this.scroll_up();
				}
			}
			return false
		})	
	},
	//右浮窗控制滚动
	right_nav_scroll:function(){
		var _this = this;
		$(".right-nav ul li").click(function(){
			var clickNum=$(this).index();
			var scrollHeight=_this.partTop[clickNum];
			$("html,body").animate({"scrollTop":scrollHeight});	
		});
	},
	//向上滚动
	scroll_up:function(){
		var _this = this;
		if(_this.canScroll==true){
			if(_this.partNum>0){
				_this.canScroll=false;
				_this.partNum--;
				var scrollHeight=$(".part").eq(_this.partNum).offset().top;
				$("html,body").animate({"scrollTop":scrollHeight},function(){
					_this.canScroll=true;
				});
			}
		}
	},
	//向下滚动
	scroll_down:function(){
		var _this = this;
		if(_this.canScroll==true){
			if(_this.partNum<this.partLength-1){
				_this.canScroll=false;
				_this.partNum++;
				var scrollHeight=$(".part").eq(_this.partNum).offset().top;
				$("html,body").animate({"scrollTop":scrollHeight},function(){
					_this.canScroll=true;
				});
			}
		}
	},
	//控制滚动
	loghandle:function(event, delta) {
		if(delta > 0){//向上
			this.scroll_up();
		}
		if(delta < 0){//向下
			this.scroll_down();
		}
	}

}

module.exports = Scroll;