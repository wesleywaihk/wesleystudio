// JavaScript Document
var animTime=200;
var upDownTime=5000;
var freezeBTN=false;
var marketList=['AH','OU','WDW'];
var defaultSearchBoxTXT='team name';
$(document).ready(function(){ 
	// betMonitor BTN
	$('.header #betMinitorBTN').click(function(){
	 window.open('betMonitor.html');	
	});	
	//left menu --
	if(!menuShow){
		$('#leftMenu').addClass('collapsed');
		$('#leftMenu #menu').hide();
		$('#menuSpacer').width(10);
	};
	$('#leftMenu #collapseBTN').click(function(){
		if(!freezeBTN){
			if(!menuShow){
				freezeBTN=true;
				menuShow=true;
				$('#leftMenu').removeClass('collapsed');
				$('#menuSpacer').animate({'width':179},animTime, function(){
					$('#leftMenu #menu').stop().slideDown(animTime, function(){
						freezeBTN=false;
					});
				});						
			}else{
				freezeBTN=true;
				menuShow=false;
				$('#leftMenu').addClass('collapsed');
				$('#leftMenu #menu').stop().slideUp(animTime, function(){
					$('#menuSpacer').animate({'width':10},animTime, function(){
						freezeBTN=false;
					});					
				});
			};
		};
	});	
	genLeftMenu(sportsType);
	$('#leftMenu #menu').append('<div id="bottomSpacer"></div>');
	
	// search area
	$('#searchTXT').attr('value',defaultSearchBoxTXT);		
	$('#searchTXT').focus(function(){
		if($(this).attr('value')==defaultSearchBoxTXT){
			$('#searchTXT').addClass('hasTXT').attr('value','');			
		};
	});
	$('#searchTXT').blur(function(){
		if($(this).val()==''||$(this).val()==' '||$(this).val()=='&nbsp;'){
			$('#searchTXT').val(defaultSearchBoxTXT).removeClass('hasTXT');
		}else{
			$('#searchTXT').addClass('hasTXT');			
		};
	});	
	
	$('#searchSelect li').click(function(){		
		if($('#searchTXT').val()==defaultSearchBoxTXT){
			$('#searchTXT').val($(this).text());
		}
		defaultSearchBoxTXT=$(this).text();
	});
	
	$('#searchBTN').click(function(){
		$('.dropMenu').stop().slideUp(100);
	});	
	// end of search area
		
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
	genTableFN();
});

function genLeftMenu(sportsVar){	
	//left menu sports --
	$('#leftMenu #menu').empty();
	for(a=0; a<sportsVar.length; a++){
		// append sports
		$('#leftMenu #menu').append('<div id="'+sportsVar[a][0]+'" class="sports"><div class="sportsHead"><div class="icon"></div><span>'+sportsVar[a][1]+'</span><div id="sportHead_collapseBTN"></div></div><div class="sportsMenu"></div></div>');
		// hide/show depend on data
		if(sportsVar[a][2]==false){
			$('#menu #'+sportsVar[a][0]+' #sportHead_collapseBTN').addClass('collapsed');
			$('#menu #'+sportsVar[a][0]+' .sportsMenu').css('display','none');
		}
		// sports head actions
		$('#menu #'+sportsVar[a][0]+' .sportsHead').data('s', a).data('parent', sportsType[a][0]).click(function(){
			if($(this).children('#sportHead_collapseBTN').hasClass('collapsed')){
				sportsType[$(this).data('s')][2]=true;
			}else{
				sportsType[$(this).data('s')][2]=false;
			}
			trg = '#'+$(this).data('parent');
			collapsFN(trg+' #sportHead_collapseBTN', trg+' .sportsMenu',animTime);
		});
		//		
		periodVar=sportsVar[a][3];
		for(b=0; b<periodVar.length; b++){
			// append periods		
			$('#menu #'+sportsType[a][0]+' .sportsMenu').append('<div class="periods" id="'+periodVar[b][0]+'"><div class="periodsHead"><span>'+periodVar[b][1]+'</span><div id="periods_collapseBTN"></div></div><div class="periodsMenu"></div></div>');
			// hide/show depend on data
			if(periodVar[b][2]==false){
				$('#menu #'+sportsType[a][0]+' #'+periodVar[b][0]+' #periods_collapseBTN').addClass('collapsed');
				$('#menu #'+sportsType[a][0]+' #'+periodVar[b][0]+' .periodsMenu').css('display','none');
			};
			//periods	 action
			trg = '#'+sportsType[a][0]+' #'+periodVar[b][0];
			$(trg+' .periodsHead').data('grandParent', sportsType[a][0]).data('parent', periodVar[b][0]).data('s', a).data('p', b).click(function(){
				if($(this).children('#periods_collapseBTN').hasClass('collapsed')){
					sportsType[$(this).data('s')][3][$(this).data('p')][2]=true;
				}else{
					sportsType[$(this).data('s')][3][$(this).data('p')][2]=false;
				};				
				trg = '#menu #'+$(this).data('grandParent')+' #'+$(this).data('parent');
				collapsFN(trg+' #periods_collapseBTN', trg+' .periodsMenu',animTime);
			});
			//
			leagueVar=periodVar[b][3];
			for(c=0; c<leagueVar.length; c++){
				// append leagues
				$('#'+sportsType[a][0]+' #'+periodVar[b][0]+' .periodsMenu').append('<div id="'+leagueVar[c][0]+'" class="league">'+leagueVar[c][1]+'</div>');
				// leagues action
				trg = '#'+sportsType[a][0]+' #'+periodVar[b][0]+' #'+leagueVar[c][0];
				$(trg).data('sport', sportsType[a][0]).data('period', periodVar[b][0]).data('league', leagueVar[c][0]).click(function(){
					menuSelectFN('toggle', $(this).data('sport'), $(this).data('period'),selectedTimeVar, $(this).data('league'));										
				});
			};
		};
	};	
};

