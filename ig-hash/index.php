<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>IG Album test</title>
<style>
	body{
		background:#ccc;
	}
	#details{
		width:480px;
		padding:5px 5px 50px;
		box-sizing: border-box;
		margin:0 auto;
		background:#fff;
		overflow:hidden;
	}
	#album{
		width:480px;
		margin:0 auto;
		background:#fff;
		overflow:hidden;
	}
	#album a{
		display:block;
		width:150px;
		height:300px;
		margin:0 5px 10px;
		float:left;
		font-size: 10pt;
		color:#000;
		text-decoration: none;
		overflow:hidden;

	}
	#album img{
		display:block;
		width:150px;
		height:150px;
		margin-bottom:5px;

	}
	#moreBtn{
		width:470px;
		margin:10px auto 0;
		background: #003;
		text-align: center;
		padding:5px;
		color:#fff;
		cursor:pointer
	}
</style>
</head>

<body>
<div id="details"></div>
<div id='album'></div>
<div id="moreBtn">Load More</div>
<?php
	$tag = '/';
	if(isset($_GET['tag']) &&$_GET['tag']!=""){
		$tag = $_GET['tag'];
	}
?>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
var client_id="06a662155ae54add9d9ca4f073eee898";
var count = 5;
var access_token= "626270235.06a6621.68eeeee48c6e4ec4bd3a92015a659a69"; //"2a98ae670c944f85bc839db4d0008058"; //"82bc669e79d6444ba621b067de3d1225";
var tag = "<?php echo $tag ?>";
var users = "626270235";
var next_max_id = "";
//load user data
$.ajax({
	url: "https://api.instagram.com/v1/users/626270235/media/recent?client_id="+client_id+"&count=1&access_token="+access_token,
	dataType: "jsonp"
}).done(function(e) {
	var data = e.data;
	$('#details').html('<img src="'+data[0].user.profile_picture+'" align="right">'+
		'User Name: '+data[0].user.username+'<br/>'+
		'Full Name: '+data[0].user.full_name
	);
});
loadData("init");
function loadData(action){
	if(tag=='/'){
		api_url = "https://api.instagram.com/v1/users/626270235/media/recent";
	}else{
		api_url = "https://api.instagram.com/v1/tags/"+tag+"/media/recent";
	}
	$.ajax({
  	url: api_url+"?client_id="+client_id+"&count="+count+"&access_token="+access_token+"&max_id="+next_max_id,
		dataType: "jsonp"
	}).done(function(e) {
	//var  next_min_id = e.next_min_id;
	//var min_tag_id = e.min_tag_id;
	next_max_id = e.pagination.next_max_id;
	if(!next_max_id){
		$('#moreBtn').hide();
	}
	var data = e.data;

	for(a=0; a<data.length; a++){

		if(data[a].caption && data[a].caption.text){
			TXT =data[a].caption.text;
		}else{
			TXT = '';
		}

		$('#album').append('<a href="'+data[a].link+'" target="_blank">'+
			'<img src="'+data[a].images.thumbnail.url+'" alt="">'+
			TXT+
		'</a>');
	};
});
}
$('#moreBtn').data('next_min_id',"recent").click(function(){
	if(next_max_id && next_max_id!=""){
		loadData("more");
	}
})
</script>

</body>
</html>
