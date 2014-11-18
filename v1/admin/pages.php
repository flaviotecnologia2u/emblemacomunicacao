<? 

$id=$_GET[id];
$acao=$_GET[acao];

if($id != "" && $acao == "deletar"){
$deletatudo = mysql_query("DELETE FROM page WHERE id = '$id'");
	if($deletatudo){
		echo"<script>javascript:alert('Deletado Com sucesso');</script>"; 
	} else{
		echo"<script>javascript:alert('Erro ao deletar.');</script>";
	}
} 




?>

<script language="JavaScript">
function confirmacao(){
		return confirm("Tem certeza?");
}

</script>


 
<table width="100" height="100%" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td align="center" valign="top">
      <table width="100" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td height="100%" align="center" valign="middle">
          	<table width="100" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" valign="middle"><h1><font size="+2" face="Arial, Helvetica, sans-serif"><strong>Actual Pages </strong></font></h1><br>
                  <table border=0 width="530" cellspacing="0">
                    <tr bgcolor="#FAFAFA">
                      
                      <td width="100">ID</td>
                      <td width="100">Name</td>
                      <td width="100">Content</td>
                      <td width="100">Name</td>
                      <td width="100">Delete</td>
                    </tr>
					
                     <?
                    $bus=mysql_query("SELECT * FROM page ORDER BY id");
                    while($rec=mysql_fetch_array($bus)){

                    ?>
                    <tr>
                      <td colspan=5><hr size=1></td>
                    </tr>
                    <tr bgcolor="#FFFFFF">
                      <td  valign="middle">
                      
                        	<? echo"$rec[0]";?>
                      </td>
					  
					  
                      <td valign="middle"> 
    	                    <? echo"$rec[1]";?>
                      </td>
					  
                      <td valign="middle">
                        <a href='?pg=pagina_edit&id=<? echo"$rec[0]";?>'><strong>Editar Conteudo</strong></a>
                      </td>
					  
                      <td  align="center" valign="middle">
                        <a href="?pg=update_page&id=<? echo"$rec[0]";?>&nome=<? echo"$rec[1]";?>">Editar Nome</a>
                      </td>
					  
                      <td  align="center" valign="middle">
					  <? if ( $rec[0]>32){?>
					  <h4><a href='?pg=pages&id=<? echo"$rec[0]";?>&acao=deletar' onClick="return confirmacao();"><img src="img3/botao_drop.png" width="16" height="16" alt="Deletar" border=0></a> </h4>
					  <? } ?>
					  
					  </td>
                    </tr>
                    
                  

                    <? } ?>
                  </table>
                  <p>&nbsp;</p>
               </td>
              </tr>
          </table>
          </td>
        </tr>
	 </table>
    </td>
  </tr>
</table>

