function getQueryVariable(variable){ 
  var query = window.location.search.substring(1); 
  var vars = query.split("&"); 
  for (var i=0;i<vars.length;i++) { 
	var pair = vars[i].split("="); 
	if (pair[0] == variable) { 
	  return pair[1]; 
	} 
  } 
 //alert('Query Variable ' + variable + ' not found'); 
}

animTime=400;//basic unit of animation time