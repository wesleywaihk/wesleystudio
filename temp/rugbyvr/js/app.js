// JavaScript Document
var event_date = new Date(2017, 3, 6);
var today = new Date();
	
/*if(today < event_date){
	//no live function yet
	$('.live-stream, .watch-now-btn').remove();
}else{*/
var youTube_id='Zo5ZuAxUIM4'; /*'LJ7y0OzWYb4';*/
var liveStream_src = 'http://storage.googleapis.com/vrview/2.0/index.html?video=http://wpc.51c8d.systemcdn.net/8051C8D/dash2/dash_manifest_TB.mpd&amp;is_stereo=true&amp;';
//'http://storage.googleapis.com/vrview/2.0/index.html?video=http://dash2.ideallive.tv/dash_manifest_TB.mpd&amp;is_stereo=true&amp;';
//'http://wpc.51C8D.systemcdn.net/8051C8D/nowtv_hk7/rugbyvr/dash.html'; 
	
var ios_liveStream_src = 'http://wpc.51C8D.systemcdn.net/8051C8D/nowtv_hk7/rugbyvr/hls.html';
var ios_youtube = "youtube://youtu.be/"+youTube_id;

var android_youtube = "https://youtu.be/"+youTube_id; //"vnd.youtu.be:LJ7y0OzWYb4";

//CHECK ANDROID OR IOS
var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1;
var isiOS = /ipad|iphone|ipod/.test(ua) && !window.MSStream;

var OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName  = navigator.appName;
var fullVersion  = ''+parseFloat(navigator.appVersion); 
var majorVersion = parseInt(navigator.appVersion,10);
var nameOffset,verOffset,ix;
            
// In Opera, the true version is after "Opera" or after "Version"
if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
	browserName = "Opera";
	fullVersion = nAgt.substring(verOffset+6);
	if ((verOffset=nAgt.indexOf("Version"))!=-1) 
		fullVersion = nAgt.substring(verOffset+8);
}
// edge
else if ((verOffset=nAgt.indexOf("Edge"))!=-1) {
	browserName = "Microsoft Edge";
	fullVersion = nAgt.substring(verOffset+5);
}
// IE11
else if ((verOffset=nAgt.indexOf("rv:11"))!=-1) {
	browserName = "Microsoft Internet Explorer";
	fullVersion = '11';
}
// In MSIE, the true version is after "MSIE" in userAgent
else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
	browserName = "Microsoft Internet Explorer";
	fullVersion = nAgt.substring(verOffset+5);
}
// In Chrome, the true version is after "Chrome" 
else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
	browserName = "Chrome";
	fullVersion = nAgt.substring(verOffset+7);
}
// In Safari, the true version is after "Safari" or after "Version" 
else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
	browserName = "Safari";
	fullVersion = nAgt.substring(verOffset+7);
	if ((verOffset=nAgt.indexOf("Version"))!=-1) 
		fullVersion = nAgt.substring(verOffset+8);
}
// In Firefox, the true version is after "Firefox" 
else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
	browserName = "Firefox";
	fullVersion = nAgt.substring(verOffset+8);
}
// In most other browsers, "name/version" is at the end of userAgent 
else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ){
	browserName = nAgt.substring(nameOffset,verOffset);
	fullVersion = nAgt.substring(verOffset+1);
	if (browserName.toLowerCase()==browserName.toUpperCase()) {
		browserName = navigator.appName;
	}
}
// trim the fullVersion string at semicolon/space if present
if ((ix=fullVersion.indexOf(";"))!=-1)
	fullVersion=fullVersion.substring(0,ix);
if ((ix=fullVersion.indexOf(" "))!=-1)
	fullVersion=fullVersion.substring(0,ix);

majorVersion = parseInt(''+fullVersion,10);
if (isNaN(majorVersion)) {
	fullVersion  = ''+parseFloat(navigator.appVersion); 
	majorVersion = parseInt(navigator.appVersion,10);
}

//youtube-btn
$('.youtube-btn').attr('href',android_youtube);

//mac safari
if(OSName=="MacOS" && browserName=='Safari'){
	liveStream_src = ios_liveStream_src;	
}
	
//all IE user
if(browserName=='Microsoft Internet Explorer'){
	//use youtube
	$('.video-block').remove();
	$('.watch-now-btn').removeClass('open-box').attr('href',android_youtube).attr('target','_blank');		
}

if(isiOS){
	/*var old_safari;
	if(browserName=='Safari'){
		if(Number(majorVersion) > 100){ // is chrome on ios 
			//old_safari = Number(majorVersion)<601 ? true : false;	
			old_safari = Number(majorVersion)<602 ? true : false;
		}else{ //is safari on ios
			//old_safari = Number(majorVersion)<9 ? true : false;
			old_safari = Number(majorVersion)<10 ? true : false;
		}
	}
		
	if( (browserName!='Chrome' && browserName!='Safari') || (browserName=='Safari' && old_safari) || (browserName=='Chrome' && Number(majorVersion)<54) ) {
		//use youtube
		$('.video-block').remove();
		$('.watch-now-btn').removeClass('open-box').attr('href',ios_youtube );	
	}else{
		liveStream_src =  ios_liveStream_src;
	}*/
		
	//use youtube
	$('.video-block').remove();
	//$('.watch-now-btn').removeClass('open-box').attr('href',ios_youtube );
	$('.watch-now-btn').removeClass('open-box');
	$('.youtube-btn, .watch-now-btn').attr('href','javascript:void(0)').click(function(){
		openAlert('ios')	
	});		

	
};

