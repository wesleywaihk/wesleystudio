
function detailImgStartUpFN(){
  activeImg=0;
  conWidth=0;
  
  if(imgList.length==1){// if only 1 photo
	//$('#screen').css('height','361px').append('<img alt="image" src="Property/Large/'+imgList[0][0]+'" style="width:'+imgList[0][1]*imgList[0][2]/361+'px;height:361px"/>');
	
	
	$('#picker').remove();
  }else{
	$('.imgArea').append('<div id="pervBTN" onClick="gotoImg(\'perv\')"></div><div id="nextBTN" onClick="gotoImg(\'next\')"></div>');  
	$('#screen').append("<div class='imgContainer' id='con1'><ul></ul></div><div class='imgContainer' id='con2'><ul></ul></div><div class='imgContainer' id='con3'><ul></ul></div>"); 
	//  
	$(imgList).each(function(num){
	  this[3]=Math.round(this[1]*300/this[2]);
	  conWidth+=this[3]+1;	  
	  $('.imgContainer ul').append('<li style="width:'+this[3]+'px" id="img'+num+'"><div><div class="cover" style="width:'+this[3]+'px"></div><img alt="image" src="Property/Large/'+this[0]+'" style="width:'+this[3]+'px"/></div></li>');
	  //		
	  this[4]=Math.min(Math.round(this[1]*46/this[2]),46);
	  this[5]=Math.min(Math.round(this[2]*46/this[1]),46);
	  $('#pickerCon').append('<div id="icon'+num+'" onClick="gotoImg('+num+')" onMouseOver="pickerAct('+num+', \'over\')" onMouseOut="pickerAct('+num+', \'out\')"><img alt="image" src="Property/Large/'+this[0]+'" style="width:'+this[4]+'px;height:'+this[5]+'px;padding-left:'+(46-this[4])/2+'px;padding-top:'+(46-this[5])/2+'px"/></div>'); 
	});
	
	$('.imgContainer').css('width',conWidth+'px');
	imgContainerLoc(activeImg ,true);
	//
	$('#pickerCon #icon'+(imgList.length-1)).css('margin-right','0px');
	$('#pickerCon').css('width',imgList.length*55-5); 
  }
}

function imgContainerLoc(trg, startUp){
  if(trg=='next'){
	if(activeImg==imgList.length-1){
	  trg=0;
	}else{
	  trg=activeImg+1;
	}
	if(imgList.length==2){
	  act='next'
	}
  }else if(trg=='perv'){
	if(activeImg==0){
	 trg=imgList.length-1;
	}else{
	  trg=activeImg-1;
	}
	if(imgList.length==2){
	  act='perv'
	}
  }else{
	act=null;
  }
  if(startUp||(trg!=activeImg&&!animating)){
	animating=true;
	$('#img'+activeImg+' div div.cover').fadeIn(animTime);
	conLoc=0;  
	checkLength= imgList.length/2;
	$(imgList).each(function(num){
	  if(num<trg){		
		conLoc+=this[3];
	  }else if(num==trg){
		conLoc+=this[3]/2;
		if(startUp){		
		  conLocReset(trg, conLoc)
		}else{	
			if(imgList.length==2){// if only 2 photos		
			if(act=='next'&&activeImg==1){
			  trgCon='con3';
			}else if(act=='perv'&&activeImg==0){			  
			  trgCon='con1';
			}else{			  
			  trgCon='con2';
			}
		  }else{
			if(trg-activeImg>=0){
			  checkTrg=trg-activeImg;
			}else{
			  checkTrg=trg-activeImg+imgList.length;
			}
			if(checkTrg>checkLength){//turn left				
			  if(activeImg-trg<0){
				trgCon='con1';
			  }else{
				trgCon='con2';
			  }
			}else{//turn right		  
			  if(trg-activeImg<0){
				trgCon='con3';
			  }else{
				trgCon='con2';
			  }
			}	
		  }	  
		  if(trgCon=='con1'){
			$('#con1').stop().animate({'left':338-conLoc},animTime*1.5, function(){
			  conLocReset(trg, conLoc);
			});
			$('#con2').stop().animate({'left':338-conLoc+conWidth},animTime*1.5);
			$('#con3').stop().animate({'left':338-conLoc+conWidth*2},animTime*1.5);
		  }else if(trgCon=='con2'){
			$('#con1').stop().animate({'left':338-conLoc-conWidth},animTime*1.5);
			$('#con2').stop().animate({'left':338-conLoc},animTime*1.5, function(){
			  conLocReset(trg, conLoc);
			});
			$('#con3').stop().animate({'left':338-conLoc+conWidth},animTime*1.5);				
		  }else{
			$('#con1').stop().animate({'left':338-conLoc-conWidth*2},animTime*1.5);
			$('#con2').stop().animate({'left':338-conLoc-conWidth},animTime*1.5);
			$('#con3').stop().animate({'left':338-conLoc},animTime*1.5, function(){
			  conLocReset(trg, conLoc)
			});
		  }
		}
		pickerAct(activeImg, 'inactive');
		activeImg=trg;
		pickerAct(trg, 'active');
		return false;
	  }	  
	});
  }
}
function conLocReset(trg, conLoc){
  $('#con1').stop().css('left',338-conLoc-conWidth);
  $('#con2').stop().css('left',338-conLoc);
  $('#con3').stop().css('left',338-conLoc+conWidth);
  animating=false;
  $('#img'+trg+' div div.cover').fadeOut(animTime);  
}

function gotoImg(trg){
  imgContainerLoc(trg, false);
}
function pickerAct(trg, act){
  if (act=='active'){
	  $('#icon'+trg).css('box-shadow','0px 0px 3px #006699, 0px 0px 6px #00FFFF').css('cursor','default');
  }else if (act=='over' && trg!=activeImg&&!animating){
	  $('#icon'+trg).css('box-shadow','0px 0px 3px #006699, 0px 0px 6px #00FFFF').css('cursor','pointer')
  }else if ((act=='out' && trg!=activeImg)||act=='inactive'){
	  $('#icon'+trg).css('box-shadow','0px 0px 3px #333, 0px 2px 10px -4px #000')
  }
}