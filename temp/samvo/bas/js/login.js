// JavaScript Document
animTime=250;
$(document).ready(function(){	
	$('#forgotPW').click(function(){		
		pwFN('open');
	});		
});
function pwFN(act){	
	if(act=='close'){
	}else if(act=='open'){
		addPwBox();
	}
}
function addPwBox(){
	$('body').prepend('<div id="pwBox" class="lightBox">'+
										'<div class="postAdjust">'+
										'<div class="contentBox">'+
										'<div id="closeBTN"></div>'+
										'<div class="contentBox2">'+
										'<h3>forget password</h3>'+
										'<div id="contentBox3"></div>'+
										'</div>'+
										'</div>'+
										'</div>'+
										'</div>');	
	$('#pwBox #closeBTN').click(colsepwBox);
	$('#pwBox #contentBox3').append('<p>your user name:</p>'+
																	'<input name="userNameTXT" id="userNameTXT" class="textField" type="text" />'+
																	'<p id="errorTXT"></p>'+
																	'<div id="btnBox"><input name="nextBTN" id="nextBTN" type="button" value="next" class="BTN" /></div>');
	$('#pwBox #contentBox3 #nextBTN').click(function(){
		$('#pwBox #contentBox3 #userNameTXT').prop("disabled", true);
		$('#pwBox #contentBox3 #nextBTN').prop("disabled", true);
		alert('## submit to server here ##');
		//
		hasUser=true;		
		if(!hasUser){
			$('#pwBox #contentBox3 #errorTXT').text('user name incorrect.').show();
			$('#pwBox #contentBox3 #userNameTXT').prop("disabled", false).val('');
			$('#pwBox #contentBox3 #nextBTN').prop("disabled", false);			
		}else{
			qTXT = 'what is your favourite sports team?';
			$('#pwBox #contentBox3').fadeOut(animTime,function(){
				$('#pwBox #contentBox3').empty().append('<p>user001, '+qTXT+'</p>'+
																								'<p>your answer:</p>'+
																								'<input name="answerTXT" id="answerTXT" class="textField" type="text" />'+
																								'<p id="errorTXT"></p>'+
																								'<div id="btnBox"><input name="nextBTN" id="nextBTN" type="button" value="next" class="BTN" /></div>').fadeIn(animTime);
				$('#pwBox #contentBox3 #nextBTN').click(function(){
					 $('#pwBox #contentBox3 #answerTXT').prop("disabled", true);
					 $('#pwBox #contentBox3 #nextBTN').prop("disabled", true);
					 alert('## submit to server here ##');
					 //
					 answerCorrect=true;	
					 recoveryEmail='xxx@xxx.com';	
					 if(!answerCorrect){
						 $('#pwBox #contentBox3 #errorTXT').text('answer incorrect.').show();
						 $('#pwBox #contentBox3 #answerTXT').prop("disabled", false).val('');
						 $('#pwBox #contentBox3 #nextBTN').prop("disabled", false);
					 }else{						 
						 $('#pwBox #contentBox3').fadeOut(animTime,function(){
							 $('#pwBox #contentBox3').empty().append('<p>thank you user001,</p>'+
																											 '<p>your new password will send to your email:<br/>'+recoveryEmail+'</p>'+
																											 '<div id="btnBox"><input name="closeBTN2" id="closeBTN2" type="button" value="close" class="BTN" /></div>').fadeIn(animTime);
							 $('#pwBox #contentBox3 #closeBTN2').click(colsepwBox);
						 });
					 };
				 });
			 });
		}
	});		
	$('#pwBox').fadeIn(animTime);	
}

function colsepwBox(){
	$('#pwBox').fadeOut(animTime,function(){
		$('body').remove('#pwBox');
	});	
}