if(isAndroid){
	$('.youtube-btn').attr('href','javascript:void(0)').click(function(){
		openAlert('android');	
	});
	
	//$('.youtube-btn').attr('href',android_youtube );
	if( browserName!='Chrome' || Number(majorVersion)<54){
		$('body').addClass('old-browser');
	}		
	if( browserName!='Chrome' || Number(majorVersion)<54){
		//use youtube
		$('.video-block').remove();
		//$('.watch-now-btn').removeClass('open-box').attr('href',android_youtube);
		$('.watch-now-btn').attr('href','javascript:void(0)').click(function(){
			openAlert('android');	
		});	
	}
}

function openAlert(device){
		var alertTxt; 
		if($('body').hasClass('en')){
			alertTxt = {
				title:"Please ensure you have downloaded and installed YouTube App on your device.",
				downloadTxt:"Download",
				proceedTxt:"Proceed"
			}
		}else{
			alertTxt = {
				title:"請確定你已下載及安裝 YouTube App.",
				downloadTxt:"下載",
				proceedTxt:"繼續"
			}
		}
		
		var links;
		if(device=='ios'){
			links = {
				youtube:ios_youtube,
				download: 'https://itunes.apple.com/hk/app/youtube-watch-upload-and-share-videos/id544007664?&mt=8'
			}
		}else{
			links = {
				youtube:android_youtube,
				download: 'https://play.google.com/store/apps/details?id=com.google.android.youtube'
			}
		}
		
		$('body').prepend('<div class="lightbox ios-alert">'+
			'<div class="lbBody">'+
				'<div class="closeBtn"></div>'+
				'<p>'+alertTxt.title+'</p>'+
				'<div class="btn-group">'+
					'<a href="'+links.download+'" class="download-btn" target="_blank">'+alertTxt.downloadTxt+'</a>'+
					'<a href="'+links.youtube+'" class="proceed-btn" target="_blank">'+alertTxt.proceedTxt+'</a>'+
				'</div>'+
			'</div>'+
			'<div class="hitArea"></div>'+							  
		'</div>');
		$('.lightbox.ios-alert .closeBtn, .lightbox.ios-alert .hitArea, .lightbox.ios-alert').click(function(){	
			$('.lightbox.ios-alert').fadeOut(400, function(){
				$(this).remove();
			});
		});	
		$('.proceed-btn').click(function(e){
			//e.preventDefault();
			//window.open($(this).attr('href'));
			$('.lightbox.ios-alert').stop().delay(50).fadeOut(400, function(){
				$(this).remove();
			});
		})
		$('.lightbox.ios-alert').fadeIn(400);
	};


$('.watch-now-btn.open-box').click(function(e){
	e.preventDefault();
	$("html, body").stop().animate({scrollTop:0}, '400');
	$('body').addClass('show-video');
			
	if($( window ).width()<=768){
		$('.banner-spacer, .live-stream').animate({'height':$('.banner-spacer').width()*.5625},400);
	}else{
		$('.banner-spacer, .live-stream').animate({'height':550},400);
	}
	$( window ).resize(function(){
		if($( window ).width()<=768){
			$('.banner-spacer, .live-stream').height($('.banner-spacer').width()*.5625);
		}else{
			$('.banner-spacer, .live-stream').height(550);
		}
	});
	setTimeout(function(){
		$('.banner').attr('style','').addClass('hide-visual');
		$('.live-stream').prepend('<iframe allowfullscreen="allowfullscreen" webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen="mozallowfullscreen" src="'+liveStream_src+'"></iframe>');
	},400);	
	$('hgroup').slideDown('400');	
	$(this).slideUp('400');
});

/* lightbox */
$('.lightbox .closeBtn, .lightbox .hitArea, .lightbox .no-vr').click(function(){	
	$('.lightbox').fadeOut(400, function(){
		$(this).remove();
		startCheckAnimate();
		//$('.title-block > div').addClass('after-animate');
	});
});

$('.lightbox li').click(function(){		
	var trg = $(this).attr('id');
	gotoTab(trg);
		
	$('.lightbox').fadeOut(400, function(){
		$(this).remove();
		//$('.title-block > div').addClass('after-animate');
		$("html, body").stop().animate({scrollTop:($('.scroll-point').offset().top-5)}, '1500', function(){
			startCheckAnimate();
		});
	});
});

var checkAnimHandler = function(){
   	checkAnimate();
}
function startCheckAnimate(){
	checkAnimate();
	$( window ).scroll(checkAnimHandler).resize(checkAnimHandler);	
}
function checkAnimate(){
	if( $(window).scrollTop() <= $('.banner').offset().top ){
		$('.title-block > div').addClass('after-animate');
		$(window).off("scroll", checkAnimHandler).off("resize", checkAnimHandler);
	}	
}
/* end of lightbox */
/* tab */	
$('.tab-head li').click(function(){
	if(!$(this).hasClass('active')){
		var trg = $(this).attr('id');
		gotoTab(trg);
	}
});

function gotoTab(trg){
	$('.tab-head li, .tab_body').removeClass('active');
	$('.tab-head #'+trg+', .tab_body.section_'+trg).addClass('active');
}
/* end of tab */


/* back top link*/
$('.back-top').click(function(e){
	e.preventDefault();
	$("html, body").stop().animate({scrollTop:0}, '1000');
});
/* end of back top link*/
//}
