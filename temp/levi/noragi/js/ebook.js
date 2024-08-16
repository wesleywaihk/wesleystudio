// JavaScript Document
pageNum =21;
currpage=1;
spreadWidth=780;
imgLoaded=[];
$(function(){
  $('#stylelookBook #backBTN').click(function(){
	if(currpage!=1){
	  goPage(currpage-1);
	}
  });
  $('#stylelookBook #nextBTN').click(function(){
	if(currpage!=pageNum){
	  goPage(currpage+1);
	}
  });
  $('#ebookArea').append('<div id="booksScroll">');
  $('#booksScroll').width(spreadWidth*pageNum);
  $('#pageNav').width(11*(pageNum*2-1));
  for(a=1;a<=pageNum;a++){
	imgLoaded[a-1]=false;
	$('#booksScroll').append('<div class="spread" id="p'+a+'">');	
	if(a==1){
	  $('#booksScroll #p1').append('<div id="page1" class="pageSingle"><image src="images/stylelifeBook/1.jpg"/></div>');
	  
	}else{
	  $('#booksScroll #p'+a).append('<div id="page'+a+'" class="pageDouble"></div>');
	}
	zoomFN(a);
	//
	$('#pageNav').append('<div class="pageBTN" id="p'+a+'"></div>');	
	if(a==pageNum){
	  $('#p'+a+'.pageBTN').css('margin-right',0)
	}
	if(a==currpage){
	  $('#p'+a+'.pageBTN').addClass('active')
	}
	$('#p'+a+'.pageBTN').data('num',a).click(function(){
	  goPage($(this).data('num'));
	});
  };
  $('.hightlight').append('<div class="animateBG"/><div class="hoverBG"/>');   
  checkPage(true);
  setTimeout(function(){loadIMG()}, 1000);
}); 
function loadIMG(){
  for(a=1;a<=pageNum;a++){
	if(a!=1){
	  $('#booksScroll #p'+a+' #page'+a).append('<image src="images/stylelifeBook/'+a+'.jpg"/>');
	}
	$('#booksScroll #p'+a+' #page'+a+' img').data('num',a).load(function(){
		imgLoaded[$(this).data('num')-1]=true; 
		pageFlash($(this).data('num'));

	});
  }
}

