function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function check(TARGET, T) { 
	if (T == 'CB'){
		if(document.getElementById(TARGET).checked){
 			document.getElementById(TARGET).checked = false; 
 		} else {
 			document.getElementById(TARGET).checked = true; 
 		} 
	} else {
		document.getElementById(TARGET).checked = true; 
  	}
}


function LBFN(ACT, TARGET) { 
	if (ACT == 'open'){		
		document.getElementById(TARGET).style.display = 'block'; 
		document.getElementById('LB').style.display = 'block';
		document.documentElement.style.overflow = 'hidden';	 // firefox, chrome
		document.body.scroll = "no";					
	} else if (ACT == 'close'){
		document.getElementById(TARGET).style.display = 'none'; 
		document.getElementById('LB').style.display = 'none';
		document.documentElement.style.overflow = 'visible';	 // firefox, chrome
		document.body.scroll = "yes";				
  	}
}

function mmcPOPFN(){
	if (document.getElementById('agreeMMC').checked == true){ 
		document.getElementById('mmcPOP').style.display = 'block';
		document.getElementById('agreeEDM').checked = true;		
	} else {
		document.getElementById('mmcPOP').style.display = 'none';
		document.getElementById('agreeEDM').checked = false;	
	}
}

function changeBG(){               
			   var d = new Date();
                var hourNow = d.getHours();
				if (hourNow < 18 && hourNow >= 6){
                  document.body.style.backgroundImage = "url(images/background_am.jpg)";
                } else {
                  document.body.style.backgroundImage = "url(images/background_pm.jpg)";               
                }                
            }	