<?php

//include "seguranca/restrito.php";
include "../include/config/config.php";
include "../include/captura_post.php";
include "../include/funcoes.php";

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta content="text/html; charset=iso-8859-1" http-equiv="Content-Type">
<link rel="stylesheet" href="../css/forms.css">
<title>:Administrador:</title>
<style type="text/css">

body {
	font-family: Verdana, Geneva, sans-serif;
	font-size: 12px;
	background-color:#ffffff;
	background-image:url('img2/bg_top.jpg');
	background-repeat:repeat-x;
}
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
}

a:link {text-decoration:none; color:#AAAAAA}      /* unvisited link */
a:visited {text-decoration:none;color:#AAAAAA}  /* visited link */
a:hover {text-decoration:none;color:#AAAAAA}  /* mouse over link */
a:active {text-decoration:none;color:#AAAAAA}  /* selected link */
</style>
<?php

include "../include/js.php";

?>
</head>

<body>
<center>

</center>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td width="350" valign="top">
    
	<? include "menu.php";?>
	
	</td>
    <td width="82%" valign="top"><table width="100%"  height="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td colspan="3">&nbsp;</td>
        </tr>
      <tr>
        <td width="36" height="36"><img src="img3/sup_esq.png" alt="" width="36" height="36" /></td>
        <td  style="background-image:url('img3/sup.png');background-repeat:repeat-x"></td>
        <td width="802"><img src="img3/sup_dir.png" alt="" width="36" height="36" /></td>
      </tr>
      <tr>
        <td  style="background-image:url('img3/lat_esq.png');background-repeat:repeat-y"></td>
        <td  align="left" valign="top" style="background-color:#FFF">
		<? 
if(empty($pg))


$var = "home.php";
$filename = "$_GET[pg].php";
if(file_exists($filename)){
$pg = "$_GET[pg].php";
} 
if(empty($_SERVER["QUERY_STRING"])) {
include($var);
} else {
include("$pg");
}
?>
        
        
        
        
        
        
        </td>
        <td  style="background-image:url('img3/lat_dir.png');background-repeat:repeat-y"></td>
      </tr>
      <tr>
        <td><img src="img3/inf_esq.png" alt="" width="36" height="36" /></td>
        <td width="100%" style="background-image:url('img3/inf.png');background-repeat:repeat-x"></td>
        <td><img src="img3/inf_dir.png" alt="" width="36" height="37" /></td>
      </tr>
      <tr>
        <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr> </tr>
        </table></td>
      </tr>
    </table></td>
  </tr>
  <tr>
    <td colspan="2"><table width="100%"  height="100%" border="0" cellspacing="0" cellpadding="0">
     
      <tr>
        <td width="36" height="36"><img src="img3/sup_esq.png" alt="" width="36" height="36" /></td>
        <td width="100%"  style="background-image:url('img3/sup.png');background-repeat:repeat-x"></td>
        <td width="802"><img src="img3/sup_dir.png" alt="" width="36" height="36" /></td>
      </tr>
      <tr>
        <td  style="background-image:url('img3/lat_esq.png');background-repeat:repeat-y"></td>
       <td width="100%" align="center" valign="top" style="background-color:#FFF"><p>Copyright &copy; Tecnologia2U</p></td>
        <td height="10" style="background-image:url('img3/lat_dir.png');background-repeat:repeat-y"></td>
      </tr>
      <tr>
        <td><img src="img3/inf_esq.png" alt="" width="36" height="36" /></td>
        <td width="100%" background="img3/inf.png" style="background-image:url('img3/inf.png');background-repeat:repeat-x"></td>
        <td><img src="img3/inf_dir.png" alt="" width="36" height="37" /></td>
      </tr>
      <tr>
        <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr> </tr>
        </table></td>
      </tr>
    </table></td>
  </tr>
</table>
<p>&nbsp;</p>
</body>
</html>
