<!DOCTYPE HTML>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<title>Facebook Albuns</title>

<link rel="stylesheet" type="text/css" href="style.css" media="screen"/>
</head>

<body>
	<?php
	   define('PAGE_ID', '660528847296683');
	   define('APP_ID','');
	   define('APP_SECRET','');
	   include("phpcUrl.php");
	   $face = new FacePageAlbum(PAGE_ID, $_GET['aid'], $_GET['aurl'], APP_ID, APP_SECRET);
	?>
</body>
</html>