// JavaScript Document
var animTime=200;
var upDownTime=10000;
var freezeBTN=false;
var marketList=['AH','OU','1x2'];
var defaultSearchBoxTXT='team name';

$(document).ready(function(){ 	
	// betMonitor BTN
	$('.header #betMinitorBTN').click(function(){
	 window.open('betMonitor.html');	
	});	
	// filter > time select
	var tList=['ft','fh'];
	for(tt=0; tt<tList.length; tt++){
		if(selectedTimeVar=='ft'){
			$('#timeSelect span').text('full time');
		}else{
			$('#timeSelect span').text('first half');
		};
		
		$('#timeSelect #'+tList[tt]).data('timeVar',tList[tt]).click(function(){
			if(selectedTimeVar!=$(this).data('timeVar')){					
				selectedTimeVar=$(this).data('timeVar');					
				alert('##get new data from server here##');
				genTableFN();	
			};							
		});
	};
	// end of filter > time select
	// filter > markets toggle
	for(a=0; a<marketList.length; a++){
		$('#toggle'+marketList[a]).data('num',a).click(function(){
			oddsHideShow($(this).data('num'));
		});
		$('#toggle'+marketList[a]).addClass('toggleBTN');		
		if(selectedMarkets[a]){
			$('#toggle'+marketList[a]).addClass('toggleBTN_selected');
		};
	};
	// end of filter > markets toggle	
	// filter > odds select
	var oList=['decimal','hk'];
	for(oo=0; oo<oList.length; oo++){
		if(selectedOddsVar=='decimal'){
			$('#oddSelect span').text('decimal');
		}else{
			$('#oddSelect span').text('hk');
		}		
		$('#oddSelect #'+oList[oo]).data('oddVar',oList[oo]).click(function(){
				if(selectedOddsVar!=$(this).data('oddVar')){					
					selectedOddsVar=$(this).data('oddVar');			
					alert('##get new data from server here##');
					genTableFN();	
				};					
		});
	};	
	// end of filter > odds select
	//filter > bookies drop down --
	$('#bookies span').click(function(){													
		$('.dropDown .dropMenu').stop().slideUp(100);
		if($(this).parent().children('.dropMenu').css('display')=='none'){
			$('#bookies .dropMenu').show();
			$('#bookies .dropMenu2').stop().slideDown(100);	
		}else{			
			$('#bookies .dropMenu2').stop().slideUp(100, function(){
				$('#bookies .dropMenu').hide();
			});
		};	
	});	
	$('.dropDown').click(function(){
			$('#bookies .dropMenu2').stop().slideUp(100, function(){
				$('#bookies .dropMenu').hide();
			});
	});
	bookiesListFN();	
	//end of filter > bookies drop down --
	timeOut=setTimeout(function(){removeHighlightFN()},upDownTime);
	genTableFN();
});

