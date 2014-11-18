 <?
include "../include/config/config.php";
    $id=$_POST['id'];
	$content = $_POST['content'];
	
	$sql = "UPDATE page SET  
	content='$content' where id='$id'";
	
	$sql2 = mysql_query($sql);
	
	

// the content of 'data.txt' is now 123 and not 23!
?><meta http-equiv="refresh" content="0;URL='index.php'">