// JavaScript Document
sortVar=['userStatus','loginStatus','bookie','username','currency','balance','oddsType','positionTaking'];

$(document).ready(function(){ 	
	// betMonitor BTN
	$('.header #betMinitorBTN').click(function(){
	 window.open('betMonitor.html');	
	});	
	drawTableFN();
});

function drawTableFN(){	
	titleTXT=$('#contentArea2 h3').text();
	$('#contentArea2').empty().append('<h3>'+titleTXT+'</h3>');
	if(betAccs.length>0){
		$('#contentArea2').append('<div id="controlBox">'+
															'<input name="selAll" id="selAll" type="checkbox" value="" />'+
															'<input name="enableBTN" id="enableBTN" value="enable" type="button" class="btn" />'+
															'<input name="disableBTN" id="disableBTN" value="disable" type="button" class="btn" />'+
															'</div>');
		$('#selAll').click(function(){
			if($(this).attr("checked")=="checked"){
				for(a=0;a<betAccs.length;a++){
					$('#bookieTable #'+betAccs[a][2]+'_'+betAccs[a][3]+'_'+a+'_select').prop('checked', true);
				}
			}else{
				for(a=0;a<betAccs.length;a++){
					$('#bookieTable #'+betAccs[a][2]+'_'+betAccs[a][3]+'_'+a+'_select').prop('checked', false);
				}
			}
		});
		$('#enableBTN').click(function(){
			for(a=0;a<betAccs.length;a++){
				if($('#bookieTable #'+betAccs[a][2]+'_'+betAccs[a][3]+'_'+a+'_select').attr("checked")=="checked"&&!betAccs[a][0]){
					betAccs[a][0]=true;
				}
			}
			alert('## submit to server here ##');
			drawTableFN();		
		});
		$('#disableBTN').click(function(){
			for(a=0;a<betAccs.length;a++){
				if($('#bookieTable #'+betAccs[a][2]+'_'+betAccs[a][3]+'_'+a+'_select').attr("checked")=="checked"&&betAccs[a][0]){					
					betAccs[a][0]=false;
				}
			}
			alert('## submit to server here ##');
			drawTableFN();		
		});		
	}
	$('#contentArea2').append('<table id="bookieTable" width="0" border="0" cellspacing="0" cellpadding="0"></table>');

	if(betAccs.length<=0){
		$('#contentArea2 #bookieTable').append('<tr class="th"><th class="col1">&nbsp;</th>'+
																	 '<th class="col2">user status</th>'+
																	 '<th class="col3">account status</th>'+
																	 '<th class="col4">bookie</th>'+
																	 '<th class="col5">username</th>'+
																	 '<th class="col6">currency</th>'+
																	 '<th class="col7">balance</th>'+
																	 '<th class="col8">odds type</th>'+
																	 '<th class="col9">position taking</th></tr>');
		if(showPT){
			$('#contentArea2 #bookieTable .th').append('<th class="col9">position taking</th>');
		}
	}else if(betAccs.length>0){
		$('#contentArea2 #bookieTable').append('<tr class="th"><th class="col1">&nbsp;</th>'+
																			 '<th class="col2"><div id="userStatus">user status</div></th>'+
																			 '<th class="col3"><div id="loginStatus">account status</div></th>'+
																			 '<th class="col4"><div id="bookie">bookie</div></th>'+
																			 '<th class="col5"><div id="username">username</div></th>'+
																			 '<th class="col6"><div id="currency">currency</div></th>'+
																			 '<th class="col7"><div id="balance">balance</div></th>'+
																			 '<th class="col8"><div id="oddsType">odds type</div></th></tr>');
		if(showPT){
			$('#contentArea2 #bookieTable .th').append('<th class="col9"><div id="positionTaking">position taking</div></th>');
		}
		sortData();
		$('#contentArea2 #bookieTable .th #'+sortedBy).addClass('sortedBy');
		for(a=0;a<sortVar.length;a++){
			$('#contentArea2 #bookieTable #'+sortVar[a]).data('id',sortVar[a]).click(function(){
				sortedBy=$(this).data('id');
				drawTableFN();
			});
		}		
		for(a=0;a<betAccs.length;a++){
			$('#contentArea2 #bookieTable').append('<tr id="'+betAccs[a][2]+'_'+betAccs[a][3]+'_'+a+'">'+
																						 '<td class="col1"><input name="" type="checkbox" value="" class="checkBox" id="'+betAccs[a][2]+'_'+betAccs[a][3]+'_'+a+'_select" /></td>'+
																						 '<td class="col2"></td>'+
																						 '<td class="col3"><div>'+betAccs[a][1]+'</div></td>'+
																						 '<td class="col4">'+betAccs[a][2]+'</td>'+
																						 '<td class="col5">'+betAccs[a][3]+'</td>'+
																						 '<td class="col6">'+betAccs[a][4]+'</td>'+
																						 '<td class="col7">'+betAccs[a][5]+'</td>'+
																						 '<td class="col8">'+betAccs[a][6]+'</td></tr>');			
			if(showPT){
				$('#contentArea2 #bookieTable #'+betAccs[a][2]+'_'+betAccs[a][3]+'_'+a).append('<td class="col9">'+betAccs[a][7]+'</td>');
			}
			$('#contentArea2 #bookieTable #'+betAccs[a][2]+'_'+betAccs[a][3]+'_'+a+'_select').data('bookie',betAccs[a][2]).data('username',betAccs[a][3]).click(checkBOXFN);			
			trg='#contentArea2 #bookieTable #'+betAccs[a][2]+'_'+betAccs[a][3]+'_'+a+' .col2';
			if(betAccs[a][0]){
				$(trg).removeClass('disabled').text('enabled');
			}else{
				$(trg).addClass('disabled').text('disabled');
			}			
			trg='#contentArea2 #bookieTable #'+betAccs[a][2]+'_'+betAccs[a][3]+'_'+a+' .col3 div';
			if(betAccs[a][1]=='logged in'){
				$(trg).addClass('statusGreen');
			}else{
				$(trg).addClass('statusRed');
			}			
			if(a%2!=0){
				$('#contentArea2 #bookieTable #acc'+a).addClass('oddTR');
			}
		}		
	}
}
function checkBOXFN(){
	var allChecked = true;
	for(a=0;a<betAccs.length;a++){
		if($('#bookieTable #acc'+a+'_select').attr("checked")!="checked"){
			allChecked = false;
			break
		}
	}
	if(allChecked){
		$('#selAll').prop('checked', true);
	}else{
		$('#selAll').prop('checked', false);
	}
}
function sortData(){
	for(a=0;a<sortVar.length;a++){
		if(sortVar[a]!=sortedBy){			
			sortNow=sortVar[a];
			betAccs.sort(sortFN);
		}
	}
	sortNow=sortedBy;
	betAccs.sort(sortFN);
};
function sortFN(a,b){
	switch (sortNow){
		case 'userStatus':
			if(a[0]){ aa=-999 }else{ aa=-998};
			if(b[0]){ bb=-999 }else{ bb=-998};
			return aa-bb;
			break;
		case 'loginStatus':
			if((a[1]=='logged in'||a[1]=='logged out')&&(b[1]=='logged in'||b[1]=='logged out')){
				if(a[1]=='logged in'){
					aa=-999
				}else if(a[1]=='logged out'){
					aa=-998
				}
				if(b[1]=='logged in'){
					bb=-999
				}else if(b[1]=='logged out'){
					bb=-998
				}
				return aa-bb;			
			}else if((a[1]=='logged in'||a[1]=='logged out')){
				return -1;
			}else if((b[1]=='logged in'||b[1]=='logged out')){
				return 1;
			}else{
				if(a[1]>b[1]){return 1;
				}else if(a[1]<b[1]){return -1;
				}else{return 0;}				
			}
			break;
		case 'bookie':
			if(a[2]>b[2]){return 1;
			}else if(a[2]<b[2]){return -1;
			}else{return 0;}
			break;
		case 'username':
			if(a[3]>b[3]){return 1;
			}else if(a[3]<b[3]){return -1;
			}else{return 0;}
			break;
		case 'currency':
			if(a[4]>b[4]){return 1;
			}else if(a[4]<b[4]){return -1;
			}else{return 0;}
			break;
		case 'balance':
			if(a[5]>b[5]){return 1;
			}else if(a[5]<b[5]){return -1;
			}else{return 0;}
			break;
		case 'oddsType':
			if(a[6]>b[6]){return 1;
			}else if(a[6]<b[6]){return -1;
			}else{return 0;}
			break;
		case 'positionTaking':
			if(a[7]>b[7]){return 1;
			}else if(a[7]<b[7]){return -1;
			}else{return 0;}
			break;
		default:
			return 0;
	}	
};