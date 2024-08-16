<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>FB login test</title>
</head>

<body>
<div class="fb-btn">
<fb:login-button 
  scope="public_profile,email"
  onlogin="checkLoginState();">
</fb:login-button></div>
<div id='status'></div>

<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '471503466583525',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();   
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script>
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}
function statusChangeCallback(response){
	if(response.status == 'connected'){
		$('.fb-btn').hide();
		
		$('#status').html('login success');
		
		
		FB.api('/me?fields=name,email,picture.width(220).height(220),link,gender,age_range', function(response) {
			var age_range;
			if(response.age_range.min && response.age_range.max){
				age_range = response.age_range.min+" - "+response.age_range.max
			}else if(response.age_range.min && !response.age_range.max){ 
				age_range = response.age_range.min+'or above';
			}else if(!response.age_range.min && response.age_range.max){ 
				age_range = response.age_range.max+'or below';
			}else{
				age_range = '/';
			}
			
			$('body').append('<img src="'+response.picture.data.url+'">'+
			'<p>'+
				'ID: '+response.id+'<br/>'+
				'Name: '+response.name+'<br/>'+
				'Gender: '+response.gender+'<br/>'+
				'Age Range: '+age_range+'<br/>'+
				'E-mail: '+response.email+'<br/>'+
			'</p>');			
		});
	} else if (response.status === 'not_authorized') {
		$('#status').html('Please log  into this app.');
	}else{
		$('#status').html('Login Fail');
	}
}	
</script>

</body>
</html>
