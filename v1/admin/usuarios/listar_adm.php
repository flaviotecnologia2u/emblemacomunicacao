<? 
$tabela = "administrador";
$tabela1 = "adm";


if($iduser != "" && $acao == "deletar"){
$deletatudo = mysql_query("DELETE FROM ".$tabela." WHERE id_".$tabela1." = '$iduser'");

if($deletatudo){
echo"<script>javascript:alert('Deletado com sucesso');</script>"; 
}else{
echo"<script>javascript:alert('Erro ao deletar');</script>";
}}

?>



<script language="JavaScript">
function confirmacao(){
		return confirm("Tem certeza?");
}

</script>

<table width="100" height="100%" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td align="center" valign="top"><table width="100" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td height="100%" align="center" valign="middle"><table width="100" border="0" cellspacing="0" cellpadding="0">

              <tr>
                <td align="center" valign="middle"><h1><font size="+2" face="Arial, Helvetica, sans-serif"><strong>Alunos Cadastrados </strong></font></h1><br>
                  <table border=0 width="500" cellspacing=0>
                    <tr bgcolor="#FAFAFA">
                      <td width=40 align="center"><h3><b>&nbsp;</b></h3></td>
                      <td colspan="2"><h3>Foto</h3></td>
                      <td width="412"><h3>Nome</h3></td>
                      <td width="60" align="right">&nbsp;</td>
                      <td width="100" align="center"><h3>Deletar</h3></td>
                    </tr>
					
					<?
					$tamanho = $paginacao;
					
					$p = $_GET[p];
					if($p==""){$p=1;}
					
					
					$comeca = ($p*$tamanho)-$tamanho;
				
					
					
					$result = mysql_query("SELECT * FROM ".$tabela." ORDER BY id_".$tabela1."");
					$num_rows = mysql_num_rows($result);	

					
				
$bus=mysql_query("SELECT * FROM ".$tabela." ORDER BY id_".$tabela1." LIMIT $comeca,$tamanho");





while($rec=mysql_fetch_array($bus)){

?>
                    <tr>
                      <td colspan=6><hr size=1></td>
                    </tr>
                      <tr bgcolor="#FFFFFF">
                      <td align="center" width=40><p></p></td>
                      <td width="73" valign="middle"><font color="#000000" face="Verdana, Arial, Helvetica, sans-serif" size="-2">
					  
								<? if (file_exists("../midia/img/usuarios/admins/$rec[0]/$rec[10]")){?>
								<img src="../include/thumbs.php?w=150&h=150&imagem=../midia/img/usuarios/admins/<? echo $rec[id_adm]."/".$rec[foto_adm];?>" />  
								<?}
								if (!file_exists("../midia/img/usuarios/admins/$rec[0]/$rec[10]")){?>
								<img src="../include/thumbs.php?w=150&h=150&imagem=../midia/img/admin_img/sem_foto.jpg">
								<?}?>
					  
					  
					  </font></td>
                      <td width="3" valign="middle"><p>&nbsp;</p></td>
                      <td valign="middle"> <p><font color="#000000" face="Verdana, Arial, Helvetica, sans-serif" size="-2"><? echo"$rec[1]";?></font></p></td>
                      <td width=60 align="center" valign="middle">
					  <form action="?pg=usuarios/exibe_adm" method="post">
					  <input type="hidden" name="id_adm" value="<?=$rec[0]?>">
					  <input type="submit" value="Visualizar Perfil" class="botao_submit" />
					  </form>
					  
					  </td>
                      <td width=100 align="center" valign="middle">
					  <form action="" method="post">
					  <input type="hidden" name="acao" value="deletar">
					  <input type="hidden" name="iduser" value="<?=$rec[0]?>">
					  <input type="submit" value="deletar" class="botao_submit" />
					  </form>
<? } 
?>
</tr>
                  </table>
                  <p><?
				  
				  if(!is_int($num_rows/$tamanho)){
				  $pag = intval($num_rows/$tamanho);
				  $pag=$pag+1;
				  }
				  if(is_int($num_rows/$tamanho)){
				  $pag = intval($num_rows/$tamanho);	 
				  }
				  
				  $pa = 0;
				  while ( $pa < $pag){
				  
				  
				  echo "<a href=?pg=usuarios/listar_$tabela1&p=".($pa+1).">".($pa+1)." </a>| ";
				  $pa++;
				  }
				  
				  
				  
				  
				  ?></p>
      </td>
              </tr>
          </table></td>
        </tr>
</table>
            </td>
  </tr>
</table>
