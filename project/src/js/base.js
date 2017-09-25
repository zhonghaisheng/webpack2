//组件设置
//单选按钮选中操作
var _radio = function() {
	var _body = $('html,body'),
	evTimeStamp = 0;
    _body.on('click', '.radio-inline', function(ev) {
    	//解决label点击触发两次问题
        var now = +new Date();
        if (now - evTimeStamp < 100) {
            return;
        }
        evTimeStamp = now;
        //do something
        var _this = $(this);
       	_this.parent().find('.icon').removeClass('icon-radio-checked').addClass('icon-radio');
        _this.find('.icon').removeClass('icon-radio').addClass('icon-radio-checked');
    })
}

_radio(); //单选按钮选中操作

//复选按钮选中操作
var _checkbox = function() {
	var _body = $('html,body'),
	evTimeStamp = 0;
    _body.on('click', '.checkbox-inline', function(ev) {
    	//解决label点击触发两次问题
        var now = +new Date();
        if (now - evTimeStamp < 100) {
            return;
        }
        evTimeStamp = now;
        //do something
        var _this = $(this);
        _this.find('.icon').toggleClass('icon-checkbox icon-checkbox-checked');
    })
}

_checkbox(); //复选按钮选中操作

//自定义下拉菜单
var _select = function(){
    var _body = $('html,body'),
    evTimeStamp = 0;
    _body.on('click','.form-select .form-select-box',function(){
        //解决点击触发两次问题
        var now = +new Date();
        if (now - evTimeStamp < 100) {
            return;
        }
        evTimeStamp = now;
        var _this = $(this);
        _this.parent().find('.form-select-list').show();
    })
    _body.on('click','.form-select-list li',function(){
        var _this = $(this);
        _this.parents('.form-select').find('.text').text(_this.text());
        _this.parents('.form-select-list').hide();
        _this.parents('.form-select-list').attr('data-id',_this.attr('data-id'));
    })

    for(var i=0,len = $('.form-select-box').length;i<len;i++){
        clickToggle({
            elem : $('.form-select-box').eq(i),             //点击元素
            content : $('.form-select .form-select-list').eq(i),           //显示与隐藏内容
            callback : function(elem, list) {
                console.log('show');
            },
            callbackHide : function(elem, list) {
                console.log('hide');
            }
        });
    }
}

_select();//自定义下拉菜单

//点击其他区域隐藏菜单
function clickToggle (options) {
    //点击显示隐藏
    var elem = options.elem,                        //触发元素
        content = options.content,                      //隐藏列表
        callback = options.callback,                //显示后回调
        callbackHide = options.callbackHide,        //隐藏后回调
        lock = false;                               //隐藏锁定，默认否
        elem.on('keydown click', function(e) {
            content.toggle();
            if(content.is(':visible')){
                callback && callback(elem, content);
            }else{
                callbackHide && callbackHide(elem, content);
            }
        });
        $(document.body).on('click',function(e) {
            if(content.is(':visible')&&e.target!=content[0]&&$(e.target).parent()[0]!=elem[0]&&!$.contains(content[0],e.target)){
                content.hide();
                callbackHide && callbackHide(elem, content);
            }else if($(e.target).parent()[0]==elem[0]){
                content.show();
                callback && callback(elem, content);
            }
        });
}

//table全选操作
var _tableSelect = function(){
    var _body = $('html,body'),
    evTimeStamp = 0;
    _body.on('click','.table .checkbox-inline',function(){
        //解决label点击触发两次问题
        var now = +new Date();
        if (now - evTimeStamp < 100) {
            return;
        }
        evTimeStamp = now;
        var _this = $(this),
        _icon = _this.find('.icon'),
        _ckx = _this.find('.ckx');
        if(_this.hasClass('select-all')){
            _this.parents('.table').find('.checkbox-inline .icon').attr('class',_icon.attr('class'));
            _this.parents('.table').find('.checkbox-item .ckx').prop('checked',!_ckx.prop('checked'));
        }
    })
}
_tableSelect();//table全选操作

//选择文件操作
var _selectFile = function(){
    var _body = $('html,body');
    _body.on('change','.form-selectFile',function(){
        var _this = $(this);
        _this.parent().find('.form-file').val(_this.val());
    })
}

_selectFile();//选择文件操作

//分页操作
var _page = function(){
    var _body = $('html,body');
    _body.on('click','.page-box .btn-page',function(){
        var _this = $(this),
        _btnPages = _this.siblings();
        _btnPages.removeClass('active');
        _this.addClass('active');
        if(_this.attr('data-page')=="1"){
            _this.parent().find('.btn-firstPage,.btn-prev').addClass('disabled');
        }else{
            _this.parent().find('.btn-firstPage,.btn-prev').removeClass('disabled');
        }
        if(_this.attr('data-page')==_this.parent().attr('data-allPage')){
            _this.parent().find('.btn-next,.btn-lastPage').addClass('disabled');
        }
        else{
            _this.parent().find('.btn-next,.btn-lastPage').removeClass('disabled');
        }
    })
}

_page();//分页操作
