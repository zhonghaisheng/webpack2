const Util = {
	loadScript:function(_src){
		var _script = document.createElement('script');
		_script.type = 'text/script';
		_script.src = _src;
		document.body.appendChild(_script);
	},
	loadLink:function(_href){
		var _link = document.createElement('link'),
		_head = document.getElementsByTagName('head')[0];
		_link.type = 'text/css';
		_link.href = _href;
		_head.appendChild(_link);
	}
}

module.exports = Util;