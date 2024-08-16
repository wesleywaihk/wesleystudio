// JavaScript Document
$(document).ready(function(){
	var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	var is_android = navigator.userAgent.toLowerCase().indexOf("android") > -1;
	var is_ios = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
	
	if(is_android||is_ios){
		var is_mobile=true;
	};
	// block firefox for android
	
	if(is_firefox && is_android){
		alert('sorry! we do not support firefox for android,\n please use android web broswer or chrome for android.');
		alert('### log out user here.');
		window.location.href = 'login.html';
	};
});