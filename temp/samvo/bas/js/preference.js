// JavaScript Document
$(function(){
	$('#selfExcl #infoBTN').click(function(){
		alertMSGselfExcl();
	});
	$('#selfExcl #selfExBTN').click(function(){
		//alertMSG('confirm self exclusion?');
		confirmGselfExcl();
	});
});
function alertMSGselfExcl(msg){
	$('body').prepend('<div id="msgBox" class="lightBox">'+
									 '<div class="postAdjust" style="width:200px; height:72px;">'+
									 '<div class="contentBox" style="width:400px; height:144px">'+
									 '<div class="contentBox2" style="width:383px; height:89px; padding:0px 10px 0px 10px">'+
									 '<div id="toScroll">'+
									 '<span>If you choose to apply for self-exclusion in this section your account will be closed for a minimum period of 6 months. This will not be reactivated under any circumstances during the exclusion period. A written request will be required for us to consider reopening of the account after the exclusion period. Please click here to get more information on Responsible Gambling.</span>'+
									 '</div>'+
									 '</div>'+
									 '<div id="btnGroup" style="padding-bottom:10px;"><input name="closeBTN" id="closeBTN" type="button" value="close" class="BTN" /></div>'+
									 '</div></div></div>');	
	$('#msgBox #closeBTN').click(function(){																				
		$('#msgBox').fadeOut(100,function(){
			$('body').css('overflow',bodyStatus);																
			$('#msgBox').remove();	
		});	
	});
	bodyStatus=$('body').css('overflow');
	$('body').css('overflow','hidden');
	$('#msgBox').fadeIn(100);	
};

function confirmGselfExcl(){
	if($('#selfExcPeriod span').text()=='please select'){
		alertMSG('please select exclusion period.');
	}else{
		$('body').prepend('<div id="msgBox" class="lightBox">'+
									 '<div class="postAdjust" style="top: 380.5px; width: 175px; height: 70px;">'+
									 '<div class="contentBox" style="display: block; width: 350px; height: 140px;">'+
									 '<div class="contentBox2" style="width: 340px; height: auto; padding 10px">'+
									 '<div class="contentSelfEX">'+
									 '<h3>confirm self exclusion</h3>'+
									 '<p>are you sure you want to self exclue for '+$('#selfExcPeriod span').text()+'?</p>'+									 
									 '<input name="confirmBTN" id="confirmBTN" type="button" value="confirm" class="BTN"/><input name="cancelBTN" id="cancelBTN" type="button" value="cancel" class="BTN"/></div>'+
									 '</div></div></div></div></div>');	
	}
	$('#msgBox #confirmBTN').click(function(){																				
		$('#msgBox').fadeOut(100,function(){
			$('body').css('overflow',bodyStatus);																
			$('#msgBox').remove();
			alertMSG('your account is disabled.');
		});	
	});
	$('#msgBox #cancelBTN').click(function(){																				
		$('#msgBox').fadeOut(100,function(){
			$('body').css('overflow',bodyStatus);																
			$('#msgBox').remove();	
		});	
	});
	bodyStatus=$('body').css('overflow');
	$('body').css('overflow','hidden');
	$('#msgBox').fadeIn(100);	
};