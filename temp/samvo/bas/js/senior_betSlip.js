// JavaScript Document
var collapseWidth=36;
var openWidth=294;
var minWidth=315;
var scrollBarSize=17;
var slipAreaMinH =485;
var slipAreaMaxW=317;
var animTime=200;
var fixedH=571;

$(document).ready(function(){
	$('#homeName').text(teamName[0]);		
	$('#awayName').text(teamName[1]);
	update('score');
	update('redCard');	
	genBetSlip();	
	
	$(window).resize(function(){	
		if(!isSafari()){
			$('#slipArea').width(Math.min($(window).width(),slipAreaMaxW));			
		}else{
			$('#slipArea').width($(window).width());
		}
		adjustHeight();
	});	
});

function update(type){
	if(type=='score'){
		$('#homeScore').text(score[0]);		
		$('#awayScore').text(score[1]);
	}else if(type=='redCard'){
		$('#homeRedCard').text(redCard[0]);		
		$('#awayRedCard').text(redCard[1]);
	};
};

function genBetSlip(){	
	openNum=0;
	collapseNum=0;
	for(a=0; a<betData[2].length; a++){
		$('#slipScroll').append('<div id="SLP_'+a+'" class="betSlipBox"><div class="theSlip"></div><div class="collapseBar"></div></div>');
		$('#slipScroll #SLP_'+a+' .theSlip').append('<div class="slipHead">'+teamName[0]+' '+betData[2][a][0]+' ('+oddsType+')<div id="closeBTN"></div></div>');		
		// collapse slip
		$('#slipScroll #SLP_'+a+' #closeBTN').data('num',a).click(function(){
			$('#slipScroll #SLP_'+$(this).data('num')).animate({width:'35px'}, animTime+2,function(){
				$('#slipScroll #SLP_'+$(this).data('num')).removeClass('expandSlip').addClass('collapseSlip');
			});
			$('#slipScroll #SLP_'+$(this).data('num')+' .theSlip').animate({left:'35px'}, animTime);
			$('#slipScroll #SLP_'+$(this).data('num')+' .collapseBar').animate({left:'0px'}, animTime);			
			popupWidth('collapse',$(this).data('num'));
		});		
		
		$('#slipScroll #SLP_'+a+' .theSlip').append('<div class="placeBetArea" style="height:106px"></div>');
		$('#slipScroll #SLP_'+a+' .placeBetArea').append('<table><tr id="row1">'+
			'<td colspan="2" id="col1">odds at: <input name="oddTXT" type="text" id="oddTXT_'+a+'" class="textField"/></td>'+
			'<td colspan="2" id="col2">'+defaultCurrency+': <input name="stakeTXT" type="text" id="stakeTXT_'+a+'" class="textField stakeTXT"/></td>'+
			'</tr><tr id="row2">'+
			'<td class="colA" id="col1">best odds:</td>'+
			'<td class="colB" id="col2">'+betData[2][a][2]+'</td>'+
			'<td class="colA" id="col3">tot. max. bet:</td>'+
			'<td class="colB" id="col4">'+betData[2][a][4]+'</td>'+
			'</tr><tr id="row3">'+
			'<td class="colA" id="col1"> max. bet:</td>'+
			'<td class="colB" id="col2">'+betData[2][a][3]+'</td>'+
			'<td class="colA" id="col3">min. bet:</td>'+
			'<td class="colB" id="col4">'+betData[2][a][5]+'</td>'+
			'</tr><tr id="row4">'+
			'<td>&nbsp;</td>'+
			'<td>&nbsp;</td>'+
			'<td>balance:</td>'+
			'<td>'+samvoBalance+'</td>'+
			'</tr></table>'+
			'<div id="oddType" class="dropDown"><span></span><div class="dropMenu"><ul><li id="all">average odds</li><li id="live">best odds</li></ul></div></div>'+
			'<input name="placeBetBTN_'+a+'" id="placeBetBTN_'+a+'" type="button" class="placeBetBTN" value="place bet"/>');
		if(defaultOdd=='average'){
			$('#slipScroll #SLP_'+a+' #oddType span').text('average odds');
		}else{
			$('#slipScroll #SLP_'+a+' #oddType span').text('best odds');
		};
		// place bet action
		$('#slipScroll #SLP_'+a+' #placeBetBTN_'+a).data('num',a).data('BookieNum',betData[2][a][6].length).click(function(){
			if(!$(this).hasClass('disabled')){
				// check if any bookie is selected
				for(z=0; z<$(this).data('BookieNum'); z++){
					trg='#slipScroll #SLP_'+$(this).data('num')+' #select_'+betData[2][$(this).data('num')][6][z][0]+'_'+z;
					if($(trg).is(':checked')){								
						ahead=true;
						break;
					}else if(z==$(this).data('BookieNum')-1){
						ahead=false;
						break;
					};
				};									
				if(ahead){						
					$('#slipScroll #SLP_'+$(this).data('num')+' .textField').attr("disabled", true);
					$(this).parent().children('.dropDown').children('.dropMenu').hide();
					$(this).parent().children('.dropDown').addClass('dropDownDisabled');
					$(this).addClass('disabled');
					$('#slipScroll #SLP_'+$(this).data('num')+' .processBox').slideDown(animTime);
					
					$('#slipScroll #SLP_'+$(this).data('num')+' .checkBox').attr("disabled", true);
							
					tempH=$('#slipScroll #SLP_'+$(this).data('num')+' .frameWindow').height()-130;
					$('#slipScroll #SLP_'+$(this).data('num')+' .frameWindow').animate({height:tempH+'px'},animTime);
				}else{
					alertMSG('you must at last select one bookie to place bet.');
				};
			};
		});
		$('#slipScroll #SLP_'+a+' .theSlip').append('<div class="processBox"><div class="progressBar"><div class="innerProgressBar"></div></div></div>');
		$('#slipScroll #SLP_'+a+' .processBox').append('<div class="progressInfo"><div class="text">confirmed: <span id="confirmedNum"></span><br/>pending: <span id="pendingNum"></span><br/>unsuccessful: <span id="unsuccessNum"></span></div><input name="stopOrderBTN_'+a+'" id="stopOrderBTN_'+a+'" type="button" class="stopOrderBTN" value="stop order"/><a class="clearData" href="#">clear data</a></div>');
		$('#slipScroll #SLP_'+a+' .processBox').append('<div class="progressStatusBox"><div class="progressStatusFrame"></div></div>');
			
		$('#slipScroll #SLP_'+a+' .theSlip').append('<div class="selectAllBox"><input name="selectAll" id="selectAll_'+a+'" class="selectAll checkBox" type="checkbox" value="" /><div id="col1">bookie</div><div id="col2">price</div><div id="col3">max. bet</div></div>');
		// select all action
		$('#slipScroll #SLP_'+a+' .theSlip #selectAll_'+a).data('num',a).data('childNum',betData[2][a][6].length).click(function(){
			for(a=0; a<$(this).data('childNum'); a++){
				trg='#slipScroll #SLP_'+$(this).data('num')+' #select_'+betData[2][$(this).data('num')][6][a][0]+'_'+a;
				if($(this).attr('checked')=='checked'){
					$(trg).prop('checked', true);				
				}else{
					$(trg).prop('checked', false);
				};
			};
		});

		$('#slipScroll #SLP_'+a+' .theSlip').append('<div class="frameWindow"><div class="bookiesFrame"><table width="0" border="0" cellspacing="0" cellpadding="3"></table></div></div>');
		$('#slipScroll #SLP_'+a+' .theSlip #selectAll_'+a).data('childNum',betData[2][a][6].length);		
		for(b=0; b<betData[2][a][6].length; b++){
			$('#slipScroll #SLP_'+a+' .bookiesFrame table').append('<tr>'+
				'<td class="col1"><input name="select_'+betData[2][a][6][b][0]+'_'+b+'" id="select_'+betData[2][a][6][b][0]+'_'+b+'" class="checkBox" type="checkbox" value="" /></td>'+
				'<td class="col2">'+betData[2][a][6][b][1]+'</td>'+
				'<td class="col3">'+betData[2][a][6][b][2]+'</td>'+
				'<td class="col4">'+betData[2][a][6][b][3]+'</td>'+
				'</tr>');	
			//check box action
			$('#slipScroll #SLP_'+a+' #select_'+betData[2][a][6][b][0]+'_'+b).data('num',a).data('BookieNum',betData[2][a][6].length).click(function(){
				for(z=0; z<$(this).data('BookieNum'); z++){
					trg='#slipScroll #SLP_'+$(this).data('num')+' #select_'+betData[2][$(this).data('num')][6][z][0]+'_'+z;
					if(!$(trg).is(':checked')){
						$('#slipScroll #SLP_'+$(this).data('num')+' #selectAll_'+$(this).data('num')).prop('checked', false);
						break;
					}else if(z==$(this).data('BookieNum')-1){
						$('#slipScroll #SLP_'+$(this).data('num')+' #selectAll_'+$(this).data('num')).prop('checked', true);
					};
				};	
			});			
		}	
		$('#slipScroll #SLP_'+a+' .collapseBar').append('<div class="upper upperSenior">'+
			'<div id="openBTN"></div>'+
			'<div class="txt">'+betData[2][a][0]+'</div>'+
			'</div>'+
			'<div class="lower"></div>');
		// open slip
		$('#slipScroll #SLP_'+a+' .collapseBar').data('num',a).click(function(){			
			$('#slipScroll #SLP_'+$(this).data('num')).animate({width:'293px'}, animTime+2,function(){
				$('#slipScroll #SLP_'+$(this).data('num')).addClass('expandSlip').removeClass('collapseSlip')
			});
			$('#slipScroll #SLP_'+$(this).data('num')+' .theSlip').animate({left:'0px'}, animTime);
			$('#slipScroll #SLP_'+$(this).data('num')+' .collapseBar').animate({left:'-35px'}, animTime);
			
			popupWidth('expand',$(this).data('num'));			
		});		
		
		if(betData[2][a][1]=='collapse'){
			$('#slipScroll #SLP_'+a).addClass('collapseSlip');
			collapseNum+=1;			
		}else{
			$('#slipScroll #SLP_'+a).addClass('expandSlip');
			openNum+=1;
		};
	}	;
	popupWidth('startUp',null);	
};

