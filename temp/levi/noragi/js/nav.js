// JavaScript Document
sectionsVar=['home','noragi','interpreations','stylelookBook','fitGuide','products'];
$(function(){
  $('#navInner #navLogo').click(function(){
	  //$("html, body").stop().animate({scrollTop:0},1000);
		window.open('http://www.levi.com.hk/hk/', '_blank');
  }) 
  for(a=1;a<=5;a++){
	$('#navInner #nav'+a).data('num',a).click(function(){
	  scrollFN($(this).data('num'));
	});
  }
  $('#navInner #fb').click(function(){
	  window.open('https://www.facebook.com/Levis', '_blank');
  });     
  if(window.location.hash){	  
	for(a=1; a<sectionsVar.length;a++){
	  if('#_'+sectionsVar[a]==window.location.hash){
		trg=$('#container #'+sectionsVar[a]).offset().top-80;
		$("html, body").scrollTop(trg);
		activeNum=a;
		break;
	  }else if(a==sectionsVar.length-1){
		$("html, body").scrollTop(0);
		activeNum=null;
	  }
	}
  }else{
	$("html, body").scrollTop(0);
	activeNum=null;
  }
  activeNav();
  $(window).scroll(function(){
	scrollPage();
  });
});
function scrollFN(num){	
  trg=$('#container #'+sectionsVar[num]).offset().top-80;
  $("html, body").stop().animate({scrollTop: trg},1000);
}
function scrollPage(){  
  Scrolled=$(document).scrollTop();	
  if(Scrolled<$('#container #noragi').offset().top-85){
	window.location.hash='#_home';
	activeNum=null;
  }else{
	for(z=sectionsVar.length-1; z>=1; z--){
	   checkPT=$('#container #'+sectionsVar[z]).offset().top-85;
	  if(Scrolled>=checkPT){
		window.location.hash='#_'+sectionsVar[z];
		activeNum=z;
		break;
	  }else if(z==0){
		window.location.hash='#_home';
		activeNum=null;
	  }
	}	
  }
  activeNav();
}  
function activeNav(){
  for(z=sectionsVar.length-1; z>=1; z--){
	if(activeNum==z){
	  $('#nav'+(z)).addClass('active');
	}else{
	  $('#nav'+(z)).removeClass('active');
	}
  }
}