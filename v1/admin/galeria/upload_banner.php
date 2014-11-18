<?
include "../../include/config/config.php";

$foto= $_FILES['foto']['name'];





if($foto!=''){

$sql = "INSERT INTO banner VALUES ('', '$foto')";
$sql2 = mysql_query($sql);


$id_recuperado = mysql_insert_id();
$dir = "../../midia/img/banner";

$uploaddir = "$dir/";
if(is_dir("$dir")){
	if($foto != "none") {
		if (@copy($_FILES['foto']['tmp_name'], $uploaddir . $_FILES['foto']['name'])) {
		$foto1 = $_FILES['foto']['name'];
		$var1 = mysql_query("update banner set filename='$foto1' where id='$id_recuperado'");
		} else {
		echo "<script>alert('A imagem não pode ser enviada, procure ver o tamanho e formato!')</script>";
		}
	}
} else {
echo "<script>alert('Directory Error!')</script>";
}
$mgs = "<b>$palavra</b>Enviado com sucesso. Vamos redurecionar para a p&aacute;gina principal.";
echo "<table border='0' align='center' cellpadding='0' cellspacing='0' style='border: 1px solid $corcelula1;'>
  <tr>  <td width='400' bgcolor='$corcelula2' align='center' class='titles'>&nbsp;$mgs</td> </tr>
</table>
<br>

";
}
//Termina
?><meta http-equiv="refresh" content="0;URL='../index.php'">