function popupWidth(mode,num){	
	if(mode=='expand'){
		openNum+=1;
		collapseNum-=1;	
		betData[2][num][1]='expand';
	}else if(mode=='collapse'){
		openNum-=1;
		collapseNum+=1;	
		betData[2][num][1]='collapse';
	};
	
	slipW=collapseNum*collapseWidth+openNum*openWidth;			
	
	if(!isSafari()){
		winW=Math.min(Math.max(slipW,minWidth),screenWidth())+scrollBarSize;	
		if($.browser.msie||$.browser.mozilla){
			winW_b=winW+33;
		}else if($.browser.opera){
			winW_b=winW+30;
		}else{
			winW_b=winW;
		};		
		if(slipW>winW){//need scroll
			trgW=winW+scrollBarSize;
			slipAreaMaxW=winW_b-scrollBarSize*2;
		}else{// no need scroll
			trgW=winW;
			slipAreaMaxW=winW_b+1;
		};
	
		if(mode=='startUp'){
			$('#slipScroll').width(slipW);
			$('#slipArea').width(slipAreaMaxW);
			resizeWin();		
		}else if(mode=='expand'){
			$('#slipArea').width(slipAreaMaxW);
			$('#slipScroll').animate({width:slipW}, animTime);			
			setTimeout(function(){resizeWin()},animTime+10);
		}else{
			$('#slipArea').css('margin','0px');
			setTimeout(function(){
				$('#slipScroll').width(slipW);
				$('#slipArea').width(slipAreaMaxW);
				resizeWin();
				$('#slipArea').css('margin','auto')
			},animTime+10);			
		};
	}else{		
		if(mode=='startUp'){
			$('#slipScroll').width(slipW);	
			$('#slipArea').width($(window).width()).height($(window).height()-$('#header').height());
			adjustHeight();		
		}else if(mode=='expand'){
			$('#slipScroll').width(slipW);
			adjustHeight();		
		}else{
			setTimeout(function(){$('#slipScroll').width(slipW);adjustHeight()},animTime+10);
		};
	};
};
function resizeWin(){
	if($.browser.msie||$.browser.mozilla){
		window.resizeTo(trgW,fixedH); 
	}else{
		window.resizeTo(trgW);
	};
	adjustHeight();
};
function adjustHeight(){
	if(isMobile() || $('#slipScroll').width()>$('#slipArea').width()){
		hh=$(window).height()-$('#header').height();
	}else{
		hh=$(window).height()-$('#header').height()+scrollBarSize+1;
	};	
	$('#slipArea').height(hh);
	if(isMobile()){
		$('#slipScroll').height(hh);
	}else{
		$('#slipScroll').height(hh-scrollBarSize);
	};
	
	$('.betSlipBox').height($('#slipScroll').height()-1);
	
	$('.theSlip').height($('.betSlipBox').height());		
	for(a=0; a<betData[2].length; a++){		   
		trg='#slipScroll #SLP_'+a
		toSubtract=$(trg+' .slipHead').height()+$(trg+' .placeBetArea').height()+$(trg+' .selectAllBox').height()+14;
		if($(trg+' .processBox').css('display')!='none'){
			toSubtract+=$(trg+' .processBox').height();
		};
		$(trg+' .frameWindow').height($('.theSlip').height()-toSubtract);
	};
	$('.collapseBar').height($('.theSlip').height());
	$('.collapseBar .lower').height($('.collapseBar').height()-$('.collapseBar .upperSenior').height());
};

function screenWidth(){
	if($.browser.msie||$.browser.mozilla){
		return screen.width-35;
	}else if($.browser.opera){
		return screen.width-45;
	}else{
		return screen.width;
	};	
};

function isSafari(){
	var ua = navigator.userAgent.toLowerCase(); 
	if (ua.indexOf('safari')!=-1 && ua.indexOf('chrome')  <= -1){
		return true;
	}else{
		return false;
	};
};
function isMobile(){
	var is_android = navigator.userAgent.toLowerCase().indexOf("android") > -1;
	var is_ios = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );	
	if(is_android||is_ios){
		return true;
	}else{
		return false;
	};
};