function genTableFN(){
	clearTimeout(timeOut);
	$('#tableArea').empty();	
	// display bookies
	var bookiesNum=0;
	var bookieToShow=[];	
	for(z=0; z<bookiesList.length; z++){
		if(bookiesList[z][2]){
			findBookie:
			for(a=0; a<tableData.length; a++){
				for(b=0; b<tableData[a][2].length; b++){
					for(c=0; c<tableData[a][2][b][3].length; c++){
						for(d=0; d<tableData[a][2][b][3][c][2].length; d++){
							tempData=tableData[a][2][b][3][c][2][d];
							for(e=0; e<tempData[6].length; e++){						
								if((tempData[6][e][0]=='ah'&&selectedMarkets[0])||(tempData[6][e][0]=='ou'&&selectedMarkets[1])||(tempData[6][e][0]=='1x2'&&selectedMarkets[2])){
									for(f=0; f<tempData[6][e][1].length; f++){
										tempData2=tempData[6][e][1][f][2];
										for(g=0; g<tempData2.length; g++){
											if(tempData2[g][0]==bookiesList[z][1]){
												bookiesNum+=1;
												bookieToShow.push([bookiesList[z][0],bookiesList[z][1]])
												break findBookie;
											}										
										}
									}
								}
							}
						}
					}
				}
			}
		}						
	}
	$('#contentArea').css('min-width',251+107*bookiesNum);	
	//contentAreaMW=0;		
		
	totalRow=1;
	tableData.sort(sortSport);
	for(a=0; a<tableData.length; a++){
		tableData[a][2].sort(sortPeriod);	
		for(b=0; b<tableData[a][2].length; b++){
			prdName=tableData[a][0]+'_'+tableData[a][2][b][0]+'_'+selectedTimeVar;
			$('#tableArea').append('<div id="'+prdName+'" class="prd"/>');
			if(selectedTimeVar=='ft'){
				timeTxt=' (full time)';
			}else if(selectedTimeVar=='fh'){
				timeTxt=' (first half)';
			};
			noPriceForSection=true;
			$('#'+prdName).append('<div class="prdHead"><span>'+tableData[a][2][b][1]+timeTxt+' &ndash; '+tableData[a][1]+'</span><div id="prd_collapseBTN"></div></div>');	
			$('#'+prdName).append('<div class="prdBody"/>');
			// hide/show depend on data
			if(tableData[a][2][b][2]==false){
				$('#tableArea #'+prdName+' #prd_collapseBTN').addClass('collapsed');
				$('#tableArea #'+prdName+' .prdBody').css('display','none');					
			};
			// periods action
			$('#'+prdName+' .prdHead').data('parent', prdName).data('s', a).data('p', b).click(function(){
				if($(this).children('#prd_collapseBTN').hasClass('collapsed')){
					tableData[$(this).data('s')][2][$(this).data('p')][2]=true;
				}else{
					tableData[$(this).data('s')][2][$(this).data('p')][2]=false;
				};
				trg = '#tableArea #'+$(this).data('parent');
				collapsFN(trg+' #prd_collapseBTN', trg+' .prdBody',animTime);
			});
			//
			tableData[a][2][b][3].sort();	
			for(c=0; c<tableData[a][2][b][3].length; c++){
				legName=tableData[a][2][b][3][c][0];
				$('#'+prdName+' .prdBody').append('<div id="'+legName+'" class="leg"/>');
				$('#'+prdName+' #'+legName).append('<div class="legHead"><span>'+tableData[a][2][b][3][c][1]+'</span></div>');
				$('#'+prdName+' #'+legName).append('<table class="contentTable" cellpadding="0" cellspacing="0">'+
																					 '<tr class="infoBar"><th class="col1">Date</th><th class="col2">home</th></tr>'+
																					 '</table>');
				if(tableData[a][2][b][0]=='live'||tableData[a][2][b][0]=='today'){
					$('#'+prdName+' #'+legName+' .contentTable th.col1').html('Time');
				}
				
				/*// display bookies
				var bookiesNum=0;
				var bookieToShow=[];	
				for(z=0; z<bookiesList.length; z++){
					if(bookiesList[z][2]){
						findBookie:
						for(d=0; d<tableData[a][2][b][3][c][2].length; d++){
							tempData=tableData[a][2][b][3][c][2][d];
							for(e=0; e<tempData[6].length; e++){	
								if((tempData[6][e][0]=='ah'&&selectedMarkets[0])||(tempData[6][e][0]=='ou'&&selectedMarkets[1])||(tempData[6][e][0]=='1x2'&&selectedMarkets[2])){	
									for(f=0; f<tempData[6][e][1].length; f++){
										tempData2=tempData[6][e][1][f][2];
										for(g=0; g<tempData2.length; g++){
											if(tempData2[g][0]==bookiesList[z][1]){
												bookiesNum+=1;
												bookieToShow.push(bookiesList[z])
												break findBookie;
											}										
										}
									}
								}
							}
						}
					}					
				}
				contentAreaMW=Math.max(251+97*bookiesNum,contentAreaMW)
				$('#contentArea').css('min-width',contentAreaMW);	*/							
				
				for(i=0; i<bookieToShow.length; i++){	
					$('#'+prdName+' #'+legName+' .contentTable .infoBar').append('<th class="colBookie">'+bookieToShow[i][0]+'</td>');
				}
				// if live add class
				if(tableData[a][2][b][0]=='live'){
					$('#'+prdName+' #'+legName+' .contentTable').addClass('live');
				};
				tableData[a][2][b][3][c][2].sort();	
				noPriceForMatch=true;
				for(d=0; d<tableData[a][2][b][3][c][2].length; d++){
					tempData=tableData[a][2][b][3][c][2][d];
					matchName=tableData[a][2][b][3][c][0]+'_'+tempData[7];
					rs=0;
					var masterRow;
					
					for(e=0; e<tempData[6].length; e++){							
						//if market selected
						if((tempData[6][e][0]=='ah'&&selectedMarkets[0])||(tempData[6][e][0]=='ou'&&selectedMarkets[1])||(tempData[6][e][0]=='1x2'&&selectedMarkets[2])){	
							for(f=0; f<tempData[6][e][1].length; f++){
								trg=matchName+'_'+tempData[6][e][0]+'_'+totalRow;
								$('#'+prdName+' #'+legName+' .contentTable').append('<tr id="'+trg+'" class="matches"></tr>');
								noPrice=true;
								for(i=0; i<bookieToShow.length; i++){
									$('#'+trg).append('<td class="colBookie" id="'+bookieToShow[i][1]+'">&nbsp;</td>');
									tempData2=tempData[6][e][1][f][2];
									for(j=0; j<tempData2.length; j++){												
										if(tempData2[j][0]==bookieToShow[i][1]){
											noPriceForMatch=false;
											noPriceForSection=false;
											noPrice=false;
											$('#'+trg+' #'+bookieToShow[i][1]).empty().append('<table width="0" border="0" cellspacing="0" cellpadding="0">'+
																															 '<tr><td class="innCol1">'+tempData[6][e][0]+'</td>'+
																															 '<td class="innCol2" id="home">&nbsp;</td>'+
																															 '<td class="innCol3" id="home"><a href="javascript:void(0)">'+tempData2[j][1][0]+'</a></td></tr>'+
																															 '<tr><td class="innCol1">&nbsp;</td>'+
																															 '<td class="innCol2" id="away">&nbsp;</td>'+
																															 '<td class="innCol3" id="away"><a href="javascript:void(0)">'+tempData2[j][2][0]+'</a></td></tr>'+
																															 '</table>');												
											if(tempData[6][e][1][f][1]!=''){
												$('#'+trg+' #'+bookieToShow[i][1]+' #'+tempData[6][e][1][f][1]+'.innCol2').html(tempData[6][e][1][f][0]);
											};
											if(tempData2[j][1][1]=='up'){
												$('#'+trg+' #'+bookieToShow[i][1]+' #home.innCol3').addClass('colUp');
											}else if(tempData2[j][1][1]=='down'){
												$('#'+trg+' #'+bookieToShow[i][1]+' #home.innCol3').addClass('colDown');
											};
											if(tempData2[j][2][1]=='up'){
												$('#'+trg+' #'+bookieToShow[i][1]+' #away.innCol3').addClass('colUp');
											}else if(tempData2[j][2][1]=='down'){
												$('#'+trg+' #'+bookieToShow[i][1]+' #away.innCol3').addClass('colDown');
												};
											$('#'+trg+' #'+bookieToShow[i][1]+' #home.innCol3 a').data('price','home');
											$('#'+trg+' #'+bookieToShow[i][1]+' #away.innCol3 a').data('price','away');
											//trg=matchName+'_'+tempData[6][e][0]+'_'+totalRow;	
											locX=$('#'+trg+' #'+bookieToShow[i][1]+' .innCol3 a').offset().left;
											locY=$('#'+trg+' #'+bookieToShow[i][1]+' .innCol3 a').offset().top;
											$('#'+trg+' #'+bookieToShow[i][1]+' .innCol3 a').data('sports',tableData[a][0]).data('time',selectedTimeVar).data('timeSeg',tableData[a][2][b][0]).data('match',matchName).data('markets',tempData[6][e][0]).data('goalLine',tempData[6][e][1][f][0]).click(function(){																																																																																																																																													
												openBetSlip($(this).data('sports'),$(this).data('time'),$(this).data('timeSeg'),$(this).data('match'),$(this).data('markets'),$(this).data('goalLine'),$(this).data('price'),$(this).offset().left,$(this).offset().top);
											});
										}
									}										
								}
								if(noPrice){
									$('#'+trg).remove();
								}else{
									if(((selectedMarkets[0]&&e==0)||(!selectedMarkets[0]&&selectedMarkets[1]&&e==1)||(!selectedMarkets[0]&&!selectedMarkets[1]&&e==2))&&rs==0){								
									masterRow=trg;										
									$('#'+trg).addClass('matchTop').prepend('<td class="col1">'+
																													tempData[0]+'<br/>'+																													
																													'</td>'+
																													'<td class="col2">'+
																													'<span class="homeTeam">'+tempData[4][0]+'</span><br/>'+
																													tempData[5][0]+'<br/>'+
																													'<span class="homeTeam chiTXT">'+tempData[4][1]+'('+tempData[4][2]+')</span><br/>'+
																													'<span class="chiTXT">'+tempData[5][1]+'('+tempData[5][2]+')</span>'+
																													'</td>');
									if(tableData[a][2][b][0]=='live'){
										$('#'+trg+' .col1' ).append(tempData[1]+'<br/>'+
																								'red card<br/>'+
																								'<span class="redCard">'+tempData[2]+'</span> : <span class="redCard">'+tempData[3]+'</span>');
									}									
								}else if(f==0){									
									$('#'+trg).addClass('mktTop')
								}								
									totalRow+=1;
									rs+=1;
									if(totalRow%2!=0){
										$('#'+trg).addClass('oddRoll')
									};
								};
							}	
						}					
					}						
					$('#'+prdName+' #'+legName+' .contentTable #'+masterRow+' .col1').attr('rowspan',rs);
					$('#'+prdName+' #'+legName+' .contentTable #'+masterRow+' .col2').attr('rowspan',rs);						
				}
				if(noPriceForMatch){
					$('#'+prdName+' #'+legName).remove();
				}
			}
			if(noPriceForSection){
				$('#'+prdName).remove();					
			}
		}
	}
	if($('#tableArea').html()==''){
		$('#tableArea').append('<table class="contentTable" cellpadding="0" cellspacing="0">'+
													 '<tr class="infoBar">'+
													 '<th class="col1">date</th>'+
													 '<th class="col2">home</th>'+
													 '<th class="colEmpty">&nbsp;</th>'+
													 '</tr></table>');	
	}else{		
		timeOut=setTimeout(function(){removeHighlightFN()},upDownTime);
	}
};
function oddsHideShow(odds){
	temp=0;
	for(k=0; k<selectedMarkets.length; k++){
		if(k!=odds&&selectedMarkets[k]==false){
			temp+=1;
		};
	};
	if(temp<selectedMarkets.length-1){		
		if(selectedMarkets[odds]){
			selectedMarkets[odds]=false;
			$('#toggle'+marketList[odds]).removeClass('toggleBTN_selected');
		}else{
			selectedMarkets[odds]=true;
			$('#toggle'+marketList[odds]).addClass('toggleBTN_selected');
		}
		genTableFN();
	}else{
		alertMSG('hide all odds is not allowed.');
	};
};
function bookiesListFN(){
	$('#bookies .dropMenu2').empty();
	bookiesList.sort(bookieSport);
	for(a=0; a<bookiesList.length; a++){
		$('#bookies .dropMenu2').append('<div class="bookieName">'+
																		'<div id="'+bookiesList[a][1]+'_btn" class="bookieName2">'+
																		'<div><input name="" type="checkbox"></div>'+
																		'<label>'+bookiesList[a][0]+'</label></div>'+
																		'<div id="'+bookiesList[a][1]+'_btnUp" class="btnUp"><div></div></div>'+
																		'<div id="'+bookiesList[a][1]+'_btnDown" class="btnDown"><div></div></div></div>');
		if(!bookiesList[a][2]){
			$('#bookies #'+bookiesList[a][1]+'_btn').addClass('deselected');
		}else{
			$('#bookies #'+bookiesList[a][1]+'_btn input').attr('checked', true);
		}
		//
		$('#bookies #'+bookiesList[a][1]+'_btn').data('num',a).click(function(){
			temp=0;
			for(k=0; k<bookiesList.length; k++){
				if(k!=$(this).data('num')&&!bookiesList[k][2]){
					temp+=1;
				};
			};
			if(temp<bookiesList.length-1){			
				if($(this).hasClass('deselected')){
					$(this).removeClass('deselected');
					$(this).find('input').attr('checked', true);
					bookiesList[$(this).data('num')][2]=true;
				}else{
					$(this).addClass('deselected');
					$(this).find('input').attr('checked', false);
					bookiesList[$(this).data('num')][2]=false;
				}
				genTableFN();
			}else{
				alertMSG('deselect all bookies is not allowed.');
			};	
		});
		
		$('#bookies #'+bookiesList[a][1]+'_btnUp').data('num',a).click(function(){
			if(bookiesList[$(this).data('num')][3]!=0){
				for(b=0; b<bookiesList.length; b++){
					if(bookiesList[b][3]==bookiesList[$(this).data('num')][3]-1){
						bookiesList[b][3]=bookiesList[$(this).data('num')][3];
						break;
					}
				}
				bookiesList[$(this).data('num')][3]-=1;
				bookiesListFN();
				genTableFN();
			}
		});
		$('#bookies #'+bookiesList[a][1]+'_btnDown').data('num',a).click(function(){
			if(bookiesList[$(this).data('num')][3]!=bookiesList.length-1){
				for(b=0; b<bookiesList.length; b++){
					if(bookiesList[b][3]==bookiesList[$(this).data('num')][3]+1){
						bookiesList[b][3]=bookiesList[$(this).data('num')][3];
						break;
					}
				}
				bookiesList[$(this).data('num')][3]+=1;
				bookiesListFN();
				genTableFN();
			}
		});
	}
}
function betSlipAction(trg, act){
	if(act=='hide'){
		betSlipZ(trg);
		$('.betSlipFrame iframe').hide();
		$('.betSlipFrame').css('background','#333').css('opacity',.2);
		trg.css('background','#fff').css('opacity',.7).find('iframe').hide();
	}else{
		$('.betSlipFrame iframe').show();
		$('.betSlipFrame').css('background','#fff').css('border','none').css('opacity',1);
		trg.find('iframe').show().width(trg.width()).height(trg.height()-20);
	}
}
function betSlipZ(trg){
	$(".betSlipFrame").css('z-index',10000);
	trg.css('z-index',10001);	
}
function collapsFN(trg1, trg2, time){
	if(!freezeBTN){
		freezeBTN=true;
		if($(trg1).hasClass('collapsed')){
			$(trg1).removeClass('collapsed');
			$(trg2).stop().slideDown(time, function(){
				freezeBTN=false;
			});
		}else{				
			$(trg1).addClass('collapsed');	
			$(trg2).stop().slideUp(time, function(){
				freezeBTN=false;
			});
		};	
	};	
};
function bookieSport(a,b){
	return a[3]-b[3];
}
betSlipNum=0;
function openBetSlip(sports,time,timeSeg,match,markets,goalLine,price,locX,locY){
	trg=sports+"_"+time+"_"+timeSeg+"_"+match+"_"+markets+"_"+price+"_"+betSlipNum;
	betSlipNum+=1;
	$('body').append('<div class="betSlipFrame" id="'+trg+'"><div class="closeBTN"></div><iframe src="brokage_betSlip.html"></iframe></div>');
	$('#'+trg+' .closeBTN').click(function(){
		$(this).parent().fadeOut(250,function(){
			$(this).remove();																		
		});
	});
	betSlipZ($('#'+trg));
	//
	if(locX+$('#'+trg).width()+20>=$(document).scrollLeft()+$(window).width()-10){
		locX=$(document).scrollLeft()+$(window).width()-$('#'+trg).width()-30;
	}
	if(locY+$('#'+trg).height()+35>=$(document).scrollTop()+$(window).height()-10){
		locY=$(document).scrollTop()+$(window).height()-$('#'+trg).height()-45;
	}
	$('#'+trg).css('left',locX).css('top',locY).draggable({
		start: function( event, ui) {
			betSlipAction($(this),'hide');
		},
		stop: function( event, ui) {
			betSlipAction($(this),'show');
		}
	}).resizable({
		minHeight: 300,
		minWidth: 370,
		start: function( event, ui) {
			betSlipAction($(this),'hide');
		},
		stop: function( event, ui) {
			betSlipAction($(this),'show');
		}
	}).click(function(){
		betSlipZ($(this));
	})//.fadeIn(300);	
	setTimeout(function(){$('#'+trg).fadeIn(250);},50);	
};	
	
function removeHighlightFN(){
	$('.colUp').removeClass('colUp');
	$('.colDown').removeClass('colDown');
};

function sortSport(a,b){
	if(a[0]=='soccer'){
		aa=-999;
	}else if(a[0]=='basketball'){
		aa=-998;
	}else{
		aa=a[0]
	};
	if(b[0]=='soccer'){
		bb=-999;
	}else if(b[0]=='basketball'){
		bb=-998;
	}else{
		bb=b[0]
	}
	return aa-bb;
};
function sortPeriod(a,b){
	if(a[0]=='live'){
		aa=-999;
	}else if(a[0]=='today'){
		aa=-998;
	}else if(a[0]=='early'){
		aa=-997;
	}else{
		aa=a[0]
	};
	if(b[0]=='live'){
		bb=-999;
	}else if(b[0]=='today'){
		bb=-998;
	}else if(b[0]=='early'){
		bb=-997;
	}else{
		bb=b[0]
	}
	return aa-bb;
};