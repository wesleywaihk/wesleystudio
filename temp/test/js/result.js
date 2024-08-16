//style set 0 ---
result0Size =[[0,0,382,254],[0,269,183,120],[199,269,183,120],[397,0,280,187],[397,202,280,187],[0,404,214,142],[0,561,214,141],[229,404,448,298],[0,717,331,222],[346,717,330,222]];
result0List0=[[0,0,0,507,338],[1,0,353,246,79],[2,261,353,246,79],[3,522,0,155,209],[4,522,224,155,208],[5,0,447,214,120],[6,0,582,214,120],[7,229,447,448,255]];
result0List1=[[0,0,0,507,145],[1,0,160,507,338],[2,522,256,70,242],[3,522,0,155,241],[4,607,256,70,242],[5,0,513,214,87],[6,0,615,214,87],[7,229,513,448,189]];
result0List2=[[0,0,0,507,145],[1,0,160,70,338],[2,85,160,507,338],[3,522,0,155,145],[4,607,160,70,338],[5,0,513,214,87],[6,0,615,214,87],[7,229,513,448,189]];
result0List3=[[0,0,0,155,254],[1,0,269,70,163],[2,85,269,70,163],[3,170,0,507,338],[4,170,353,507,79],[5,0,447,214,120],[6,0,582,214,120],[7,229,447,448,255]];
result0List4=[[0,0,0,382,111],[1,0,126,70,338],[2,85,126,70,338],[3,397,0,280,111],[4,170,126,507,338],[5,0,479,214,104],[6,0,598,214,104],[7,229,479,448,223]];
result0List5=[[0,0,0,507,187],[1,0,202,246,89],[2,261,202,246,89],[3,522,0,155,187],[4,522,202,155,187],[5,0,306,507,338],[6,0,659,507,79],[7,522,404,155,334],[8,0,753,331,186],[9,346,753,330,186]];
result0List6=[[0,0,0,507,216],[1,0,231,246,123],[2,261,231,246,123],[3,522,0,155,216],[4,522,232,155,216],[5,0,369,507,79],[6,0,463,507,338],[7,522,463,155,338],[8,0,816,331,123],[9,346,816,330,123]];
result0List7=[[1,0,269,155,100],[2,170,269,212,100],[4,397,202,280,167],[5,0,384,155,162],[6,0,561,155,161],[7,170,384,507,338],[8,0,737,331,202],[9,346,737,331,202]];
result0List8=[[5,0,404,214,84],[6,0,503,214,83],[7,229,404,448,182],[8,0,601,507,338],[9,522,601,155,338]];
result0List9=[[5,0,404,155,84],[6,0,503,155,83],[7,170,404,507,182],[8,0,601,155,338],[9,170,601,507,338]];
// end of style set 0 ----
  
function resultStartUpFN(){  
  // title text
  $('#GB_PageTitle div h2').html($('#btn'+menuActive+' div a span').html());
  if(menuActive==1){
	$('#GB_PageTitle').css('background-position-y','-210px');
  }else if(menuActive==2){
	$('#GB_PageTitle').css('background-position-y','-70px');
  }else if(menuActive==3){
	$('#GB_PageTitle').css('background-position-y','-140px');
  }else if(menuActive==4){
	$('#GB_PageTitle').css('background-position-y','-70px');
  }else if(menuActive==5){
	$('#GB_PageTitle').css('background-position-y','-210px');
  }else if(menuActive==6){
	  $('#GB_PageTitle').css('background-position-y','0px');
  }  
  //
 // if ($.browser.msie && $.browser.version<9){
	effectStyle=0;
 // }else{
	//effectStyle=Math.floor(Math.random()*2); //random style set (currently 0 to 1)
 // }
  blockStyle=Math.floor(Math.random()*1); //random style set (currently 0 to 1) 
  actList = eval('result'+blockStyle+'Size');  	
  $(actList).each(function(num){	
   $('#blockArea').append("<div id='list"+num+"' style='left:"+this[0]+"px;top:"+this[1]+"px;width:"+this[2]+"px;height:"+this[3]+"px' onMouseOver='blockOver("+num+")' onMouseOut='blockOut("+num+")' onClick='blockClick("+num+")'><div class='shadow' style='width:"+this[2]+"px; height:"+this[3]+"px'></div><div class='textBox'><div class='placeName'><h3>"+imgList[num][1]+"</h3></div><div class='placeInfo' id='infoBox"+num+"'>"+imgList[num][2]+"</div></div><div class='imgCell' style='display:none'><figure><img id='img"+num+"' src='images/result/"+imgList[num][0]+"'/></figure></div></div>"); 
   $('#list'+num).data('link',imgList[num][3]+'?type='+getQueryVariable('type')+'&id='+num);
   $('#infoBox'+num).data('w',$('#infoBox'+num).width()).data('h',($('#infoBox'+num).height()+2)).css('width','1px').css('height','1px');  
   //
   //$('#blockArea div .shadow').css('transition','box-shadow '+animTime*0.001+'s ease-out').css('-moz-transition','box-shadow '+animTime*0.001+'s ease-out').css('-webkit-transition','box-shadow '+animTime*0.001+'s ease-out');
   //
	//getImgInfo(num, 'images/result/'+imgList[num][0]);
	blockIMGsize(num, this[2], this[3], imgList[num][4], imgList[num][5], true);	 
  });
}

