// JavaScript Document
guideNum=13;
$(function(){
  $('h1').click(function(){
	window.open('http://www.levi.com.hk','_blank');  
  });
  $('#fitGuide #menArea').append('<div id="menTitle"></div>');
  for(a=1;a<=5;a++){
	$('#fitGuide #menArea').append('<div class="fitGuideBTN" id="btn'+a+'"></div>');
	$('#fitGuide #btn'+a).data('num',a).click(function(){
		fitGuideImgFN($(this).data('num'));
	});	
  };
  $('#fitGuide #btn1').addClass('active');
  //
  $('#fitGuide #womenArea').append('<div id="womenTitle"></div>');
  for(a=6;a<=guideNum;a++){
	$('#fitGuide #womenArea').append('<div class="fitGuideBTN" id="btn'+a+'"></div>');
	$('#fitGuide #btn'+a).data('num',a).click(function(){
		fitGuideImgFN($(this).data('num'));
	});	
  }
  //
  $('#fitGuide #imgArea').append('<div class="imgUnit" id="img1"><image src="images/1.jpg"/></div>');
  $('#fitGuide #imgArea #img1').css('z-index',guideNum);
  for(a=2; a<=guideNum; a++){
	$('#fitGuide #imgArea').append('<div class="imgUnit" id="img'+a+'"></div>');
	$('#fitGuide #imgArea #img'+a).css('z-index',guideNum-(a-1));	
  }
  loadGuideIMG();
});
function fitGuideImgFN(num){
  for(a=1;a<=guideNum;a++){
	if(a==num){
	  $('#fitGuide #imgArea #img'+a).stop().fadeIn(500);
	  $('#fitGuide #btn'+a).addClass('active');
	}else{
	  $('#fitGuide #imgArea #img'+a).stop().fadeOut(500);
	  $('#fitGuide #btn'+a).removeClass('active');
	}
  }
};
function loadGuideIMG(){
  for(a=2;a<=guideNum;a++){
	$('#fitGuide #imgArea #img'+a).append('<image src="images/'+a+'.jpg"/>')
  }
}