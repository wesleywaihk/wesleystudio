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
</style>
</head>
<?php
	$content=file_get_contents("https://api.instagram.com/v1/users/626270235/media/recent?client_id=06a662155ae54add9d9ca4f073eee898&count=20&access_token=626270235.06a6621.68eeeee48c6e4ec4bd3a92015a659a69");
	$data=json_decode($content);
	$data=$data->data;
?>
<body>
<div id="details">
	<img src="<?php echo $data[0]->user->profile_picture; ?>" align="right">
		User Name: <?php echo $data[0]->user->username; ?><br/>
		Full Name: <?php echo $data[0]->user->full_name; ?>
</div>
<div id='album'><?php
	foreach($data as $item){
		if(isset($item->caption) && isset($item->caption->text)){
			$txt = $item->caption->text;
		}else{
			$txt = '';
		}
		echo '<a href="'.$item->link.'" target="_blank">'.
			'<img src="'.$item->images->thumbnail->url.'" alt="">'.
			$txt.
		'</a>';
	}
?></div>
</body>
</html>
