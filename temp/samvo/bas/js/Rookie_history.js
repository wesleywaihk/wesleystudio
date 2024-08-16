// JavaScript Document
var defaultSearchBoxTXT='team name';
sortVar=['betID','betTime','placer','desiredPrice','desiredStake','actualStake','pl','rpl'];
var recordPerPage=20;
$(document).ready(function(){ 
	// betMonitor BTN
	$('.header #betMinitorBTN').click(function(){
	 window.open('betMonitor.html');	
	});	
	pageNum = Math.ceil(totalBetNum/recordPerPage);	
	// search area
	searchArray = ['eventFrom','eventTo','placebetFrom','placebetTo'];
	dropDownArray =[['betStatus','all'],['eventTimeSelect','time selection'],['placebetTimeSelect','time selection']];	

	// search area > search text action 	
	$('#searchTXT').attr('value',defaultSearchBoxTXT);		
	$('#searchTXT').focus(function(){
		$('.dropMenu').stop().slideUp(100);
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
	// search area > search text action  end
	// search area > filters 
	$(".dateField").datepicker({
		showOn:"both",
		buttonImage:"images/contents/dateBTN.gif",
		buttonImageOnly:true,
		dateFormat:'dd-mm-yy',
		showAnim:'slideDown',
		buttonText: ""
	});
	$('.dateField').focus(function(){
		$('.dropMenu').stop().slideUp(100);
	});	
	//search area > filters > events > txtFiled	
	$('#eventFrom').change(function(){setTimeout(eventTxtFN,200)});
	$('#eventTo').change(function(){setTimeout(eventTxtFN,200)});	
	function eventTxtFN(){
		if($('#eventFrom').val()==''||$('#eventFrom').val()==' '||$('#eventFrom').val()=='&nbsp;'){
			$('#eventFrom').val('');
		}
		if($('#eventTo').val()==''||$('#eventTo').val()==' '||$('#eventTo').val()=='&nbsp;'){
			$('#eventTo').val('');
		}		
		if($('#eventFrom').val()!=''&&$('#eventTo').val()!=''&&$('#eventFrom').datepicker('getDate')>$('#eventTo').datepicker('getDate')){
			temp=$('#eventFrom').val();
			$('#eventFrom').val($('#eventTo').val());
			$('#eventTo').val(temp);
		}
		if($('#eventFrom').val()==dateVar[0]&&$('#eventTo').val()==dateVar[0]){
			$('#eventTimeSelect span').text('today');
		}else if($('#eventFrom').val()==dateVar[1]&&$('#eventTo').val()==dateVar[1]){
			$('#eventTimeSelect span').text('yesterday');
		}else if($('#eventFrom').val()==dateVar[2][0]&&$('#eventTo').val()==dateVar[2][1]){
			$('#eventTimeSelect span').text('this week');
		}else if($('#eventFrom').val()==dateVar[3][0]&&$('#eventTo').val()==dateVar[3][1]){
			$('#eventTimeSelect span').text('last week');
		}else{
			$('#eventTimeSelect span').text('time selection');
		}
	}
	//search area > filters > events > txtFiled end
	//search area > filters > events > eventTimeSelect
	$('#eventTimeSelect li').click(function(){setTimeout(eventTimeSelectFN,5)});
	function eventTimeSelectFN(){
		trg='#eventTimeSelect span';
		if($(trg).text()=='today'){
			$('#eventFrom').datepicker( "setDate", dateVar[0]);
			$('#eventTo').datepicker( "setDate", dateVar[0]);
		}else if($(trg).text()=='yesterday'){
			$('#eventFrom').val(dateVar[1]);
			$('#eventTo').val(dateVar[1]);
		}else if($(trg).text()=='this week'){
			$('#eventFrom').val(dateVar[2][0]);
			$('#eventTo').val(dateVar[2][1]);
		}else if($(trg).text()=='last week'){
			$('#eventFrom').val(dateVar[3][0]);
			$('#eventTo').val(dateVar[3][1]);
		}
	}
	//search area > filters > events > eventTimeSelect end
	// search area > filters > events end
	// search area > filters > place bet
	// search area > filters > place bet > txtFiled
	$('#placebetFrom').change(function(){setTimeout(placebetTxtFN,200)});
	$('#placebetTo').change(function(){setTimeout(placebetTxtFN,200)});	
	function placebetTxtFN(){	
		if($('#placebetFrom').val()==''||$('#placebetFrom').val()==' '||$('#placebetFrom').val()=='&nbsp;'){
			$('#placebetFrom').val('');
		}
		if($('#placebetTo').val()==''||$('#placebetTo').val()==' '||$('#placebetTo').val()=='&nbsp;'){
			$('#placebetTo').val('');
		}
		if($('#placebetFrom').val()!=''&&$('#placebetTo').val()!=''&&$('#placebetFrom').datepicker('getDate')>$('#placebetTo').datepicker('getDate')){
			temp=$('#placebetFrom').val();
			$('#placebetFrom').val($('#placebetTo').val());
			$('#placebetTo').val(temp);
		}
		if($('#placebetFrom').val()==dateVar[0]&&$('#placebetTo').val()==dateVar[0]){
			$('#placebetTimeSelect span').text('today');
		}else if($('#placebetFrom').val()==dateVar[1]&&$('#placebetTo').val()==dateVar[1]){
			$('#placebetTimeSelect span').text('yesterday');
		}else if($('#placebetFrom').val()==dateVar[2][0]&&$('#placebetTo').val()==dateVar[2][1]){
			$('#placebetTimeSelect span').text('this week');
		}else if($('#placebetFrom').val()==dateVar[3][0]&&$('#placebetTo').val()==dateVar[3][1]){
			$('#placebetTimeSelect span').text('last week');
		}else{
			$('#placebetTimeSelect span').text('time selection');
		}
	}
	// search area > filters > place bet > txtFiled end
	// search area > filters > place bet > placebetTimeSelect	
	$('#placebetTimeSelect li').click(function(){setTimeout(placebetTimeSelectFN,5)});
	function placebetTimeSelectFN(){
		trg='#placebetTimeSelect span';
		if($(trg).text()=='today'){
			$('#placebetFrom').datepicker( "setDate", dateVar[0]);
			$('#placebetTo').datepicker( "setDate", dateVar[0]);
		}else if($(trg).text()=='yesterday'){
			$('#placebetFrom').val(dateVar[1]);
			$('#placebetTo').val(dateVar[1]);
		}else if($(trg).text()=='this week'){
			$('placebetFrom').val(dateVar[2][0]);
			$('#placebetTo').val(dateVar[2][1]);
		}else if($(trg).text()=='last week'){
			$('#placebetFrom').val(dateVar[3][0]);
			$('#placebetTo').val(dateVar[3][1]);
		}
	}
	// search area > filters > place bet > placebetTimeSelect end
	// search area > filters > place bet end		
	// search area > filters end 
	$('#searchBTN').click(function(){
		$('.dropMenu').stop().slideUp(100);
	});	
	// search area end		
	drawTableFN();	
});
function drawTableFN(){	
	$('#betList').empty();	
	if(betHist==undefined||betHist.length<1){
		$('#betList').append('<tr class="th1"><th colspan="13">bet history</th></tr>');
	}else{
		$('#betList').append('<tr class="th1"><th colspan="13">bet history <input name="exportBTN" id="exportBTN" type="button" value="export report" /></th></tr>');
	}
	if(betHist==undefined||betHist.length<=1){
		$('#betList').append('<tr class="th2">'+
												 '<th class="col1">bet id</th>'+
												 '<th class="col2">place bet<br/>date time</th>'+
												 '<th class="col3">placer</th>'+
												 '<th class="col4">match information</th>'+
												 '<th class="col5">market information</th>'+
												 '<th class="col6">desired price</th>'+
												 '<th class="col7">desired stake</th>'+
												 '<th class="col9">actual stake</th>'+
												 '<th class="col10">result</th>'+
												 '<th class="col11">p/l</th>'+
												 '<th class="col12 col12_rookie">reconciled p/l</th>');
	}else{
		$('#betList').append('<tr class="th2">'+
												 '<th class="col1"><div id="betID">bet id</div></th>'+
												 '<th class="col2"><div id="betTime">place bet<br/>date time</div></th>'+
												 '<th class="col3"><div id="placer">placer</div></th>'+
												 '<th class="col4">match information</th>'+
												 '<th class="col5">market information</th>'+
												 '<th class="col6"><div id="desiredPrice">desired price</div></th>'+
												 '<th class="col7"><div id="desiredStake">desired stake</div></th>'+
												 '<th class="col9"><div id="actualStake">actual stake</div></th>'+
												 '<th class="col10">result</th>'+
												 '<th class="col11"><div id="pl">p/l</div></th>'+
												 '<th class="col12 col12_rookie"><div id="rpl">reconciled p/l</div></th>');
		$('#betList .th2 #'+sortedBy).addClass('sortedBy');
		for(a=0;a<sortVar.length;a++){
			$('#betList .th2 #'+sortVar[a]).data('id',sortVar[a]).click(function(){
				if(!$(this).hasClass('sortedBy')){
					sortedBy=$(this).data('id');
					currPage=1; // go to page 1 after sorting
					alert('###reflash page###');					
				}
			});
		}		
		if(betHist.length>0){			
			sortData();			
			/*if(betHist.length>recordPerPage){
				range=[currPage*recordPerPage-recordPerPage,Math.min(currPage*recordPerPage,betHist.length)];
			}else{
				range=[0,betHist.length];
			}*/
			//for(a=range[0];a<range[1];a++){
			for(a=0;a<betHist.length;a++){
				$('#betList').append('<tr id="hist_'+a+'"><td class="col1">'+betHist[a][0]+'</td>'+
					'<td class="col2">'+betHist[a][1][0]+'</td>'+
					'<td class="col3">'+betHist[a][2]+'</td>'+
					'<td class="col4"></td>'+
					'<td class="col5"></td>'+
					'<td class="col6">'+betHist[a][5]+'</td>'+
					'<td class="col7">'+betHist[a][6]+'</td>'+					
					'<td class="col9">'+betHist[a][8]+'</td>'+
					'<td class="col10">'+betHist[a][9]+'</td>'+
					'<td class="col11">'+betHist[a][10]+'</td>'+
					'<td class="col12  col12_rookie">'+betHist[a][11]+'</td>');
					for(b=0;b<betHist[a][3].length;b++){
						$('#betList #hist_'+a+' .col4').append(betHist[a][3][b]);
						if(b!=betHist[a][3].length-1){
							$('#betList #hist_'+a+' .col4').append('<br/>');
						}
					}
					for(b=0;b<betHist[a][4].length;b++){
						$('#betList #hist_'+a+' .col5').append(betHist[a][4][b]);
						if(b!=betHist[a][4].length-1){
							$('#betList #hist_'+a+' .col5').append('<br/>');
						}
					}
					$('#betList #detailBTN_'+a).data('betID',betHist[a][0]).click(function(){
						window.open('historyDetails.html?id='+$(this).data('betID'),'_self')
					});					
				if(a%2!=0){
					$('#betList #hist_'+a).addClass('oddTR');
				}
			}
			//			

			$('#contentArea2 .pagesBox').empty();
			if(totalBetNum<=recordPerPage){
				$('#contentArea2 .pagesBox').hide();	
			}else {
				$('#contentArea2 .pagesBox').show();				
				if(pageNum<=10){
					drawRange=[1,pageNum];					
				}else{
					if(currPage-2<1){
						drawRange=[1,5]
					}else if(currPage+2>pageNum){
						drawRange=[pageNum-4,pageNum]
					}else{	
						drawRange=[currPage-2,currPage+2]
					}	
					$('.pagesBox').append('<a id="goPage">go</a>');
					$('.pagesBox #goPage').click(function(){
						t=Number($('.pagesBox #pageTXT').val());
						if(t!=''&&t!=' '&&t!='&nbsp;'){							
							goPageFN(t);
						}else{
							$('.pagesBox #pageTXT').focus();
						}
					});
					$('.pagesBox').append('<a id="page'+pageNum+'">'+pageNum+'</a>');
					$('.pagesBox #page'+pageNum).data('num',pageNum).click(function(){
						goPageFN($(this).data('num'));
					});
					$('.pagesBox').append('<span>of</span>');
					$('.pagesBox').append('<input name="pageTXT" id="pageTXT" type="text" />');
					$(".pagesBox #pageTXT").bind('keypress', function (e) {
						return !(e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57) && e.which != 46);
					}).keyup(function(event){
							if(event.keyCode == 13){
									goPageFN(Number($(this).val()));
							}
					});
				}
				for(a=drawRange[1];a>=drawRange[0];a--){
					if(a==currPage){
						$('.pagesBox').append('<span id="currentPage">'+a+'</span>');
					}else{
						$('.pagesBox').append('<a id="page'+a+'">'+a+'</a>');
						$('.pagesBox #page'+a).data('num',a).click(function(){
							goPageFN($(this).data('num'));
						});
					}					
				}
				if(pageNum>10&drawRange[0]>1){
					$('.pagesBox').append('<a id="firstPage">&nbsp;</a>');
					$('.pagesBox #firstPage').click(function(){
						goPageFN(1);
					});
				}
			}
		}
	}
};
function sortData(){
	for(a=0;a<sortVar.length;a++){
		if(sortVar[a]!=sortedBy){			
			sortNow=sortVar[a];
			betHist.sort(sortFN);
		}
	}
	sortNow=sortedBy;
	betHist.sort(sortFN);
};
function sortFN(a,b){
	switch (sortNow){
		case 'betID':
			if(a[0]>b[0]){return 1;
			}else if(a[0]<b[0]){return -1;
			}else{return 0}
			break;
		case 'betTime':
			return a[1][1]-b[1][1];
			break;
		case 'placer':
			if(a[2]>b[2]){return 1;
			}else if(a[2]<b[2]){return -1;
			}else{return 0}
			break;
		case 'desiredPrice':
			if(a[5]>b[5]){return 1;
			}else if(a[5]<b[5]){return -1;
			}else{return 0}
			break;
		case 'desiredStake':
			if(a[6]>b[6]){return 1;
			}else if(a[6]<b[6]){return -1;
			}else{return 0}
			break;
		case 'actualPrice':
			if(a[7]>b[7]){return 1;
			}else if(a[7]<b[7]){return -1;
			}else{return 0}
			break;
		case 'actualStake':
			if(a[8]>b[8]){return 1;
			}else if(a[8]<b[8]){return -1;
			}else{return 0}
			break;
		case 'pl':
			if(a[10]>b[10]){return 1;
			}else if(a[10]<b[10]){return -1;
			}else{return 0}
			break;
		case 'rpl':
			if(a[11]>b[11]){return 1;
			}else if(a[11]<b[11]){return -1;
			}else{return 0}
			break;
		default:
			return 0;
	}	
};
function goPageFN(Page){
	if(Page<1||isNaN(Page)){
		Page=1;
	}else if(Page>pageNum){
		Page=pageNum;
	}
	currPage=Page;
	alert('##reflash page##');	
}
function querystring(key) {
   var re=new RegExp('(?:\\?|&)'+key+'=(.*?)(?=&|$)','gi');
   var r=[], m;
   while ((m=re.exec(document.location.search)) != null) r.push(m[1]);
   return r;
}