<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>.::Area Restrita::.</title>

<style type="text/css">
* {margin:0; padding:0;}
body { 
	font-family:Verdana;
	font-size:12px;
	background:#ccc;}

.login { 
	position: absolute;
	left:50%;
	width:299px;
	height:159px;
	margin-left:-150px;
	margin-top: 230px;
	padding:2px;
	background:url(../midia/img/fundoLogin.jpg) no-repeat;}
	
.logo {
	border:0px solid #000000;
	height:82;
	margin:30px auto;
	padding:1px;
	width:189px;
}
	
.tabelaLogin {
	margin:30px auto;}	
</style>

</head>

<body>

<!--<div><center><img src="../midia/img/admin_img/link_administrador.jpg"></center></div>-->
<div class="login">
<table width="250" border="0" cellpadding="0" cellspacing="0" class="tabelaLogin">
<form action="login_code.php" method="post" >
        	<tr>
        	  <td><span style="padding-bottom:10px;">
        	   
                
        	  </span></td>
      	  </tr>
        	<tr>
                <td>Usuário:</td>
            </tr>
            <tr>
            	<td style="padding-bottom:10px;">
				<input name="user"  type="text"  value="" />
        		</td>
            </tr>
            <tr>
            	<td>Senha:</td>
            </tr>
            <tr>
            	<td style="padding-bottom:7px;"><input name="pass"  type="password" style="width:150px;" value=""  />
           	    <input style="width:50px;" type="submit" name="ok" value="OK" /></td>
            </tr>
            <tr>
            	<td align="right">&nbsp;</td>
            </tr>
            </form>
        </table>
</div>
</body>
</html>
