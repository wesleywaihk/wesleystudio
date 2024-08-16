menuActive=0;
searchActive=1;
menuHeight=43;

function startupHeaderFN(){
  t=getQueryVariable('type');
  s=getQueryVariable('search');
  if(t>=1&&t<=6){	
	menuActive=t;
	searchActive=t;
	$('#btn'+t).css('cursor','default'); 
	imgSwapFN('#btn'+t, 1);
	imgSwapFN('#searchBtn'+t, 1);
  }
  if(s!=undefined&&s!=''){
	$('#GB_Keyword').attr('value',s);
	searchFN('startUp');
  } 
}

function searchFN(act){
 if(act=='startUp'){
	imgSwapFN('#GB_Sch', 1);
	$('#ClrSchBtn').css('background-position','0px 100%').css('cursor','pointer');
	searchPannelHS('show');	
 }else if(act=='focus'){
	if($('#GB_Keyword').attr('value')==''){
	  imgSwapFN('#GB_Sch', 1);
	}
	$('#ClrSchBtn').css('background-position','0px 100%').css('cursor','pointer');
	searchPannelHS('show')	
  }else if(act=='blur'){  
	if($('#GB_Keyword').attr('value')==''){	  
	  ClrSchBtnFN();	  	  
	}
  }
}

function searchPannelHS(act){
	if(act=='hide'){
		$('#searchPanel div').animate({'left':'-100%'},500, function(){
		$('#searchPanel').css('display','none');
	  })
	}else if(act=='show'){
		$('#searchPanel').css('display','block');
	$('#searchPanel div').animate({'left':'0%'},500);	
	}
}

function searchAction(trg,act){
  if(trg=='Back'){
	if(act=='over'){	
	  imgSwapFN('#searchBack', 1); 
	}else if(act=='out'){
	  imgSwapFN('#searchBack', 0);
	}
  }else{
	if(act=='over'){
	  if(menuActive==trg){	
		imgSwapFN('#searchBtn'+trg, 3); 
	  }else{
		imgSwapFN('#searchBtn'+trg, 2);
	  }
	}else if(act=='out'){
	  if(menuActive==trg){	
		imgSwapFN('#searchBtn'+trg, 1); 
	  }else{
		imgSwapFN('#searchBtn'+trg, 0);
	  }
	  
	}
  }
}

function searchClick(trg){ 
  if(trg=='Back'){
	  ClrSchBtnFN();
  }else{
	window.open('result.htm?search='+$('#GB_Keyword').attr('value')+'&type='+trg ,'_top');
  }
}

function ClrSchBtnFN(){
  if(menuActive==0){
	searchActive=1;  
  }else{
	searchActive=menuActive;
  }  
  //
  $('#GB_Keyword').attr('value','');
  imgSwapFN('#GB_Sch', 0);
  //
  imgSwapFN('#ClrSchBtn', 0);
  $('#ClrSchBtn').css('cursor','default'); 
  // 
  searchPannelHS('hide');	
}

function btnAction(trg,act){
  if(act=='over'){	
	if(menuActive==trg){
	  $('#btn'+trg).css('cursor','default');
	}else{
	  $('#btn'+trg).css('cursor','pointer');
	  imgSwapFN('#btn'+trg, 2);
	} 
  }else if(act=='out'){
	if(menuActive==trg){
	  imgSwapFN('#btn'+trg, 1);  
	}else{
	  imgSwapFN('#btn'+trg, 0);		
	}
  }
}

function btnClick(trg){  
  if(menuActive!=trg){
	if(trg==0){
	  window.open('default.htm' ,'_top');
	}else{
	  window.open('result.htm?type='+trg ,'_top');
	}
  }
}

function imgSwapFN(trg, num){
  n=0-num*menuHeight
  $(trg).css('background-position','0px '+n+'px');
}

function listSpaceAct(act){
  if(act=='over'){
	$('#listSpaceBTN').css('background-position','0px -20px');
  }else if(act=='out'){
	$('#listSpaceBTN').css('background-position','0px 0px');
  }
}