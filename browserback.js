//this is javascript for cookie test 
$(function() {
	if( !$.cookie("counter") ){
		//cookieにcounterがないときはセット
		$.cookie("counter", 1);
	}
	var counter = $.cookie("counter");
	if( isBack() ) {
		counter = parseInt(counter,10) + 1;
	}
	$(".link").click( function() {
		$.cookie("isLink", 1);
	});
	$.cookie("counter", counter);
	$("span#count").text(counter);
});

$(window).unload(function() { //firefox, safari においてキャッシュを無効化し、page遷移時にonloadを実行させる
});

function isBack() {
	if( !isVisited() || isLink() ) {
		$.removeCookie("isLink");
		return true;
	}
	return false;
}

function isVisited() {
	return true; //for debug
	var c_length = history.length;
	if( !$.cookie("p_length" ) ){
		$.cookie("p_length", c_length);
		return false;
	}
	var p_length = $.cookie("p_length");
	$.cookie("p_length", c_length);
	if( c_length != p_length ){
		return false;
	}
	return true;
}

function isLink() {
	if( $.cookie("isLink") ) {
		return true;
	}
	return false;
}

/*
function setPath() {
	var c_path = location.pathname;
	if( $.cookie("p_path") ) {
		$.cookie("p_p_path", $.cookie("p_path"));
	}
	$.cookie("p_path", c_path);
}

function setCount() {
	if( !$.cookie("count") ) {
		$.cookie("count",0);
	} else {
		var count = $.cookie("count");
		count = parseInt(count) + 1;
		$.cookie("count", count);
	}
}

function isVisited() {
	var c_path = location.pathname;
	var p_p_path = $.cookie("p_p_path");
	var count = $.cookie("count");
	if( c_path != p_p_path && count == ) {
		return true;
	}
	return false;
}
*/
