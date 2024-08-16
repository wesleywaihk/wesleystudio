// JavaScript Document
sortVar=['bookie','bookieAcc','bookieID','betTime','confirmTime','betStatus','recBetStatus'];
$(document).ready(function(){
	$('#contentArea2 h3').text($('#contentArea2 h3').text()+' - '+betDetail[0]);												 
	if(betDetail!=''){
		$('#betDetailTable').append('<tr class="oddTR">'+
													 '<td class="col1">'+betDetail[0]+'</td>'+
													 '<td class="col2">'+betDetail[1]+'</td>'+
													 '<td class="col3">'+betDetail[2]+'</td>'+
													 '<td class="col4"></td>'+
													 '<td class="col5"></td>'+
													 '<td class="col6">'+betDetail[5]+'</td>'+
													 '<td class="col7">'+betDetail[6]+'</td>'+
													 '<td class="col8">'+betDetail[7]+'</td>'+
													 '<td class="col9">'+betDetail[8]+'</td>'+
													 '<td class="col10">'+betDetail[9]+'</td>'+
													 '</tr>');
		for(a=0;a<betDetail[3].length;a++){
			$('#betDetailTable td.col4').append(betDetail[3][a]);
			if(a<betDetail[3].length-1){
				$('#betDetailTable td.col4').append('<br/>');
			}
		}
		for(a=0;a<betDetail[4].length;a++){
			$('#betDetailTable td.col5').append(betDetail[4][a]);
			if(a<betDetail[4].length-1){
				$('#betDetailTable td.col5').append('<br/>');
			}
		}
	}
	drawTableFN();
});
function drawTableFN(){	
	$('#bookieTable').empty();
	if(betDetail[10]==undefined||betDetail[10].length<=1){
		$('#bookieTable').append('<tr class="th1"><th rowspan="2" class="col1">bookie</th>'+
												 '<th rowspan="2" class="col2">bookie accounts</th>'+
												 '<th rowspan="2" class="col3">bookie bet id</th>'+
												 '<th rowspan="2" class="col4">bet date time</th>'+
												 '<th rowspan="2" class="col5">Confirm date time</th>'+
												 '<th colspan="2" style="border-bottom:none" id="priceCell"></th>'+
												 '<th colspan="2" style="border-bottom:none" id="stakeCell"></th>'+
												 '<th rowspan="2" class="col10">Bet Status</th>'+
												 '<th colspan="2" style="border-bottom:none" id="plCell"></th>'+
												 '<th rowspan="2" class="col13">Reconciled Bet Status</th>'+
												 '<th colspan="2" style="border-bottom:none" id="rplCell"></th>'+
												 '</tr><tr class="th2">'+
												 '<th class="col6">customer\'s odds type</th>'+
												 '<th class="col7">account\'s odds type</th>'+
												 '<th class="col8">customer\'s currency</th>'+
												 '<th class="col9">account\'s currency</th>'+
												 '<th class="col11">customer\'s currency</th>'+
												 '<th class="col12">account\'s currency</th>'+
												 '<th class="col14">custome\'s currency</th>'+
												 '<th class="col15">account\'s currency</th></tr>');	
	}else{
		$('#bookieTable').append('<tr class="th1"><th rowspan="2" class="col1"><div id="bookie">bookie</div></th>'+
														 '<th rowspan="2" class="col2"><div id="bookieAcc">bookie accounts</div></th>'+
														 '<th rowspan="2" class="col3"><div id="bookieID">bookie bet id</div></th>'+
														 '<th rowspan="2" class="col4"><div id="betTime">bet&nbsp;date time</div></th>'+
														 '<th rowspan="2" class="col5"><div id="confirmTime">Confirm&nbsp;date time</div></th>'+
														 '<th colspan="2" style="border-bottom:none" id="priceCell"></th>'+
														 '<th colspan="2" style="border-bottom:none" id="stakeCell"></th>'+
														 '<th rowspan="2" class="col10"><div id="betStatus">Bet Status</div></th>'+
														 '<th colspan="2" style="border-bottom:none" id="plCell"></th>'+
														 '<th rowspan="2" class="col13"><div id="recBetStatus">Reconciled Bet Status</div></th>'+
														 '<th colspan="2" style="border-bottom:none" id="rplCell"></th>'+
														 '</tr><tr class="th2">'+
														 '<th class="col6">customer\'s odds type</th>'+
														 '<th class="col7">account\'s odds type</th>'+
														 '<th class="col8">customer\'s currency</th>'+
														 '<th class="col9">account\'s currency</th>'+
														 '<th class="col11">customer\'s currency</th>'+
														 '<th class="col12">account\'s currency</th>'+
														 '<th class="col14">custome\'s currency</th>'+
														 '<th class="col15">account\'s currency</th></tr>');	
		seq=[[5,'priceCell','price'],[6,'stakeCell','stake'],[8,'plCell','P/L'],[9,'rplCell','Reconciled P/L']];
		for(y=0; y<seq.length;y++){
			if(betDetail[seq[y][0]]==undefined){
				t= '---'
			}else{
				t= betDetail[seq[y][0]]
			}
			$('#bookieTable th#'+seq[y][1]).text(seq[y][2]+': '+t);
		}
		$('#bookieTable th #'+sortedBy).addClass('sortedBy');
		for(a=0;a<sortVar.length;a++){
			$('#bookieTable th #'+sortVar[a]).data('id',sortVar[a]).click(function(){
				sortedBy=$(this).data('id');
				drawTableFN();
			});
		}
	}
	
	if(betDetail[10].length>0){
		sortData();
		for(b=0;b<betDetail[10].length;b++){
			$('#bookieTable').append('<tr id="acc'+b+'"><td>'+betDetail[10][b][0]+'</td>'+
															'<td>'+betDetail[10][b][1]+'</td>'+
															'<td>'+betDetail[10][b][2]+'</td>'+
															'<td>'+betDetail[10][b][3][0]+'</td>'+
															'<td>'+betDetail[10][b][4][0]+'</td>'+
															'<td>'+betDetail[10][b][5]+'</td>'+
															'<td>'+betDetail[10][b][6]+'</td>'+
															'<td>'+betDetail[10][b][7]+'</td>'+
															'<td>'+betDetail[10][b][8]+'</td>'+
															'<td>'+betDetail[10][b][9]+'</td>'+
															'<td>'+betDetail[10][b][10]+'</td>'+
															'<td>'+betDetail[10][b][11]+'</td>'+
															'<td>'+betDetail[10][b][12]+'</td>'+
															'<td>'+betDetail[10][b][13]+'</td>'+
															'<td>'+betDetail[10][b][14]+'</td></tr>');
			if(b%2!=0){
				$('#bookieTable #acc'+b).addClass('oddTR');
			}
		}	
	}	
}
function sortData(){
	for(a=0;a<sortVar.length;a++){
		if(sortVar[a]!=sortedBy){			
			sortNow=sortVar[a];
			betDetail[10].sort(sortFN);
		}
	}
	sortNow=sortedBy;
	betDetail[10].sort(sortFN);
};
function sortFN(a,b){
	switch (sortNow){
		case 'bookie':
			if(a[0]>b[0]){return 1;
			}else if(a[0]<b[0]){return -1;
			}else{return 0}
			break;
		case 'bookieAcc':
			if(a[1]>b[1]){return 1;
			}else if(a[1]<b[1]){return -1;
			}else{return 0}
			break;
		case 'bookieID':
			if(a[2]>b[2]){return 1;
			}else if(a[2]<b[2]){return -1;
			}else{return 0}
			break;
		case 'betTime':
			return a[3][1]-b[3][1];
			break;
		case 'confirmTime':
			return a[4][1]-b[4][1];
			break;
		case 'betStatus':
			if(a[9]=='confirmed'){aa=-999
			}else if(a[9]=='pending'){aa=-998
			}else if(a[9]=='accepted'){aa=-997
			}else {aa=0}
			if(b[9]=='confirmed'){bb=-999
			}else if(b[9]=='pending'){bb=-998
			}else if(b[9]=='accepted'){bb=-997
			}else {bb=0}
			return aa-bb;
			break;
		case 'recBetStatus':
			if(a[12]=='confirmed'){aa=-999
			}else if(a[12]=='pending'){aa=-998
			}else if(a[12]=='failed'){aa=-997
			}else {aa=0}
			if(b[12]=='confirmed'){bb=-999
			}else if(b[12]=='pending'){bb=-998
			}else if(b[12]=='failed'){bb=-997
			}else {bb=0}
			return aa-bb;
			break;
		default:
			return 0;
	}	
};