function closeAllFN(){
	for(d=0; d<sportsType.length; d++){		
		for(e=0; e<sportsType[d][3].length; e++){
			for(f=0; f<sportsType[d][3][e][3].length; f++){
				sportsType[d][3][e][3][f][2]=false;
				trg = '#menu #'+sportsType[d][0]+' #'+sportsType[d][3][e][0]+' #'+sportsType[d][3][e][3][f][0];
				$(trg).removeClass('selectedLeague');	
			};
		};
	};
	$('.prd').slideUp(animTime,function(){
		tableData=[];
		genTableFN();														
	});
};

var infoBar='<tr class="infoBar">'+
				'<td class="col1">date</td>'+
				'<td class="col2">home</td>'+
				'<td class="col3">&nbsp;</td>'+
				'<td class="col4">away</td>'+
				'<td class="col5 colAH">&nbsp;</td>'+
				'<td class="col6 colAH">AH</td>'+
				'<td class="col7 colAH">AA</td>'+
				'<td class="col8 colOU">&nbsp;</td>'+
				'<td class="col9 colOU">O</td>'+
				'<td class="col10 colOU">U</td>'+
				'<td class="col11 colWDW">&nbsp;</td>'+
				'<td class="col12 colWDW">1</td>'+
				'<td class="col13 colWDW">x</td>'+
				'<td class="col14 colWDW">2</td>'+
				'<td class="col15">&nbsp;</td>'+
				'</tr>';
