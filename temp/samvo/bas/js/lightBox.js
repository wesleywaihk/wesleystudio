// JavaScript Document
$('head').append('<link href="./css/lightBox.css" rel="stylesheet" type="text/css" />');
$(document).ready(function(){
	window.t = undefined;
	window.onorientationchange = function (event){
		window.t = setTimeout('orientation_changed();', 250);
	};	
});
function orientation_changed (){
	/*if ( is_portrait() ){
		alert('p');
	}else if ( is_landscape() ){
		alert('l');
	}*/
	AdjustPositionFN();	
	clearTimeout(window.t);
	delete window.t;
};
function alertMSG(msg){
	$('body').prepend('<div id="msgBox" class="lightBox">'+
									 '<div class="postAdjust">'+
									 '<div class="contentBox">'+
									 '<div class="contentBox2">'+
									 '<div id="toScroll">'+
									 '<span>'+msg+'</span>'+
									 '</div>'+
									 '</div>'+
									 '<div id="btnGroup"><input name="closeBTN" id="closeBTN" type="button" value="close" class="BTN" /></div>'+
									 '</div></div></div>');	
	$('#msgBox #closeBTN').click(function(){																				
		$('#msgBox').fadeOut(100,function(){
			$('body').css('overflow',bodyStatus);																
			$('#msgBox').remove();	
		});	
	});
	bodyStatus=$('body').css('overflow');
	$('body').css('overflow','hidden');
	$('#msgBox').fadeIn(100);	
};



function AdjustPositionFN(){
	$('.postAdjust').css('top',$('.lightBox').height()/2);
};
/*function is_landscape(){
	var uagent = navigator.userAgent.toLowerCase();
	if ( uagent.search('ipad') > -1 ){
		var r = ( window.orientation == 90 || window.orientation == -90 );
	}else{
		var r = ( screen.width > screen.height );
	}
	return r;
};
function is_portrait(){
	var uagent = navigator.userAgent.toLowerCase();
	if ( uagent.search('ipad') > -1 ){
		var r = ( window.orientation == 0 || window.orientation == 180 );
	}else{
		var r = ( screen.width < screen.height );
	}
	return r;
};
*/