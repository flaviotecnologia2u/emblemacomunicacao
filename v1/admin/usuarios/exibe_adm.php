<? 
$sql = "SELECT * FROM administrador WHERE id_adm=$id_adm";	

$sql2 = mysql_query($sql) or die('ERRO na Consulta');
$result=mysql_fetch_array($sql2);?>


<form enctype="multipart/form-data" action="?pg=usuarios/altera_adm" name="formEmp" method="post" id="pro_form2">
<table width="500" border="0" cellpadding="5" cellspacing="5">
	<tr>
    	<td width="65"><?
		$dir = "../midia/img/usuarios/admins/$id_adm/$result[foto_adm]";
		
		
		 if(file_exists($dir)){?>
		<img src="../include/thumbs.php?w=150&h=150&imagem=../midia/img/usuarios/admins/<? echo $id_adm."/".$result[foto_adm];?>" />  
		<?}
		if(!file_exists($dir)){
		?>
		<img src="../include/thumbs.php?w=150&h=150&imagem=../midia/img/admin_img/sem_foto.jpg">
		
		<?
		}
		
		
		?>
		
		</td>
        <td width="382"></td>
    </tr>
	<tr>
    	<td width="65">Nome: </td>
        <td width="382"><?=  $result[nome_adm]?></td>
    </tr>
    <tr>
    	<td>Endere&ccedil;o: </td>
      <td><?=  $result[endereco_adm] ?></td>
    </tr>
    <tr>
      <td>Bairro: </td>
      <td><?=  $result[bairro_adm]?></td>
    </tr>
    <tr>
      <td>Estado: </td>
      <td><?=  $result[estado_adm]?>
</td>
    </tr>
    <tr>
    	<td>Cidade: </td>
        <td><?=  $result[cidade_adm]?></td>
    </tr>
	<tr>
    	<td>Telefone: </td>
        <td><?=  $result[telefone_adm]?></td>
    </tr>
    <tr>
      <td>Celular: </td>
      <td><?=  $result[celular_adm]?></td>
    </tr>
	<tr>
      <td>Data de Nasc: </td>
      <td><?=  $result[niver_adm]?></td>
    </tr>
	<tr>
      <td>Email: </td>
      <td><?=  $result[email_adm]?></td>
    </tr>
    
    <tr>
    	<td height="34" colspan="2" align="right"><div align="center">
		<input type="hidden" name="id_adm" value="<?=$id_adm?>">
    	  <input type="submit" value="Editar" class="botao_submit" />
  	  </div></td>
    </tr>
</table>
</form>