function genTableFN(){
	$('#tableArea').empty();
	if(tableData.length==0){
		$('#tableArea').append('<table class="contentTable">'+infoBar+'</table>');		
	}else{
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
					$('#'+prdName+' #'+legName).append('<div class="legHead"><span>'+tableData[a][2][b][3][c][1]+'</span><div id="removeBTN"></div></div>');
					// leagues remove action
					trg = '#tableArea #'+prdName+' #'+legName+' #removeBTN';
					$(trg).data('sport', tableData[a][0]).data('period', tableData[a][2][b][0]).data('time', selectedTimeVar).data('league', legName).click(function(){
						menuSelectFN('deselect', $(this).data('sport'), $(this).data('period'), $(this).data('time'), $(this).data('league'));										
					});	
					$('#'+prdName+' #'+legName).append('<table class="contentTable">'+infoBar+'</table>');
					// if live	
					if(tableData[a][2][b][0]=='live'){
						$('#'+prdName+' #'+legName+' .contentTable .infoBar .col1').text('time'); // ver 1.3.1 added				 		
						$('#'+prdName+' #'+legName+' .contentTable').addClass('live');
					}
					tableData[a][2][b][3][c][2].sort();		
					tempData=tableData[a][2][b][3][c][2];
					for(d=0; d<tempData.length; d++){
						matchName=tableData[a][2][b][3][c][0]+'_'+tempData[d][13];
						$('#'+prdName+' #'+legName+' .contentTable').append('<tr id="'+matchName+'" class="matches">'+
							'<td class="col1">'+tempData[d][0]+'</td>'+
							'<td class="col2">'+tempData[d][1]+'</td>'+
							'<td class="col3">'+tempData[d][2]+'</td>'+
							'<td class="col4">'+tempData[d][3]+'</td>'+
							'<td class="col5 colAH">'+tempData[d][4]+':</td>'+
							'<td class="col6 colAH"><a href="javascript:void(0)">'+tempData[d][5][0]+'</a></td>'+
							'<td class="col7 colAH"><a href="javascript:void(0)">'+tempData[d][6][0]+'</a></td>'+
							'<td class="col8 colOU">'+tempData[d][7]+':</td>'+
							'<td class="col9 colOU"><a href="javascript:void(0)">'+tempData[d][8][0]+'</a></td>'+
							'<td class="col10 colOU"><a href="javascript:void(0)">'+tempData[d][9][0]+'</a></td>'+
							'<td class="col11 colWDW">&nbsp;</td>'+
							'<td class="col12 colWDW"><a href="javascript:void(0)">'+tempData[d][10][0]+'</a></td>'+
							'<td class="col13 colWDW"><a href="javascript:void(0)">'+tempData[d][11][0]+'</a></td>'+
							'<td class="col14 colWDW"><a href="javascript:void(0)">'+tempData[d][12][0]+'</a></td>'+
							'<td class="col15"><div id="removeBTN"></div></td>'+
							'</tr>');
						// apply up / down style
						pl=[[5,6],[6,7],[8,9],[9,10],[10,12],[11,13],[12,14]];
						for(g=0; g<pl.length;g++){
							if(tempData[d][pl[g][0]][1]=='up'){
								$('#'+prdName+' #'+legName+' .contentTable #'+matchName+' .col'+(pl[g][1])).addClass('colUp');
							}else if(tempData[d][pl[g][0]][1]=='down'){
								$('#'+prdName+' #'+legName+' .contentTable #'+matchName+' .col'+(pl[g][1]) ).addClass('colDown');
							};
						};
						// matches remove action
						trg = '#'+prdName+' #'+legName+' .contentTable #'+matchName+' #removeBTN';
						$(trg).data('sport', a).data('period', b).data('time', selectedTimeVar).data('league', c).data('match', tempData[d][13]).click(function(){
							removeMatchFN($(this).data('sport'), $(this).data('period'), $(this).data('time'), $(this).data('league'), $(this).data('match'));
						});	
					};				
				};	
			};
		};		
	};	
	// highlight related league on left menu
	for(a=0; a<sportsType.length; a++){
		for(b=0; b<sportsType[a][3].length; b++){
			for(c=0; c<sportsType[a][3][b][3].length; c++){
				trg = '#menu #'+sportsType[a][0]+' #'+sportsType[a][3][b][0]+' #'+sportsType[a][3][b][3][c][0];	
				$(trg).removeClass('selectedLeague');		
				innerLoop:
				for(i=0; i<tableData.length; i++){
					if(sportsType[a][0]==tableData[i][0]){
						for(j=0; j<tableData[i][2].length; j++){
							if(sportsType[a][3][b][0]==tableData[i][2][j][0]){
								for(k=0; k<tableData[i][2][j][3].length; k++){
									if(sportsType[a][3][b][3][c][0]==tableData[i][2][j][3][k][0]){
										$(trg).addClass('selectedLeague');		
										break innerLoop;
									};
								};									
							};								
						};
					};
				};
			};
		};
	};
	setTimeout(function(){removeHighlightFN()},upDownTime);	
	$('#tableArea a').click(function(){openBetSlip()});
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
function removeHighlightFN(){
	$('.colUp').removeClass('colUp');
	$('.colDown').removeClass('colDown');
};
function openBetSlip(){
	window.open ('betSlip.html','','width=589,height=500,screenX=0,screenY=0,left=0,top=0,scrollbars=no,location=no,resizable=yes');
};

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

