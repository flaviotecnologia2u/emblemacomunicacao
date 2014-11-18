<?php

$i=$_GET[i];
if ($i!=""){
mysql_query("delete from banner where id = $i");

}

// faz consulta no banco de dados
$consulta = mysql_query("select * from banner");
?>

<form action="deletar_usuario.php" method="post" enctype="multipart/form-data">
  <table width="600" border="2" bordercolor="#FFFFFF" cellpadding="0" cellspacing="0">
    <!--DWLayoutTable-->
    <tr>
    <td width="178" height="24" align="center" valign="middle" bgcolor="#FFCC00"><span class="style3">Imagem</span></td>
    <td width="186" align="center" valign="middle" bgcolor="#FFCC00" class="style3">Nome</td>

    <td width="66" align="center" valign="middle" bgcolor="#FFCC00" class="style3">A&ccedil;&atilde;o</td>
   
  </tr>
  <?php
while($linhas = mysql_fetch_array($consulta)) {
?>
  <tr>
    <td height="24" align="center" valign="middle" bgcolor="#FFFFFF"><?php echo "<img src='../thumbs.php?w=50&h=50&imagem=midia/img/banner/$linhas[filename]'></br>";?>&nbsp;</td>

    <td align="center" valign="middle" bgcolor="#FFFFFF" class="style2"><a href="?pg=galeria/listar_banner&i=<?php echo $linhas[id];?>">Deletar</a></td>
    
  </tr>
  <?php
}
?>
</table>
<p>
  
  <br>
  <a href="javascript:history.back(-1)">Back</a></p>
<p>&nbsp;</p>
</form>
</body>
</html>
