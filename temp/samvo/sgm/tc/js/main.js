// JavaScript Document
if(! /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || screen.width>=760 ) {
	if(window.location.hash!=''){
		hashVar=window.location.hash;
	}else{
		hashVar='#home';
	}
	if(/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		window.open('http://www.samvogroup.com/tc/main.html'+hashVar,'_top');
	}else{
		window.open('http://www.samvogroup.com/tc/'+hashVar,'_top');
	}
}
currCell=1;
pageW=640;
animTime=600;
pages=[['home'],['whoweare','whoweare','socialresponsibility'],['whatwedo','whatwedo','gaming&entertainment','gamingcafe','samvoVip'],['samvonews'],['businessopportunities'],['careers'],['contactus']];
var xmlData = 0;
var freezeBTN = false;
var siteAddress = 'http://www.samvogroup.com';
$(function(){
	// load page --
	currPage=1;
	checkHash = window.location.hash.split(".")[0];
	if(checkHash!=''){
		for(a=1;a<=pages.length;a++){
			for(b=0;b<pages[a-1].length;b++){
				if(checkHash=='#'+pages[a-1][b]){
					currPage=a;
					break;
				}
			};
		};
	}else{
		window.location.hash='#'+pages[0][0];
	}
	$('#unit'+currCell).load(pages[currPage-1][0]+".html");
	// end of load page --

	checkUpDown(currPage, false);
	if(currPage==1){
		$('#menuBTN').hide();
	}

	resize();
	$('#scroller').css('top',0);
	$('.subPage').css('left',pageW);

	$('#unit1').css('top',0);
	$('#unit2').css('top',pageH);
	
	//xml --
	window.dateObj = new Date();
	if (!xmlData){	
		$.ajax({ 			
			type: "GET",
			url: "data.php?"+window.dateObj.getTime(),	
			dataType: "xml",
			success: onLoadData
		});			
	};	
	function onLoadData(xml){	
		xmlData = xml;	
	};
	//end of xml --	
	
	// menu --
	$('#menuBTN').click(function(){
		$('#mainMenu').stop().fadeIn(animTime/2);
	});
	for(a=1;a<=pages.length;a++){
		$('#mainMenu #p'+a).data('num',a).click(function(){
			gotoPage($(this).data('num'),true);			
		});			
	};
	$('#lang .en').click(function(){
		swapLang('en');
	});
	$('#lang .cn').click(function(){
		swapLang('sc');
	});		
	$('#mainMenu #menuCloseBTN').click(function(){closeMenu()});	
	// end of menu --

	$('#mainNav > #upArrow').click(function(){
		if(currPage!=1){
			gotoPage(currPage-1,false);
		}
	});	
	$('#mainNav > #downArrow').click(function(){
		if(currPage!=pages.length){
			gotoPage(currPage+1,false);
		}
	});
	
	$(window).resize(function(){
		resize();	
	});	
});
function swapLang(trg){
	temp=location.pathname;
	for(a=0; a<temp.length;a++){
		if(temp.substr(a,3)=='/tc'){
			url=location.protocol+'//'+location.hostname+temp.substr(0,a)+'/'+trg+temp.substr(a+3,temp.length)+location.hash;
			window.open(url,'_top');
			break;
		}
	}	
}
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
	}
}
function closeMenu(){		
	$('#mainMenu').stop().fadeOut(animTime/2);
}
function resize(){
	pageH= Math.max($(window).height(),712);  //$(window).height(); //Math.max($(window).height(),870); 
	$('#infoBox').html(pageH);
	
	$('#mainNav').height(pageH);
	/*if(pageH<865){
		$('#mainNav').hide();
	}else{
		$('#mainNav').show();		
	}*/
	
	$('#wrapper').height(pageH);
	$('#mainMenu').height(pageH);
	$('#scroller').height(pageH*2);

	$('.pages').height(pageH);
	$('.pages > div').height(pageH);
	$('#innerScroller').height(pageH);

	$('.content').height(pageH);
	$('.content .textScroll').height(pageH-110);
	$('.content .textScrollNews').height(pageH-170);
	$('.content .subPage').height(pageH);
	
	$('#careers #subPage1 .textScroll').height(pageH-145);
	
	if(pageH<865){
		$('#mainNav > div').height(40).css('background-position','10px 18px');
		
		$('#mainMenu > ul').css('top','95px');
		$('#mainMenu > ul > li:not(:last-child)').css('padding-top','14px').css('padding-bottom','10px');
		$('#mainMenu > ul > li:last-child').css('margin-top','25px');
		
		$('#home').css('background-position','73px 24px');
		$('#home > ul').css('top',225);
		$('#home > ul > li:not(:last-child)').css('padding-top','12px').css('padding-bottom','8px').css('margin-bottom','8px');
		$('#home > ul > li:last-child').css('margin-top','20px');
		
		$('#whoWeAre > #innerScroller > #content1 > ul').css('top',360);
		
		$('#whatWeDo').css('background-position','0px -40px');
		
		$('#samvonews').css('background-position','0px 40px');
		$('#samvonews > #innerScroller > #content1 > ul').css('top',500);		

		$('#businessOpportunities > div').css('top',280);
		
		$('#careers > #innerScroller > #content1 > ul').css('top',500);
		
		$('#contactUs').css('background-position','0px 140px');
	}else{		
		$('#mainNav > div').height(60).css('background-position','10px 20px');
		
		$('#mainMenu > ul').css('top','153px');
		$('#mainMenu > ul > li:not(:last-child)').css('padding-top','18px').css('padding-bottom','14px');
		$('#mainMenu > ul > li:last-child').css('margin-top','40px');
		
		$('#home').css('background-position','73px 39px');
		$('#home > ul').css('top',283);
		$('#home > ul > li:not(:last-child)').css('padding-top','15px').css('padding-bottom','13px').css('margin-bottom','12px');
		$('#home > ul > li:last-child').css('margin-top','40px');
		
		$('#whoWeAre > #innerScroller > #content1 > ul').css('top',430);
		
		if(pageH>987){
			$('#whatWeDo').css('background-position','left bottom');
		}else{
			$('#whatWeDo').css('background-position','0px 80px');
		}
		
		$('#samvonews').css('background-position','0px 90px');
		$('#samvonews > #innerScroller > #content1 > ul').css('top',660);		

		$('#businessOpportunities > div').css('top',398);
				
		$('#careers > #innerScroller > #content1 > ul').css('top',660);	
		
		$('#contactUs').css('background-position','0px 329px');
	}	
};
function gotoPage(num, closeMenuVar){
	if(!freezeBTN){
		if(closeMenuVar){
			closeMenu();
			setTimeout(function(){
				gotoPage2(num);
			},animTime/2+100);
		}else{
			gotoPage2(num);
		}
	}
	function gotoPage2(NUM){
		if(num!=currPage){
			freezeBTN = true;
			_gaq.push(['_trackEvent', 'mobileBtn_page'+(NUM), 'clicked']);
			changeHash(pages[(NUM-1)][0]);
			if(currCell==1){
				trgCell=2;
			}else{
				trgCell=1;
			}
			$('#unit'+trgCell).empty().load(pages[(NUM-1)][0]+".html");
			if(currPage<NUM){
				$('#scroller').css('top',0);
				$('#unit'+currCell).css('top',0);
				$('#unit'+trgCell).css('top',pageH);
				$('#scroller').stop().animate({top:0-pageH},animTime,function(){clearAfter()});
			}else{
				$('#scroller').css('top',0-pageH);
				$('#unit'+trgCell).css('top',0);
				$('#unit'+currCell).css('top',pageH);
				$('#scroller').stop().animate({top:0},animTime,function(){clearAfter()});
			}
			if($('#mainNav').css('left')!='0px'){
				$('#mainNav').stop().hide().css('left',0).fadeIn(animTime);
				checkUpDown(NUM, false);
			}else{
				checkUpDown(NUM, true);
			}
			if(NUM==1){
				$('#menuBTN').stop().fadeOut(animTime);
			}else{
				$('#menuBTN').stop().fadeIn(animTime);
			}
			function clearAfter(){
				freezeBTN = false;
				$('#unit'+currCell).empty();
				currCell=trgCell;
				currPage=NUM;				
				$('#innerScroller').css(left,0);
			};
		}
	};			
};
function checkUpDown(NUM, animate){
	if(!animate){
		if(NUM==1){
			$('#mainNav > #upArrow').stop().hide();
			$('#mainNav > #downArrow').stop().show();
		}else if(NUM==pages.length){
			$('#mainNav > #upArrow').stop().show();
			$('#mainNav > #downArrow').stop().hide();
		}else{
			$('#mainNav > #upArrow').stop().show();
			$('#mainNav > #downArrow').stop().show();
		}
	}else{
		if(NUM==1){
			$('#mainNav > #upArrow').stop().fadeOut(animTime);
			$('#mainNav > #downArrow').stop().fadeIn(animTime);
		}else if(NUM==pages.length){
			$('#mainNav > #upArrow').stop().fadeIn(animTime);
			$('#mainNav > #downArrow').stop().fadeOut(animTime);
		}else{
			$('#mainNav > #upArrow').stop().fadeIn(animTime);
			$('#mainNav > #downArrow').stop().fadeIn(animTime);
		};
	};	
};
function upDownPosition(left,time){
	$('#mainNav').stop().animate({'left':left},time);
};
function changeHash(trg){
	window.location.hash='#'+trg;
};		