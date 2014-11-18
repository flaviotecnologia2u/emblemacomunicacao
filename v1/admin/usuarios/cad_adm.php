<? $fot = $_FILES['fot']['name'];

	if($nom!=""){
	$check=0;
	
		$sql2 = mysql_query( "SELECT * FROM administrador WHERE email_adm = '$ema'");
		$check_existe=mysql_fetch_array($sql2);	
		$check = $check_existe[email_adm];
		if($check!=""){$cont++;}
			
		if($check==0){
	
			$sql = "INSERT INTO administrador SET nome_adm = '$nom', sexo_adm = '$sex',	endereco_adm = '$end', 
				estado_adm = '$est', cidade_adm = '$cid', bairro_adm = '$bai', telefone_adm = '$tel', 
				celular_adm = '$cel', email_adm = '$ema', niver_adm = '$niver',	senha_adm = '$sen',	foto_adm = '$fot',
				face_adm = '$face', id_academia = '$id_aca'";
			$sql2 = mysql_query($sql);
	
			$id_recuperado = mysql_insert_id();
			$dir = "../midia/img/usuarios/admins/$id_recuperado";

			if (!file_exists($dir)) {
				$pasta = @mkdir("$dir", 0777);
				$pasta = @chmod("$dir", 0777);
			}

			$uploaddir = "$dir/";

			if($fot != "") {

				if (@copy($_FILES['fot']['tmp_name'], $uploaddir . $_FILES['fot']['name'])) {
					echo "<script type='text/javascript'> alert('Cadastro feito com sucesso');</script>";
				} else {
					echo "<script>alert('Foto não pode ser enviada, por favor verifique se está no formato correto ( jpg ) e tamanho correto ( até 2mb )')</script>";
				}
			}
		}

		if($check!=""){echo "<script type='text/javascript'> alert('O email digitado já existe em nossos banco de dados. Certifique que o usuário já não existe.');</script>";}
		echo "<script type='text/javascript'> alert('Cadastro feito com sucesso');</script>";
	}
	
 ?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">


<body>

<form enctype="multipart/form-data" action="" name="formEmp" method="post" id="pro_form2">
<table width="500" border="0" cellpadding="5" cellspacing="5">
	<tr>
    	<td width="65">Nome: </td>
        <td width="382"><input name="nom" type="text" size="100" /></td>
    </tr>
			<tr>
    	<td width="65">Sexo: </td>
        <td width="382">
		<select name="sex">
          <option value="M"  selected="selected"> Masculino</option>
          <option value="F" >Feminino</option>
        </select>
			  </td>
    </tr>
    <tr>
    	<td>Endere&ccedil;o: </td>
        <td><input name="end" type="text" size="100" /></td>
    </tr>
    <tr>
      <td>Bairro: </td>
      <td><input name="bai" type="text" size="100" /></td>
    </tr>
    <tr>
      <td>Estado: </td>
      <td><select name="est">
          <option value="AC">AC</option>
          <option value="AL">AL</option>
          <option value="AM">AM</option>
          <option value="AP">AP</option>
          <option value="BA">BA</option>
          <option value="CE">CE</option>
          <option value="DF">DF</option>
          <option value="ES">ES</option>
          <option value="GO">GO</option>
          <option value="MA">MA</option>
          <option value="MG">MG</option>
          <option value="MS">MS</option>
          <option value="MT">MT</option>
          <option value="PA">PA</option>
          <option value="PB">PB</option>
          <option value="PE">PE</option>
          <option value="PI">PI</option>
          <option value="PR">PR</option>
          <option value="RJ">RJ</option>
          <option value="RN">RN</option>
          <option value="RO">RO</option>
          <option value="RR">RR</option>
          <option value="RS">RS</option>
          <option value="SC">SC</option>
          <option value="SE">SE</option>
          <option value="SP" selected="selected">SP</option>
          <option value="TO">TO</option>
              </select>      </td>
    </tr>
    <tr>
    	<td>Cidade: </td>
        <td><input type="text" name="cid" /></td>
    </tr>
	<tr>
    	<td>Telefone: </td>
        <td><input type="text" name="tel" /></td>
    </tr>
    <tr>
      <td>Celular: </td>
      <td><input type="text" name="cel" /></td>
    </tr>
	<tr>
      <td>Email: </td>
      <td><input type="text" name="ema" /></td>
    </tr>
		<tr>
      <td>Data de Nascimento: </td>
      <td><input type="text" name="niver" /></td>
    </tr>
    <tr>
      <td>Foto: </td>
      <td><input type="file" name="fot" /></td>
    </tr>
	</tr>
		 <tr>
    	<td>Facebook: </td>
        <td><input type="text" name="face"/></td>
    </tr>
    <tr>
      <td>Senha: </td>
      <td><input type="password" name="sen" /></td>
    </tr>
    <tr>
      <td colspan="2"><input type="hidden" name="id_aca" value="<?=$id_academia?>" />
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