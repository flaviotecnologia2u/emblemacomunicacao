<? 
$fot = $_FILES['fot']['name'];
	if($nom!=""){
		$sql = "UPDATE administrador SET nome_adm = '$nom', sexo_adm = '$sex', endereco_adm = '$end', estado_adm = '$est', 
				cidade_adm = '$cid', bairro_adm = '$bai', telefone_adm = '$tel', celular_adm = '$cel', email_adm = '$ema',
				niver_adm = '$niver', face_adm = '$face' WHERE id_adm = $id_adm;";
		$sql2 = mysql_query($sql);

		if($sen!=""){$sql = mysql_query("UPDATE administrador SET senha_adm = '$sen' WHERE id_adm = $id_adm;"); }
		$dir = "../midia/img/usuarios/admins/$id_adm";
		if (!file_exists($dir)) {
			$pasta = @mkdir("$dir", 0777);
			$pasta = @chmod("$dir", 0777);
		}
		
		$uploaddir = "$dir/";

		if($fot!=""){
			$sql = mysql_query("UPDATE administrador SET foto_adm = '$fot' WHERE id_adm = $id_adm ;"); 
		
			if (@copy($_FILES['fot']['tmp_name'], $uploaddir . $_FILES['fot']['name'])) 
				{echo "<script type='text/javascript'> alert('Cadastro feito com sucesso');</script>";} 
			else 
				{echo "<script>alert('Erro ao enviar foto!')</script>";}
		}
		echo "<meta http-equiv=refresh content=0;URL=?pg=usuarios/select_adm>";	
	}

$sql = "SELECT * FROM administrador WHERE id_adm=$id_adm";	

$sql2 = mysql_query($sql) or die('ERRO na Consulta');
$result=mysql_fetch_array($sql2);?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">


<body>

