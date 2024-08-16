// JavaScript Document
$('head').append('<link href="./css/dropDown.css" rel="stylesheet" type="text/css" />');
$(document).ready(function(){
	$('.dropDown').click(function(){																
		if(!$(this).hasClass('dropDownDisabled')){
			if($(this).children('.dropMenu').css('display')=='none'){
				$('.dropDown .dropMenu').stop().slideUp(100);
				$(this).children('.dropMenu').stop().slideDown(100);
			}else{
				$(this).children('.dropMenu').stop().slideUp(100);
			};	
		};
	});	
	$('.dropDown .dropMenu li').click(function(){																					
			$(this).parent().parent().parent().children('span').text($(this).text());
			$(this).parent().parent().stop().slideUp(100);
	});
});