function zoomFN(num){
  switch(num){
	case 2:
	  $('#booksScroll #p2').prepend('<div class="zoomLayer">'+
		'<div class="popUp" id="pop1" style="right:5px; top:180px"><image src="images/stylelifeBook/popup/2_1.jpg"/></div>'+
		'<div class="hitArea" id="ha1" style="width:232px; height:126px; left:517px; top:233px"><div class="hightlight" style="left:6px; top:5px; width:131px; height:6px;"></div></div>'+
		'</div>');
	  $('#booksScroll #p2 #ha1').data('num',2).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'show');
	  });
	  $('#booksScroll #p2 #pop1').data('num',2).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'hide');
	  });
	  break;
	case 3:
	  $('#booksScroll #p3').prepend('<div class="zoomLayer">'+
		'<div class="popUp" id="pop1" style="left:5px; top:50px"><image src="images/stylelifeBook/popup/3_1.jpg"/></div>'+
		'<div class="popUp" id="pop2" style="left:125px; top:50px"><image src="images/stylelifeBook/popup/3_2.jpg"/></div>'+
		'<div class="popUp" id="pop3" style="left:385px; top:50px"><image src="images/stylelifeBook/popup/3_3.jpg"/></div>'+		
		'<div class="hitArea" id="ha1" style="width:137px; height:115px; left:55px; top:70px"><div class="hightlight" style="left:11px; top:8px; width:114px; height:5px;"></div></div>'+
		'<div class="hitArea" id="ha2" style="width:137px; height:125px; left:200px; top:70px"><div class="hightlight" style="left:10px; top:8px; width:114px; height:5px;"></div></div>'+
		'<div class="hitArea" id="ha3" style="width:137px; height:125px; left:445px; top:70px"><div class="hightlight" style="left:12px; top:8px; width:115px; height:5px;"></div></div>'+		
		'</div>');
		for(i=1;i<=3;i++){
		  $('#booksScroll #p3 #ha'+i).data('num',3).data('popNum',i).click(function(){
			popToggle($(this).data('num'),$(this).data('popNum'),'show');
		  });
		  $('#booksScroll #p3 #pop'+i).data('num',3).data('popNum',i).click(function(){
			popToggle($(this).data('num'),$(this).data('popNum'),'hide');
		  });
		}	  
	  break;
	case 4:
	  $('#booksScroll #p4').prepend('<div class="zoomLayer">'+
		'<div class="popUp" id="pop1" style="left:30px; top:5px"><image src="images/stylelifeBook/popup/4_1.jpg"/></div>'+
		'<div class="hitArea" id="ha1" style="width:120px; height:40px; left:36px; top:14px"><div class="hightlight" style="left:12px; top:25px; width:94px; height:5px;"></div></div>'+
		'</div>');
	  $('#booksScroll #p4 #ha1').data('num',4).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'show');
	  });
	  $('#booksScroll #p4 #pop1').data('num',4).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'hide');
	  });
	  break;
	case 5:
	  $('#booksScroll #p5').prepend('<div class="zoomLayer">'+
		'<div class="popUp" id="pop1" style="right:20px; top:290px"><image src="images/stylelifeBook/popup/5_1.jpg"/></div>'+
		'<div class="hitArea" id="ha1" style="width:120px; height:40px; left:480px; top:300px"><div class="hightlight" style="left:10px; top:26px; width:93px; height:5px;"></div></div>'+
		'</div>');
	  $('#booksScroll #p5 #ha1').data('num',5).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'show');
	  });
	  $('#booksScroll #p5 #pop1').data('num',5).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'hide');
	  });
	  break;
	case 6:
	  $('#booksScroll #p6').prepend('<div class="zoomLayer">'+
		'<div class="popUp" id="pop1" style="left:5px; top:5px"><image src="images/stylelifeBook/popup/6_1.jpg"/></div>'+
		'<div class="hitArea" id="ha1" style="width:190px; height:40px; left:36px; top:9px"><div class="hightlight" style="left:9px; top:27px; width:174px; height:5px"></div></div>'+
		'</div>');
	  $('#booksScroll #p6 #ha1').data('num',6).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'show');
	  });
	  $('#booksScroll #p6 #pop1').data('num',6).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'hide');
	  });
	  break;
	case 7:
	  $('#booksScroll #p7 #page7').prepend('<div class="zoomLayer">'+
		'<div class="popUp" id="pop1" style="left:5px; top:13px"><image src="images/stylelifeBook/popup/7_1.jpg"/></div>'+
		'<div class="hitArea" id="ha1" style="width:168px; height:40px; left:49px; top:34px"><div class="hightlight" style="left:9px; top:29px; width:147px; height:5px"></div></div>'+
		'</div>');
	  $('#booksScroll #p7 #page7 #ha1').data('num',7).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'show');
	  });
	  $('#booksScroll #p7 #page7 #pop1').data('num',7).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'hide');
	  });
	  break;
	case 8:
	  $('#booksScroll #p8 #page8').prepend('<div class="zoomLayer">'+
		'<div class="popUp" id="pop1" style="left:5px; bottom:5px"><image src="images/stylelifeBook/popup/8_1.jpg"/></div>'+
		'<div class="hitArea" id="ha1" style="width:250px; height:40px; left:35px; top:457px"><div class="hightlight" style="left:8px; top:28px; width:226px; height:5px;"></div></div>'+
		'</div>');
	  $('#booksScroll #p8 #page8 #ha1').data('num',8).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'show');
	  });
	  $('#booksScroll #p8 #page8 #pop1').data('num',8).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'hide');
	  });
	  break;
	case 9:
	  $('#booksScroll #p9 #page9').prepend('<div class="zoomLayer">'+
		'<div class="popUp" id="pop1" style="left:20px; top:15px"><image src="images/stylelifeBook/popup/9_1.jpg"/></div>'+
		'<div class="popUp" id="pop2" style="right:5px; top:5px"><image src="images/stylelifeBook/popup/9_2.jpg"/></div>'+
		'<div class="hitArea" id="ha1" style="width:128px; height:40px; left:44px; top:37px"><div class="hightlight" style="left:8px; top:27px; width:106px; height:5px;"></div></div>'+
		'<div class="hitArea" id="ha2" style="width:180px; height:40px; left:568px; top:8px"><div class="hightlight" style="left:10px; top:27px; width:159px; height:5px;"></div></div>'+
		'</div>');
	  for(i=1;i<=2;i++){
		  $('#booksScroll #p9 #page9 #ha'+i).data('num',9).data('popNum',i).click(function(){
			popToggle($(this).data('num'),$(this).data('popNum'),'show');
		  });
		  $('#booksScroll #p9 #page9 #pop'+i).data('num',9).data('popNum',i).click(function(){
			popToggle($(this).data('num'),$(this).data('popNum'),'hide');
		  });
		}
	  break;
	case 10:
	  $('#booksScroll #p10 #page10').prepend('<div class="zoomLayer">'+
		'<div class="popUp" id="pop1" style="right:5px; top:5px"><image src="images/stylelifeBook/popup/10_1.jpg"/></div>'+
		'<div class="hitArea" id="ha1" style="width:135px; height:40px; left:638px; top:8px"><div class="hightlight" style="left:12px; top:28px; width:107px; height:5px;"></div></div>'+
		'</div>');
	  $('#booksScroll #p10 #page10 #ha1').data('num',10).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'show');
	  });
	  $('#booksScroll #p10 #page10 #pop1').data('num',10).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'hide');
	  });
	  break; 
	case 11:
	  $('#booksScroll #p11 #page11').prepend('<div class="zoomLayer">'+
		'<div class="popUp" id="pop1" style="left:5px; top:5px"><image src="images/stylelifeBook/popup/11_1.jpg"/></div>'+
		'<div class="hitArea" id="ha1" style="width:185px; height:40px; left:30px; top:14px"><div class="hightlight" style="left:8px; top:28px; width:166px; height:5px;"></div></div>'+
		'</div>');
	  $('#booksScroll #p11 #page11 #ha1').data('num',11).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'show');
	  });
	  $('#booksScroll #p11 #page11 #pop1').data('num',11).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'hide');
	  });
	  break;
	case 13:
	  $('#booksScroll #p13 #page13').prepend('<div class="zoomLayer">'+
		'<div class="popUp" id="pop1" style="left:5px; bottom:5px"><image src="images/stylelifeBook/popup/13_1.jpg"/></div>'+
		'<div class="popUp" id="pop2" style="right:5px; bottom:120px"><image src="images/stylelifeBook/popup/13_2.jpg"/></div>'+
		'<div class="hitArea" id="ha1" style="width:145px; height:40px; left:16px; bottom:8px"><div class="hightlight" style="left:8px; top:30px; width:123px; height:5px;"></div></div>'+
		'<div class="hitArea" id="ha2" style="width:200px;height: 40px; right:125px; bottom:140px"><div class="hightlight" style="left:9px; top:34px; width:181px; height:5px"></div></div>'+
		'</div>');
	  for(i=1;i<=2;i++){
		  $('#booksScroll #p13 #page13 #ha'+i).data('num',13).data('popNum',i).click(function(){
			popToggle($(this).data('num'),$(this).data('popNum'),'show');
		  });
		  $('#booksScroll #p13 #page13 #pop'+i).data('num',13).data('popNum',i).click(function(){
			popToggle($(this).data('num'),$(this).data('popNum'),'hide');
		  });
		}
	  break;
	case 14:
	  $('#booksScroll #p14 #page14').prepend('<div class="zoomLayer">'+
		'<div class="popUp" id="pop1" style="left:255px; top:5px;"><image src="images/stylelifeBook/popup/14_1.jpg"/></div>'+
		'<div class="hitArea" id="ha1" style="width:132px; height:40px; left:34px; top:6px"><div class="hightlight" style="left:7px; top:26px; width:115px; height:5px;"></div></div>'+
		'</div>');
	  $('#booksScroll #p14 #page14 #ha1').data('num',14).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'show');
	  });
	  $('#booksScroll #p14 #page14 #pop1').data('num',14).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'hide');
	  });
	  break;
	case 15:
	  $('#booksScroll #p15 #page15').prepend('<div class="zoomLayer">'+
		'<div class="popUp" id="pop1" style="right:5px; bottom:45px"><image src="images/stylelifeBook/popup/15_1.jpg"/></div>'+
		'<div class="hitArea" id="ha1" style="width:113px; height:40px; right:191px; bottom:59px"><div class="hightlight" style="left:7px; top:29px; width:94px; height:5px;"></div></div>'+
		'</div>');
	  $('#booksScroll #p15 #page15 #ha1').data('num',15).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'show');
	  });
	  $('#booksScroll #p15 #page15 #pop1').data('num',15).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'hide');
	  });
	  break;
	case 16:
	  $('#booksScroll #p16 #page16').prepend('<div class="zoomLayer">'+
		'<div class="popUp" id="pop1" style="left:30px; bottom:45px"><image src="images/stylelifeBook/popup/16_1.jpg"/></div>'+
		'<div class="popUp" id="pop2" style="right:5px; bottom:25px"><image src="images/stylelifeBook/popup/16_2.jpg"/></div>'+
		'<div class="hitArea" id="ha1" style="width:100px; height:40px; left:84px; bottom:56px"><div class="hightlight" style="left:8px; top:29px; width:83px; height:5px;"></div></div>'+
		'<div class="hitArea" id="ha2" style="width:170px; height:40px; right:187px; bottom:43px"><div class="hightlight" style="left:11px; top:28px; width:156px; height:5px"></div></div>'+
		'</div>');
	  for(i=1;i<=2;i++){
		  $('#booksScroll #p16 #page16 #ha'+i).data('num',16).data('popNum',i).click(function(){
			popToggle($(this).data('num'),$(this).data('popNum'),'show');
		  });
		  $('#booksScroll #p16 #page16 #pop'+i).data('num',16).data('popNum',i).click(function(){
			popToggle($(this).data('num'),$(this).data('popNum'),'hide');
		  });
		}
	  break;
	case 17:
	  $('#booksScroll #p17 #page17').prepend('<div class="zoomLayer">'+
		'<div class="popUp" id="pop1" style="left:5px; bottom:5px"><image src="images/stylelifeBook/popup/17_1.jpg"/></div>'+
		'<div class="hitArea" id="ha1" style="width:85px; height:40px; left:30px; bottom:8px"><div class="hightlight" style="left:7px; top:29px; width:71px; height:5px;"></div></div>'+
		'</div>');
	  $('#booksScroll #p17 #page17 #ha1').data('num',17).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'show');
	  });
	  $('#booksScroll #p17 #page17 #pop1').data('num',17).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'hide');
	  });
	  break;
	case 18:
	  $('#booksScroll #p18 #page18').prepend('<div class="zoomLayer">'+
		'<div class="popUp" id="pop1" style="right:5px; bottom: 5px"><image src="images/stylelifeBook/popup/18_1.jpg"/></div>'+
		'<div class="hitArea" id="ha1" style="width:162px; height:40px; right:13px; bottom:6px"><div class="hightlight" style="left:12px; top:28px; width:142px; height:5px;"></div></div>'+
		'</div>');
	  $('#booksScroll #p18 #page18 #ha1').data('num',18).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'show');
	  });
	  $('#booksScroll #p18 #page18 #pop1').data('num',18).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'hide');
	  });
	  break;
	case 19:
	  $('#booksScroll #p19 #page19').prepend('<div class="zoomLayer">'+
		'<div class="popUp" id="pop1" style="left:5px; bottom:5px"><image src="images/stylelifeBook/popup/19_1.jpg"/></div>'+
		'<div class="hitArea" id="ha1" style="width:170px; height:40px; left:16px; bottom:8px"><div class="hightlight" style="left:8px; top:31px; width:152px; height:5px;"></div></div>'+
		'</div>');
	  $('#booksScroll #p19 #page19 #ha1').data('num',19).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'show');
	  });
	  $('#booksScroll #p19 #page19 #pop1').data('num',19).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'hide');
	  });
	  break;
	case 20:
	  $('#booksScroll #p20 #page20').prepend('<div class="zoomLayer">'+
		'<div class="popUp" id="pop1" style="left:5px; top:5px"><image src="images/stylelifeBook/popup/20_1.jpg" border=""/></div>'+
		'<div class="hitArea" id="ha1" style="width:185px; height:40px; left:35px; top:6px"><div class="hightlight" style="left:6px; top:27px; width:172px; height:5px;"></div></div>'+
		'</div>');
	  $('#booksScroll #p20 #ha1').data('num',20).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'show');
	  });
	  $('#booksScroll #p20 #pop1').data('num',20).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'hide');
	  });
	  break;
	case 21:
	  $('#booksScroll #p21 #page21').prepend('<div class="zoomLayer">'+
		'<div class="popUp" id="pop1" style="left:10px; top:10px; height:481px; width:757px; overflow:auto"><image src="images/stylelifeBook/popup/21_1.jpg"/></div>'+
		'<div class="hitArea" id="ha1" style="width:295px; height:350px; left:45px; top:90px"><div class="hightlight" style="left:7px; top:10px; width:7px; height:336px;"></div></div>');//
	  $('#booksScroll #p21 #ha1').data('num',21).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'show');
	  });
	  $('#booksScroll #p21 #pop1').data('num',21).data('popNum',1).click(function(){
		popToggle($(this).data('num'),$(this).data('popNum'),'hide');
	  });
	  break;
	default:
  }
};
function popToggle(num,popNum,act){
  trg='#booksScroll #p'+num+' .zoomLayer #pop'+popNum;  
  if(act=='show'){
	$('.popUp').fadeOut(300);
	$(trg).stop().fadeIn(500);
  }else{
	$(trg).stop().fadeOut(500);
  }
};
function goPage(num){
  currpage=num;
  for(b=1;b<=pageNum;b++){
	if(b==currpage){			 
	  $('#p'+b+'.pageBTN').addClass('active');
	}else{
	  $('#p'+b+'.pageBTN').removeClass('active');
	}
  }
  $('.popUp').stop().fadeOut(200);
  $('#booksScroll').stop().animate({left:0-spreadWidth*(num-1)},500,'easeOutCubic',function(){		
	checkPage(false)	
  })
}
function checkPage(startUP){ 
  if(startUP){
	if(currpage==1){
	  $('#stylelookBook #backBTN').hide();
	}else{
	  $('#stylelookBook #backBTN').show();
	}
	if(currpage==pageNum){
	  $('#stylelookBook #nextBTN').hide();
	}else{
	  $('#stylelookBook #nextBTN').show();
	}
	for(b=1;b<=pageNum;b++){
	  if(b==currpage){			 
		$('#p'+b+'.pageBTN').addClass('active');
	  };
	  break;
	}	
  }else{
	if(currpage==1){
	  $('#stylelookBook #backBTN').stop().fadeOut(300);
	}else{
	  $('#stylelookBook #backBTN').stop().fadeIn(300);
	}
	if(currpage==pageNum){
	  $('#stylelookBook #nextBTN').stop().fadeOut(300);
	}else{
	  $('#stylelookBook #nextBTN').stop().fadeIn(300);
	}
  }
  
  pageFlash(currpage);
}
function pageFlash(num){
  if(imgLoaded[num-1]&&currpage==num){
	setTimeout(function(){
	  $('#booksScroll #p'+num+' .hitArea .hightlight .animateBG').stop().hide().fadeIn(400,function(){
		$(this).fadeOut(400);
	  });
	},200);
  }
};


		