<form enctype="multipart/form-data" action="" name="formEmp" method="post" id="pro_form2">
<table width="500" border="0" cellpadding="5" cellspacing="5">
	<tr>
    	<td width="65">Alterar Nome: </td>
        <td width="382"><input name="nom" type="text" size="100" value="<?=$result[nome_adm]?>" /></td>
    </tr>
		<tr>
    	<td width="65">Alterar Sexo: </td>
        <td width="382">
		<select name="sex">
          <option value="M" <? if($result[sexo_adm]=="M"){echo 'selected="selected"';}?>>Masculino</option>
          <option value="F" <? if($result[sexo_adm]=="F"){echo 'selected="selected"';}?>>Feminino</option>
        </select>
			  </td>
    </tr>
    <tr>
    	<td>Alterar Endere&ccedil;o: </td>
        <td><input name="end" type="text" size="100" value="<?=$result[endereco_adm]?>"/></td>
    </tr>
    <tr>
      <td>Alterar Bairro: </td>
      <td><input name="bai" type="text" size="100" value="<?=$result[bairro_adm]?>" /></td>
    </tr>
    <tr>
      <td>Alterar Estado: </td>
      <td><select name="est">
          <option value="AC" <? if($result[estado_adm]=="AC"){echo 'selected="selected"';}?>>AC</option>
          <option value="AL" <? if($result[estado_adm]=="AL"){echo 'selected="selected"';}?>>AL</option>
          <option value="AM" <? if($result[estado_adm]=="AM"){echo 'selected="selected"';}?>>AM</option>
          <option value="AP" <? if($result[estado_adm]=="AP"){echo 'selected="selected"';}?>>AP</option>
          <option value="BA" <? if($result[estado_adm]=="BA"){echo 'selected="selected"';}?>>BA</option>
          <option value="CE" <? if($result[estado_adm]=="CE"){echo 'selected="selected"';}?>>CE</option>
          <option value="DF" <? if($result[estado_adm]=="DF"){echo 'selected="selected"';}?>>DF</option>
          <option value="ES" <? if($result[estado_adm]=="ES"){echo 'selected="selected"';}?>>ES</option>
          <option value="GO" <? if($result[estado_adm]=="GO"){echo 'selected="selected"';}?>>GO</option>
          <option value="MA" <? if($result[estado_adm]=="MA"){echo 'selected="selected"';}?>>MA</option>
          <option value="MG" <? if($result[estado_adm]=="MG"){echo 'selected="selected"';}?>>MG</option>
          <option value="MS" <? if($result[estado_adm]=="MS"){echo 'selected="selected"';}?>>MS</option>
          <option value="MT" <? if($result[estado_adm]=="MT"){echo 'selected="selected"';}?>>MT</option>
          <option value="PA" <? if($result[estado_adm]=="PA"){echo 'selected="selected"';}?>>PA</option>
          <option value="PB" <? if($result[estado_adm]=="PB"){echo 'selected="selected"';}?>>PB</option>
          <option value="PE" <? if($result[estado_adm]=="PE"){echo 'selected="selected"';}?>>PE</option>
          <option value="PI" <? if($result[estado_adm]=="PI"){echo 'selected="selected"';}?>>PI</option>
          <option value="PR" <? if($result[estado_adm]=="PR"){echo 'selected="selected"';}?>>PR</option>
          <option value="RJ" <? if($result[estado_adm]=="RJ"){echo 'selected="selected"';}?>>RJ</option>
          <option value="RN" <? if($result[estado_adm]=="RN"){echo 'selected="selected"';}?>>RN</option>
          <option value="RO" <? if($result[estado_adm]=="RO"){echo 'selected="selected"';}?>>RO</option>
          <option value="RR" <? if($result[estado_adm]=="RR"){echo 'selected="selected"';}?>>RR</option>
          <option value="RS" <? if($result[estado_adm]=="RS"){echo 'selected="selected"';}?>>RS</option>
          <option value="SC" <? if($result[estado_adm]=="SC"){echo 'selected="selected"';}?>>SC</option>
          <option value="SE" <? if($result[estado_adm]=="SE"){echo 'selected="selected"';}?>>SE</option>
          <option value="SP" <? if($result[estado_adm]=="SP"){echo 'selected="selected"';}?>>SP</option>
          <option value="TO" <? if($result[estado_adm]=="TO"){echo 'selected="selected"';}?>>TO</option>
              </select>      </td>
    </tr>
    <tr>
    	<td>Alterar Cidade: </td>
        <td><input type="text" name="cid" value="<?=$result[cidade_adm]?>"/></td>
    </tr>
	<tr>
    	<td>Alterar Telefone: </td>
        <td><input type="text" name="tel" value="<?=$result[telefone_adm]?>"/></td>
    </tr>
    <tr>
      <td>Alterar Celular: </td>
      <td><input type="text" name="cel" value="<?=$result[celular_adm]?>"/></td>
    </tr>
	<tr>
      <td>Alterar Email: </td>
      <td><input type="text" name="ema" value="<?=$result[email_adm]?>"/></td>
    </tr>
		<tr>
      <td>Alterar Data de Nascimento: </td>
      <td><input type="text" name="niver" value="<?=$result[niver_adm]?>"/></td>
    </tr>
    <tr>
      <td> <?
		$dir = "../midia/img/usuarios/admins/$id_adm/$result[foto_adm]";
		
		
		 if(file_exists($dir)){?>
		 
		<img src="../include/thumbs.php?w=150&h=150&imagem=../midia/img/usuarios/admins/<? echo $id_adm."/".$result[foto_adm];?>" />  
		
		<?}
		if(!file_exists($dir)){
		?>
		
		<img src="../include/thumbs.php?w=150&h=150&imagem=../midia/img/admin_img/sem_foto.jpg">
		
		<?
		}
		?> </td>
      <td>
	  
	  
	  </td>
    </tr>
	
	<tr>
      <td>Alterar Foto: </td>
      <td><input type="file" name="fot" /></td>
    </tr>
    <tr>
      <td>Senha: (Para alterar a senha digite a nova) </td>
      <td><input type="password" name="sen" /></td>
    </tr>
	 <tr>
    	<td>Alterar Facebook: </td>
        <td><input type="text" name="face" value="<?=$result[face_adm]?>"/></td>
    </tr>
    <tr>
      <td colspan="2"><input type="hidden" name="id_aca" value="<?=$id_academia?>" /><input type="hidden" name="id_adm" value="<?=$id_adm?>">
      </td>
    </tr>
    
    <tr>
    	<td height="34" colspan="2" align="right"><div align="center">
    	  <input type="submit" value="Cadastrar" class="botao_submit" />
  	  </div></td>
    </tr>
</table>
</form>

</body>
</html>