function menuSelectFN(act, sportVar, periodVar, timeVar, leagueVar){	
	if(act=='toggle'){
		trg='#menu #'+sportVar+' #'+periodVar+' #'+leagueVar;
		if($(trg).hasClass('selectedLeague')){
			act='deselect';
		}else{
			act='select';
		};
	};
	//
	if(act=='deselect'){
		// remove data
		trg='#'+sportVar+'_'+periodVar+'_'+timeVar+' #'+leagueVar;		
		$(trg).slideUp(animTime,function(){														 
			for(x=0; x<tableData.length; x++){				
				if(tableData[x][0]==sportVar){
					for(y=0; y<tableData[x][2].length; y++){
						if(tableData[x][2][y][0]==periodVar){
							for(z=0; z<tableData[x][2][y][3].length; z++){
								if(tableData[x][2][y][3][z][0]==leagueVar){
									tableData[x][2][y][3].splice(z, 1);			
									if(tableData[x][2][y][3].length==0){
										tableData[x][2].splice(y, 1);
										if(tableData[x][2].length==0){
											tableData.splice(x, 1);
										};	
									};		
									genTableFN();
									break;
								};										
							};
						};
					};
				};
			};
		});	
		$(trg).slideUp(animTime);	
	}else{
		if(tableData.length==0){
			pushData('sport');
		}else{
			for(x=0; x<tableData.length; x++){				
				if(x==tableData.length-1&&tableData[x][0]!=sportVar){
					pushData('sport');
				}else if(tableData[x][0]==sportVar){				
					for(y=0; y<tableData[x][2].length; y++){
						if(y==tableData[x][2].length-1&&tableData[x][2][y][0]!=periodVar){									
							pushData('period');
						}else if(tableData[x][2][y][0]==periodVar){										
							pushData('match');
						};
					};
				};
			};
			function pushData(type){
				for(a=0; a<sportsType.length; a++){
					if(sportsType[a][0]==sportVar){
						for(b=0; b<sportsType[a][3].length; b++){
							if(sportsType[a][3][b][0]==periodVar){
								for(c=0; c<sportsType[a][3][b][3].length; c++){											
									if(sportsType[a][3][b][3][c][0]==leagueVar){
										spTXT=sportsType[a][0];
										pdTXT=sportsType[a][3][b][1];	
										lgTXT=sportsType[a][3][b][3][c][1];	
										alert('##get new data from server here##');
										if(type=='sport'){										
											tableData.push([sportVar,spTXT,[[periodVar, pdTXT,true,[[leagueVar,lgTXT,[['-','-','-','-','-',['-',''],['-',''],'-',['-',''],['-',''],['-',''],['-',''],['-',''],'0']]]]]]]);	
										}else if(type=='period'){									
											tableData[x][2].push([periodVar, pdTXT,true,[[leagueVar,lgTXT,[['-','-','-','-','-',['-',''],['-',''],'-',['-',''],['-',''],['-',''],['-',''],['-',''],'0']]]]]);	
										}else if(type=='match'){
											tableData[x][2][y][3].push([leagueVar,lgTXT,[['-','-','-','-','-',['-',''],['-',''],'-',['-',''],['-',''],['-',''],['-',''],['-',''],tableData[x][2][y][3].length]]]);
										}
										genTableFN();
										break;
									};										
								};
							};							
						};
					};
				};
			};
		};
	};
};

function removeMatchFN(s, mk, t, l, mt){	
	trg='#'+tableData[s][0]+'_'+tableData[s][2][mk][0]+'_'+t+' #'+tableData[s][2][mk][3][l][0]+' #'+tableData[s][2][mk][3][l][0]+'_'+mt;	
	$(trg).fadeOut(animTime,function(){
		for(zz=0; zz<tableData[s][2][mk][3][l][2].length; zz++){
			if(tableData[s][2][mk][3][l][2][zz][13]==mt){
				tableData[s][2][mk][3][l][2].splice(zz, 1);	
				if(tableData[s][2][mk][3][l][2].length==0){
					menuSelectFN('deselect', tableData[s][0], tableData[s][2][mk][0], t, tableData[s][2][mk][3][l][0]);	
				};			
			};				
		};													 														 
	});
};

function oddsHideShow(odds){
	if($('.col'+marketList[odds]).css('display')!='none'){
		temp=0;
		for(k=0; k<selectedMarkets.length; k++){
			if(k!=odds&&selectedMarkets[k]==false){
				temp+=1;
			};
		};
		if(temp<selectedMarkets.length-1){
			selectedMarkets[odds]=false;
			$('#toggle'+marketList[odds]).removeClass('toggleBTN_selected');			
			if($.browser.msie){
				$('.col'+marketList[odds]).hide();
			}else{
				$('.col'+marketList[odds]).fadeOut(animTime);
			};
		}else{
			alertMSG('hide all odds is not allowed.');
		};
	}else{
		selectedMarkets[odds]=true;
		$('#toggle'+marketList[odds]).addClass('toggleBTN_selected');		
		if($.browser.msie){
			$('.col'+marketList[odds]).show();
		}else{
			$('.col'+marketList[odds]).fadeIn(animTime);
		};
	};
};