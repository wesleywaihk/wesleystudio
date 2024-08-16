// JavaScript Document
pages=[['home','moreinfo','tnc','rules','privacy','responsible','ageverification','cookiepolicy'],['aboutus'],['privileges'],['transactions'],['faqs'],['contactus'],['register']];
checkHash = window.location.hash.split(".")[0];
checkHash = checkHash.toLowerCase();
if(! /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || screen.width>=760 ) {
	hashVar='#'+pages[0][0];
	if(checkHash!=''){
		for(a=0; a<pages.length; a++){
			if(a==0){
				for(b=2; b<pages[0].length; b++){
					if(checkHash=='#'+pages[0][b]){
						window.open('http://samvobetbroker.com/eng/html/'+pages[a][b]+'.html','_top');
						break;
					};
				};
			}else{
				for(b=0; b<pages[a].length; b++){
					if(checkHash=='#'+pages[a][b]){
						hashVar=window.location.hash;
						break;
					};
				};
			};
		};
	};
	window.open('http://www.samvobetbroker.com/eng/main.php'+hashVar,'_top');
};
currCell=1;
pageW=640;
animTime=600;
var freezeBTN = false;
var siteAddress = 'http://www.samvobetbroker.com/';
$(function(){
	// load page --
	currPage=1;	
	if(checkHash!=''){
		if(checkHash=='#register'){
			loadRegister();
			$('#register').css('top','0%');
			currPage=1;
		}else{
			for(a=1;a<=pages.length-1;a++){
				for(b=0;b<pages[a-1].length;b++){
					if(checkHash=='#'+pages[a-1][b]){
						currPage=a;
						break;
					};
				};
			};
		};
	}else{
		window.location.hash='#'+pages[0][0];
	};	
	$('#unit'+currCell).load(pages[currPage-1][0]+".html");
	// end of load page --

	checkUpDown(currPage, false);
	if(currPage==1){
		$('#menuBTN').hide();
	};

	resize();
	$('#scroller').css('top',0);
	$('.subPage').css('left',pageW);

	$('#unit1').css('top',0);
	$('#unit2').css('top',pageH);
	// menu --
	$('#menuBTN').click(function(){
		$('#mainMenu').stop().fadeIn(animTime/2);
	});
	for(a=1;a<=pages.length;a++){
		$('#mainMenu #p'+a).data('num',a).click(function(){
			gotoPage($(this).data('num'),'','closeMenu');
		});
	};

	$('#mainMenu #menuCloseBTN').click(function(){closeMenu()});
	// end of menu --

	$('#mainNav > #upArrow').click(function(){
		if(currPage!=1){
			gotoPage(currPage-1,'','');
		};
	});
	$('#mainNav > #downArrow').click(function(){
		if(currPage!=pages.length){
			gotoPage(currPage+1,'','');
		};
	});

	$(window).resize(function(){
		resize();
	});
	$(window).hashchange(function(){
		if(!freezeBTN){
			page = window.location.hash.split(".")[0];			
			for(a=0; a<pages.length; a++){
				if(a==0){
					for(b=2; b<pages[0].length; b++){
						if(page=='#'+pages[0][b]){
							pageNum=1;
							break;
						};
					};
				}else{
					for(b=0; b<pages[a].length; b++){
						if(page=='#'+pages[a][b]){
							pageNum=a+1;
							break;
						};
					};	
				};
			};
			subPage = window.location.hash.split(".")[1];
			if(subPage==undefined){
				subPage='';				
			}
			gotoPage(pageNum,subPage,'userClickBack');
		};
	});	
});

