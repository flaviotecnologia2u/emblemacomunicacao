<?php

include "../include/config/config.php";
include "../include/captura_post.php";

/////////////////////
/////////////////////
/////////////////////


/////////////////////
/////////////////////
/////////////////////

/*$sql = "SELECT * FROM professor WHERE email_prof = '$user' and senha_prof = '$pass' ";					
$sql2 = mysql_query($sql) or die('ERRO na Consulta 2 ');					
while($result=mysql_fetch_array($sql2)) {

if ($result[nome_prof]!=""){

$e = "S";
$i = $result[id_prof];
$nivel = "prof";
$id_academia = $result[id_academia];
session_save_path("/tmp"); session_start();

$_SESSION['nivel'] = $nivel;
$_SESSION['id_academia'] = $id_academia;
$_SESSION['id_user'] = $i;

}

}*/
/////////////////////
/////////////////////
/////////////////////

$sql = "SELECT * FROM administrador WHERE email_adm = '$user' and senha_adm = '$pass' ";					
$sql2 = mysql_query($sql) or die('ERRO na Consulta 2 ');					
while($result=mysql_fetch_array($sql2)) {

if ($result[nome_adm]!=""){

$e = "S";
$i = $result[id_adm];
$nivel = "adm";
$id_academia = $result[id_academia];
session_save_path("/tmp"); session_start();

$_SESSION['nivel'] = $nivel;
$_SESSION['id_academia'] = $id_academia;
$_SESSION['id_user'] = $i;

}

}

/////////////////////
/////////////////////
/////////////////////



if ($e != "S"){echo "Login Incorreto!";echo '<meta http-equiv="refresh" content="3;URL=login.php">';}
if ($e = "S"){echo '<meta http-equiv="refresh" content="0;URL=index.php">';}
?>