/*function getImgInfo(trg, src) {
 function callback() {	 	
	var info = ImageInfo.getAllFields(src);
	imgList[trg][4]=info["width"];
	imgList[trg][5]=info["height"];	
	//blockIMGsize(trg, actList[trg][2], actList[trg][3], imgList[trg][4], imgList[trg][5], true);	
  };
  ImageInfo.loadInfo(src, callback);
}*/

function blockIMGsize(trg, bWidth, bHeight, iWidth, iHeight, startup){	  
  w=Math.max(Math.round(iWidth*bHeight/iHeight),bWidth);
  h=Math.max(Math.round(iHeight*bWidth/iWidth),bHeight);   
  l=Math.round((bWidth-w)/2);
  t=Math.round((bHeight-h)/2);
  if(startup){	  
	//$('#img'+trg).attr('src','images/result/'+imgList[trg][0]).css('width',Math.round(w)).css('height',Math.round(h));	
	$('#img'+trg).css('width',w).css('height',h);	
	$('#list'+trg+' .imgCell').css('left',l).css('top',t).css('display','block');	
  }else{	
	$('#img'+trg).stop().animate({'width':w,'height':h},animTime);
	$('#list'+trg+' .imgCell').stop().animate({'left':l,'top':t},animTime);
  }  
}

function blockOver(trg){			 
  //$('body').scrollTop();
  tl=eval("result"+blockStyle+"List"+trg);   
  $(tl).each(function(){
	t2 = this[0];
	if(t2==trg){
	  $('#list'+t2).stop().css('z-index',20).animate({'left':this[1],'top':this[2],'width':this[3],'height':this[4]},animTime, function(){		
		$('#infoBox'+trg).stop().css('display','block').animate({'width':$('#infoBox'+trg).data('w'),'height':$('#infoBox'+trg).data('h')},animTime);
		bh=$('body').height();
		wh=$(window).height();
		ws=$(window).scrollTop();
		ct=$(this).offset().top;
		ch=$(this).height();
		if(ws>ct||(ws+wh)<(ct+ch)){	
		  if(wh>=ch){
			sTrg=ct-(wh-ch)/2;
		  }else{
			sTrg=ct+ch-wh;
		  }
		  if(sTrg>=(bh-wh)){
			sTrg=(bh-wh);
		  }
		  $('html, body').stop().animate({scrollTop:sTrg}, animTime*3);
		}				
	  });
	  $('#list'+t2+" .shadow").stop().animate({'width':this[3],'height':this[4]},animTime);	
	  blockIMGsize(t2, this[3], this[4], imgList[t2][4], imgList[t2][5], false);
	}else if(effectStyle==0){
	  $('#list'+t2).stop().animate({'left':this[1],'top':this[2],'width':this[3],'height':this[4]},animTime);
	  $('#list'+t2+" .shadow").stop().animate({'width':this[3],'height':this[4]},animTime);	
	  blockIMGsize(t2, this[3], this[4], imgList[t2][4], imgList[t2][5], false);	  	  
	};	
  });   
};

function blockOut(trg){
  tl=eval("result"+blockStyle+"List"+trg);
  $(tl).each(function(){
	t2 = this[0];
	if(t2==trg){
	  $('#list'+t2).stop().css('z-index',10).animate({'left':actList[t2][0],'top':actList[t2][1],'width':actList[t2][2],'height':actList[t2][3]},animTime, function(){
		$(this).css('z-index',0);		
	  });	
	  $('#list'+t2+" .shadow").stop().animate({'width':actList[t2][2],'height':actList[t2][3]},animTime);		
	  blockIMGsize(t2, actList[t2][2], actList[t2][3], imgList[t2][4], imgList[t2][5], false);
	}else if(effectStyle==0){
	  $('#list'+t2).stop().animate({'left':actList[t2][0],'top':actList[t2][1],'width':actList[t2][2],'height':actList[t2][3]},animTime);
	  $('#list'+t2+" .shadow").stop().animate({'width':actList[t2][2],'height':actList[t2][3]},animTime);		
	  blockIMGsize(t2, actList[t2][2], actList[t2][3], imgList[t2][4], imgList[t2][5], false);	  
	};	
  }); 
  $('#infoBox'+trg).stop().animate({'width':'1px','height':'1px'},animTime,function(){$('#infoBox'+trg).css('display','none')}); 
  $('html, body').stop() 
};

function blockClick(trg){
	window.open($('#list'+trg).data('link'),'_self');
}