function contentHideShow(mother,child,show){
	if(show){
		$('#menuBTN').stop().fadeOut(animTime/2);
		$(mother+' #menu').stop().fadeOut(animTime/2,function(){
			$(mother+' '+child).stop().fadeIn(animTime);
		});
	}else{
		$(mother+' '+child).stop().fadeOut(animTime/2,function(){
			$('#menuBTN').stop().fadeIn(animTime);
			$(mother+' #menu').stop().fadeIn(animTime);
		});
	};
};
function closeMenu(){
	$('#mainMenu').stop().fadeOut(animTime/2);
};
function resize(){
	pageH= Math.max($(window).height(),712);
	
	$('#mainNav, #register, #wrapper, #alertLB, #mainMenu, .pages, .pages > div, #innerScroller, .content, .content .subPage').height(pageH);
	$('#scroller').height(pageH*2);
	$('.content .textScroll').height(pageH-110);
	$('.content .textScrollNews').height(pageH-170);
	$('#privileges #content2 .textScroll').height(pageH-100).css('top',100);
	//$('#careers #subPage1 .textScroll').height(pageH-145);	

	if(pageH<865){
		$('#mainNav > div').height(40).css('background-position','10px 18px');
		$('#mainMenu > ul').css('top','95px').css('padding-top','18px').css('padding-bottom','6px');

		$('#home').css('background-position','left bottom');
		$('#home h1').css('margin-top','0px').css('background-size','86%');
		$('#home ul#p1menu').css('width','330px').css('top','175px').css('left','147px');
		$('#home ul#p1menu li').css('width','330px').css('line-height','100%').css('font-size','18pt');
		$('#home footer nav').css('margin-bottom','3px').css('height','30px');
		$('#home footer nav *').css('height','30px').css('line-height','30px');
		$('#home footer nav ul li').css('background-position-y','-9px');
		$('#home footer #moreInfo').css('font-size','12pt');

		$('#aboutus').css('background-position','0px -120px');
		$('#aboutus #content1 h2').css('margin-top','240px').css('font-size','33pt');;
		$('#aboutus #content1 p').css('font-size','15pt').css('line-height','140%');
		$('#aboutus #content1 ul#p1menu').css('top','470px');
		$('#aboutus #content1 ul#p1menu li').css('font-size','22pt').css('padding','19px 55px 12px 25px');
		
		$('#privileges').css('background-position','0px -100px');
		$('#privileges #content1 h2').css('margin-top','97px').css('font-size','33pt');
		$('#privileges #content1 p').css('font-size','15pt').css('line-height','135%');	
		$('#privileges #content1 ul#p1menu').css('top','340px');
		$('#privileges #content1 ul#p1menu li').css('font-size','20pt').css('padding','18px 55px 11px 25px');
		
		$('#transactions').css('background-position','0px -75px');
		$('#transactions h2').css('margin-top','75px').css('font-size','33pt');
		$('#transactions p').css('font-size','14pt').css('line-height','130%').css('margin-bottom','15px');
		
		$('#faqs').css('background-position','0px -100px');
		$('#faqs #content1 h2').css('margin-top','75px').css('font-size','33pt');
		$('#faqs #content1 ul#p1menu').css('top','150px');
		$('#faqs #content1 ul#p1menu li').css('font-size','22pt').css('padding','18px 55px 11px 25px');
		
		$('#contactus').css('background-position','0px -100px');
		$('#contactus #content1 h2').css('margin-top','75px').css('font-size','33pt');
		$('#contactus #content1 ul#p1menu').css('top','300px');
		$('#contactus #content1 p').css('line-height','140%');
		$('#contactus #content1 p#p2').css('margin-top','305px');
	}else{
		$('#mainNav > div').height(60).css('background-position','10px 20px');
		$('#mainMenu > ul').css('top','153px').css('padding-top','22px').css('padding-bottom','10px');
		
		$('#home').css('background-position','left top');
		$('#home h1').css('margin-top','32px').css('background-size','100%');
		$('#home ul#p1menu').css('width','430px').css('top','230px').css('left','97px');
		$('#home ul#p1menu li').css('width','430px').css('line-height','110%').css('font-size','20pt');
		$('#home footer nav').css('margin-bottom','10px').css('height','40px');
		$('#home footer nav *').css('height','40px').css('line-height','40px');
		$('#home footer nav ul li').css('background-position-y','0px');
		$('#home footer #moreInfo').css('font-size','14pt');
		
		$('#aboutus').css('background-position','left top');
		$('#aboutus #content1 h2').css('margin-top','347px').css('font-size','35pt');
		$('#aboutus #content1 p').css('font-size','16.5pt').css('line-height','123%');
		$('#aboutus #content1 ul#p1menu').css('top','612px');
		$('#aboutus #content1 ul#p1menu li').css('font-size','28pt').css('padding','25px 55px 15px 25px');
		
		$('#privileges').css('background-position','left top');
		$('#privileges #content1 h2').css('margin-top','127px').css('font-size','35pt');
		$('#privileges #content1 p').css('font-size','16.5pt').css('line-height','110%');
		$('#privileges #content1 ul#p1menu').css('top','392px');
		$('#privileges #content1 ul#p1menu li').css('font-size','22pt').css('padding','25px 55px 15px 25px');
		
		$('#transactions').css('background-position','left top');
		$('#transactions h2').css('margin-top','107px').css('font-size','35pt');
		$('#transactions p').css('font-size','16.5pt').css('line-height','120%').css('margin-bottom','30px');
		
		$('#faqs').css('background-position','left top');
		$('#faqs #content1 h2').css('margin-top','95px').css('font-size','35pt');
		$('#faqs #content1 ul#p1menu').css('top','179px');
		$('#faqs #content1 ul#p1menu li').css('font-size','28pt').css('padding','25px 55px 15px 25px');
		
		$('#contactus').css('background-position','left top');
		$('#contactus #content1 h2').css('margin-top','95px').css('font-size','35pt');
		$('#contactus #content1 ul#p1menu').css('top','356px');
		$('#contactus #content1 p').css('line-height','160%');
		$('#contactus #content1 p#p2').css('margin-top','365px');
	};
};
function gotoPage(num,subPage,extraAct){
	if(!freezeBTN){
		if(extraAct!='closeMenu'||pages[(num-1)][0]=='register'){
			gotoPage2(num,subPage,extraAct);
		}else{
			closeMenu();
			setTimeout(function(){
				gotoPage2(num,subPage,extraAct);
			},animTime/2+100);			
		};
	};
	function gotoPage2(NUM,subPage,extraAct){
		if(NUM!=currPage||pages[NUM-1][0]=='register'){			
			freezeBTN = true;
			_gaq.push(['_trackEvent', 'mobileBtn_page'+(NUM), 'clicked']);
			if(pages[NUM-1][0]=='register'){
				loadRegister();
				$('#register').stop().animate({top:'0%'},animTime*.66,function(){					
					changeHash(pages[(NUM-1)][0],'');
					closeMenu();
					gotoPage3(pages[0][0],false);			
				});			
			}else if(NUM!=currPage){
				changeHash(pages[(NUM-1)][0],subPage);
				gotoPage3(pages[(NUM-1)][0],true);
			};
			if($('#mainNav').css('left')!='0px'){
				$('#mainNav').stop().hide().css('left',0).fadeIn(animTime);
				checkUpDown(NUM, false);
			}else{
				checkUpDown(NUM, true);
			};			
			if(NUM==1){
				$('#menuBTN').stop().fadeOut(animTime);
			}else if(pages[NUM-1][0]=='register'){
				$('#menuBTN').hide();
			}else{
				$('#menuBTN').stop().fadeIn(animTime);
			};		
		}else if(NUM==currPage&&pages[NUM-1][0]=='faqs'&&extraAct=='userClickBack'){ //for open faqs subpage when user press back
			gotoPage3(pages[(NUM-1)][0],false);
		};
		function gotoPage3(thePage,animate){
			if(animate){
				aTime=animTime;
			}else{
				aTime=0;
			}
			if(currCell==1){
				trgCell=2;
			}else{
				trgCell=1;
			};
			$('#unit'+trgCell).empty().load(thePage+".html");		
			if(currPage<NUM){
				$('#scroller').css('top',0);
				$('#unit'+currCell).css('top',0);
				$('#unit'+trgCell).css('top',pageH);
				$('#scroller').stop().animate({top:0-pageH},aTime,function(){
					clearAfter();
				});
			}else{
				$('#scroller').css('top',0-pageH);
				$('#unit'+trgCell).css('top',0);
				$('#unit'+currCell).css('top',pageH);
				$('#scroller').stop().animate({top:0},aTime,function(){
					clearAfter();
				});
			};
			function clearAfter(){
				freezeBTN = false;
				$('#unit'+currCell).empty();
				currCell=trgCell;
				currPage=NUM;
				//$('#innerScroller').css('left','0px');
			};			
		};		
	};		
};
function loadRegister(){
	$('#register').load("register.html", function(){
		$('#register #closeBTN').click(function(){
			freezeBTN = true;
			changeHash(pages[0][0],'');
			$('#register').stop().animate({top:'100%'},animTime*.66,function(){
				$('#register').empty();
				currPage=1;
				freezeBTN = false;
			});
		});
	});
};
function checkUpDown(NUM, animate){
	if(animate){		
		aTime=animTime;
	}else{
		aTime=0;
	};
	if(NUM==1||pages[NUM-1][0]=='register'){
		$('#mainNav > #upArrow').stop().fadeOut(aTime);
		$('#mainNav > #downArrow').stop().fadeOut(aTime);
	}else if(pages[NUM-1][0]=='contactus'){
		$('#mainNav > #upArrow').stop().fadeIn(aTime);
		$('#mainNav > #downArrow').stop().fadeOut(aTime);
	}else{
		$('#mainNav > #upArrow').stop().fadeIn(aTime);
		$('#mainNav > #downArrow').stop().fadeIn(aTime);
	};
};
function upDownPosition(left,time,anim){
	$('#mainNav').stop().animate({'left':left},time);
};
function changeHash(trg,subPage){
	if(subPage!=''){
		window.location.hash='#'+trg+'.'+subPage;
	}else{
		window.location.hash='#'+trg;
	}
};
function openLB(msg, _closeBTN, _focus, _scrollObj, _scrollTo){
	$('#wrapper').prepend('<div id="alertLB"><div><div><div id="scrollArea"><div>'+msg+'</div></div><div id="closeBTN">close</div></div></div></div>');
	if(!_closeBTN){
		$('#alertLB #closeBTN').hide();
	}
	$('#alertLB #closeBTN').click(function(){		
		$('#alertLB').fadeOut(animTime/2,function(){
			$('#alertLB').remove();
			if(_scrollObj!=undefined+":"+_scrollTo!=undefined){
				$(_scrollObj).animate({'scrollTop':_scrollTo},animTime,function(){
					if(_focus&&_focus!=''){
						$(_focus).focus();
					};
				});
			}else if(_focus&&_focus!=''){
				$(_focus).focus();
			};
		});
		
	});
	$('#alertLB').height(pageH).fadeIn(animTime/2);
};
function isValidEmailAddress(emailAddress) {
	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	return pattern.test(emailAddress);
};
function mailSent(success){
	if(success){
		$('#alertLB #scrollArea > div').text('your message has been sent successfully');		
	}else{
		$('#alertLB #scrollArea > div').text("* network error, please try again later");
	};
	$('#alertLB #closeBTN').fadeIn(animTime/2);
};