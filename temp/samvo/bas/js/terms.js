// JavaScript Document
$('head').append('<link href="./css/terms.css" rel="stylesheet" type="text/css" />');
$(document).ready(function(){
	// betMonitor BTN
	$('.header #betMinitorBTN').click(function(){
	 window.open('betMonitor.html');	
	});	
	// betMonitor BTN
	$('.header #betMinitorBTN').click(function(){
	 window.open('betMonitor.html');	
	});	
	if((termsAccepted!=null&&!termsAccepted)||(setQuestion!=null&&!setQuestion)){
		hideShowTerms('#termsBox','start');
	}	
	$('#termsPop').click(function(){		
		hideShowTerms('#termsBox','open');
	});	
	
});

function hideShowTerms(trg,act){
	if (act=='close'){		
		$(trg).fadeOut(200,function(){
			$('body').css('overflow','auto')
			$('#termsBox').remove();
		});
	}else {
		addTermsBox();
		$('body').css('overflow','hidden');
		if(act=='start'){			
			$('#termsBox').show();	
			AdjustPositionFN();
		}else if(act=='open'){
			$('body').css('overflow','hidden');
			AdjustPositionFN();
			$('#termsBox').fadeIn(500);	
		}
	}
}
function setQ(startUp){
	if(!startUp){
		$('#termsBox .contentBox').fadeOut(200, function(){
			$('#termsBox .postAdjust .contentBox2').empty();
			$('#termsBox .postAdjust #btnGroup').remove();
			setQ2(false);
		});
	}else{
		setQ2(true);
	}
};
function setQ2(startUp){
	$('#termsBox .postAdjust').width(275).height(140);		
	$('#termsBox .contentBox2').width(550).height('auto').append('<div class="contentQ">'+
								 '<h3>security question setup</h3>'+
								 '<p>this is for password recovery</p>'+
								 '<table><tr><td class="colA">security question</td>'+
								 '<td class="colB" colspan="2">'+
								 '<div id="securityQuestion" class="dropDown">'+
								 '<span>please choose a security question.</span>'+
								 '<div class="dropMenu">'+
								 '<ul>'+
								 '<li id="q1">your favourite sports team.</li>'+
								 '<li id="q2">your mother\'s maiden name</li>'+
								 '<li id="q3">name of your first school</li>'+
								 '<li id="q4">your place of birth</li>'+
								 '</ul>'+
								 '</div>'+
								 '</div>'+
								 '</td></tr>'+
								 '<tr><td class="colA">your answer:</td>'+
								 '<td class="colB" colspan="2"><input type="text" name="securityAnswer" id="securityAnswer" /></td></tr>'+
								 '<tr><td class="colA">recovery email:</td>'+
								 '<td class="colB"><input type="text" name="backupEmail" id="backupEmail" /></td>'+
								 '<td class="errorMessage">error message</td></tr></table>'+
								 '<input name="confirmBTN" id="confirmBTN" type="button" value="confirm" class="BTN"/>'+
								 '</div>');	
	$('.contentQ .dropDown').click(function(){																
		if(!$(this).hasClass('dropDownDisabled')){
			if($(this).children('.dropMenu').css('display')=='none'){
				$('.dropDown .dropMenu').stop().slideUp(100);
				$(this).children('.dropMenu').stop().slideDown(100);
			}else{
				$(this).children('.dropMenu').stop().slideUp(100);
			};	
		};
	});	
	$('.dropDown .dropMenu li').click(function(){																					
		$(this).parent().parent().parent().children('span').text($(this).text());
		$(this).parent().parent().stop().slideUp(100);
	});
	$('.contentQ #confirmBTN').click(function(){
		alert('#submit data to server here#');
		setQuestion = true;
		hideShowTerms('#termsBox','close');	
	});
	if(startUp){
		$('#termsBox .contentBox').width(550).height(280).show();
	}else{
		$('#termsBox .contentBox').width(550).height(280).fadeIn(200);	
	};
}
function addTermsBox(){
	$('body').prepend('<div id="termsBox" class="lightBox">'+
									 '<div class="postAdjust">'+
									 '<div class="contentBox">'+
									 '<div class="contentBox2">'+									
									 '</div>'+
									 '<div id="btnGroup"></div>'+
									 '</div></div></div>');		
	if(!termsAccepted||(termsAccepted&&setQuestion)){
		$('.contentBox2').append('<div id="toScroll">'+
									 '<h3>Terms and Conditions for the Samvo Betbroker Service</h3>'+
									 '<p>1.Introduction</p>'+
									 '<p>These terms and conditions ("Terms and Conditions") are the terms on which Samvo International Limited (hereafter referred to as "we", "us", "our" or "the Company") provides its bet brokerage and related services to you (which includes your heirs, executors, administrators, personal representatives and successors).</p>'+
									 '<p>Samvo International Limited is a company registered in Alderney (company number 1503) with its registered office at Millennium House, Olivier Street, Alderney, Channel Islands, GY9 3TD. The Company is licensed under the laws of Alderney and regulated by the Alderney Gambling Control Commission.</p>'+
									 '<p>To use the Company\'s bet brokerage and related services, one or more Accounts must be opened for you with the Company. Before we can open the Account(s), we require certain information and documents from you, as set out in the Account Registration Form (as defined below), including the Verification Documents (as defined below). Once we have verified the information provided by you we will open the Account(s). Please read these Terms and Conditions carefully as they will govern your use of the Account(s). You should keep a copy of these Terms and Conditions for future reference. You acknowledge that by registering and/or using the Company\'s bet brokerage services that you may lose money on bets, and accept such losses as your own responsibility.</p>'+
									 '<p>By completing and signing/submitting online the Account Registration Form and/or providing the Verification Documents and/ or using our brokerage services, you accept these Terms and Conditions, the Privacy Policy, the Cookie Policy, Insolvency Statement and the Key Terms (each as defined below) (as the same may be updated from time to time). The Account Registration Form, the Terms and Conditions, Betting Rules and Regulations, the Privacy Policy, the Cookie Policy, Insolvency Statement and the Key Terms are collectively referred to as "this Agreement", which is a legally binding contract between you and the Company. This Agreement shall supersede any prior terms of business between you and the Company (or any of its Associates) relating to the provision of bet brokerage related services.</p>'+
									 '<p>2.Definitions and Interpretation</p>'+
									 '<p>2.1<br />'+
									 'Throughout this Agreement, the following expressions shall have the following meanings:<br />'+
									 'Account" means an account enabling you to place Orders via, and otherwise use the functionality of, the Website;<br />'+
									 'Account Registration Form" means the form provided to you by the Company, in any medium, which sets outs the information required from you by the Company for your application to open one or more Accounts with the Company;</p>'+
									 '<p>"Associate" means, in relation to a party, an individual, company, partnership or any other form of entity which directly or indirectly controls, is controlled by or is under common control with such party;</p>'+
									 '<p>"Authorised Person(s)" means any person(s) authorised by you to give instructions to the Company on your behalf, as notified to the Company from time to time in such manner as the Company requires. Authorized Person(s) that you may permit to have access to your Account will need to be pre-approved and verified by us before any Account usage is allowed. For Corporate Betting Accounts, only the Authorized Person(s) duly notified to the Company and permitted by the Company, will be allowed to execute any transactions on the Account, subject to verification being completed successfully. Further, for such corporate clients, it is your responsibility to ensure that you have obtained all necessary consents from shareholders and directors and have taken all necessary actions to enable such Authorized Person(s) to use your Account;</p>'+
									 '<p>"Betting Rules and Regulations" means the rules and regulations displayed on the Website, defined below;</p>'+
									 '<p>"Business Day" means any day which is not a Saturday, Sunday or a public holiday in England;</p>'+
									 '<p>"Commission" means the fees charged by the Company for providing the brokerage Services (defined below), as set out in the Key Terms;</p>'+
									 '</div>');
		$('contentBox').append('<div id="btnGroup"></div>');		
		if(termsAccepted||termsAccepted==null){//if terms accepted or not logged in (null case)
			$('#termsBox #btnGroup').append('<input name="closeBTN" id="closeBTN" type="button" value="close" class="BTN" />');
			$('#termsBox #closeBTN').click(function(){
				hideShowTerms('#termsBox','close');	
			});
		}else{
			$('#termsBox #btnGroup').append('<input name="acceptBTN" id="acceptBTN" type="button" value="accept" class="BTN" /><input name="notAcceptBTN" id="notAcceptBTN" type="button" value="do not accept" class="BTN" />');
			$('#termsBox #acceptBTN').click(function(){
				termsAccepted=true;
				if(setQuestion){
					hideShowTerms('#termsBox','close');	
				}else{
					setQ(false);
				}				
			});
			$('#termsBox #notAcceptBTN').click(function(){
				alert('##log out user here here##');
				window.location.href = 'login.html';
			});
		}
	}else if(termsAccepted&&!setQuestion){
		setQ(true);
	}
}