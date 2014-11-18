<table border="0" cellpadding="0" cellspacing="0" width="100%">
	
</table>

<? 


$acao = $_GET['acao'];
$id = $_GET['id'];



if($acao == "excluirbd"){

			$sql = "delete from noticias_dados WHERE id='$id'";
			$sql2 = mysql_query($sql);
				$dir = "../midia/img/noticias/$id/";
				$dir1 = opendir("$dir");
				while ($res =readdir($dir1)){
					if ($res!='' && $res!='.' && $res!='..'){
					$url = "$dir/$res";
					@unlink("$url");
					}
				}
				@rmdir ("$dir");
echo "<table border='0' align='center' cellpadding='0' cellspacing='0' style='border: 1px solid $corcelula1;'><tr><td width='400' bgcolor='$corcelula2' align='center' class='titulos'>&nbsp;$mgs</td></tr></table><br>";
}

//$mgs = "<b>$palavra </b>Excluído com Sucesso!";

?>



<table width="600"  border="0" align="center" cellpadding="2" cellspacing="1">

  <tr bgcolor="#CCCCCC">

    <td width="10%" align="center" bgcolor="#C0C0C0"><b>ID</b></td>

    <td width="37%" align="center"><b>TITULO</b></td>



 

    <td width="32%" align="center" bgcolor="#C0C0C0"><b>A&Ccedil;&Otilde;ES</b></td>

  </tr>

<? 

$i=0;


$busca = "SELECT * FROM noticias_dados" ;
$total_reg = "15";
if(!$page){
$page = "1";
}
$inicio = $page-1;
$inicio = $inicio*$total_reg;
$limite = mysql_query("$busca LIMIT $inicio,$total_reg");
while ($dados=mysql_fetch_array($limite)) {

	if (($i%2)==0) { $bgcolor="#FFFFFF"; } else { $bgcolor="#e5e5e5"; }

	?>

  <tr>

    <td align="center" bgcolor="<? echo $bgcolor; ?>"><table width="90%" border="0" cellspacing="0" cellpadding="2">

        <tr>

          

          <td><b><?=$dados[id];?></b></td>

        </tr>

    </table></td>

    <td bgcolor="<? echo $bgcolor?>"><b><?=$dados[titulo]; ?> </b></td>



  

    <td align="center" bgcolor="<? echo $bgcolor; ?>">
    
     <a href="?pg=altera_artigos&acao=FORM&amp;id=<?=$dados[id]?>">
     <img src="../midia/img/admin_img/edit.png" alt="Alterar" border="0" />
     </a>
     <a href="?pg=listar_artigos&acao=excluirbd&id=<?=$dados[id]?>">
     <img src="../midia/img/admin_img/delete.png" alt="Excluir" hspace="3" border="0" />
     </a>
     </td>

  </tr>

  <? $i++; }?>

      <tr>

      <td colspan="3"><table border="0" align="center" cellpadding="0" cellspacing="0">

        <tr>

          <td width="100" align="right" valign="top"><?

if($page > 1){

$anterior = $page -1;

	$url = "?pg=$pg&acao=$acao&page=$anterior";

echo "<a href='$url'>&laquo; Anterior</a>&nbsp;|&nbsp;";

} else {

echo "<font color='$corcelula2'>&laquo; Anterior</font>&nbsp;|&nbsp;";

}

?>          </td>

          <td align="center"><? 

for($i=1; $i<$page; $i++)

if($i>=$page-5)

	echo "<a href='?pg=$pg&acao=$acao&page=$i'>$i</a> | ";

echo "<font color='$coronmouse'><b>$page</b></font> ";



for($i=$page+1; $i<=$tp; $i++)

if($i<=$page+5)

	echo " | <a href='?pg=$pg&acao=$acao&page=$i'>$i</a>";



?></td>

          <td width="100" align="left" valign="top"><?

if($tp > $page){

$proxima = $page +1;

	$url = "?pg=$pg&acao=$acao&page=$proxima";



echo "&nbsp;|&nbsp;<a href='$url'>Pr&oacute;xima &raquo;</a>";

} else {

echo "&nbsp;|&nbsp;<font color='$corcelula2'>Pr&oacute;xima &raquo;</font>";

}

?></td>

        </tr>

      </table></td>

    </tr>

    <tr>

      <td colspan="5">

        </td>

    </tr>

</table>



