
    
    
 	
	
	
	
	
    
    <table width="350" border="0" cellspacing="0" cellpadding="0">
     
      <tr>
        <td width="36" height="36"><img src="img3/sup_esq.png" alt="" width="36" height="36" /></td>
        <td   style="background-image:url('img3/sup.png');background-repeat:repeat-x"></td>
        <td width="43"><img src="img3/sup_dir.png" alt="" width="36" height="36" /></td>
      </tr>
      <tr>
        <td style="background-image:url('img3/lat_esq.png');background-repeat:repeat-y"></td>
        <td valign="top" style="background-color:#FFF">
		
		<?
		/////////////////////////////////////////////////////////////
		//////////////////////////////CONTEUDO//////////////////////
		////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////
		
		?>
		<?
        
			$id_academia = $_SESSION['id_academia'];
			$i=$_SESSION['id_user']  ;
			
			if ($_SESSION['nivel'] == "adm" ) { $sql = "SELECT * FROM administrador WHERE id_adm = '$i' ";	$sql2 = mysql_query($sql) or die('ERRO na Consulta 2 '); $result=mysql_fetch_array($sql2);$p = "admins"; $f=$result[foto_adm];$nome = $result[nome_adm];$l="id_adm";$action="?pg=usuarios/exibe_adm";}
			
		?>
			<p><strong><h3>Seja bem vindo <?=$nome?> </h3></strong> </br>
        <?
			if (file_exists("../midia/img/usuarios/$p/$i/$f")){?>
			<img src="../include/thumbs.php?w=150&h=150&imagem=../midia/img/usuarios/<?=$p?>/<? echo $i."/".$f; ?>" align="center" /> 
		<?}
			if (!file_exists("../midia/img/usuarios/$p/$i/$f")){?>
			<img src="../include/thumbs.php?w=150&h=150&imagem=../midia/img/admin_img/sem_foto.jpg" align="center" />
		<?}?> </br></br>
		
			<p><strong><u>Administradores</u></strong><br /><br />
			<a href="?pg=usuarios/select_adm">Cadastrar/Consultar Administrador</a><br />
			<a href="?pg=seguranca/logout"><b>LOGOUT</b></a><br />
			</p>
			
		</td>
        <td  style="background-image:url('img3/lat_dir.png');background-repeat:repeat-y"></td>
		</tr>
		<tr>
        <td><img src="img3/inf_esq.png" alt="" width="36" height="36" /></td>
        <td  style="background-image:url('img3/inf.png');background-repeat:repeat-x"></td>
        <td><img src="img3/inf_dir.png" alt="" width="36" height="37" /></td>
		</tr>
		<tr>
        <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr> </tr>
        </table></td>
		</tr>
	</table>		
			
	<table width="350" border="0" cellspacing="0" cellpadding="0">		
		 <tr>
        <td width="36" height="36"><img src="img3/sup_esq.png" alt="" width="36" height="36" /></td>
        <td   style="background-image:url('img3/sup.png');background-repeat:repeat-x"></td>
        <td width="43"><img src="img3/sup_dir.png" alt="" width="36" height="36" /></td>
		</tr>
		<tr>
        <td style="background-image:url('img3/lat_esq.png');background-repeat:repeat-y"></td>
        <td valign="top" style="background-color:#FFF">	
			
		  
		   
		<li><span style="font-size:18px;color:#999999;font-weight:bold">Gerenciar Paginas</span>
            <ul>
					<li><a href="?pg=insert_page">Inserir Pagina</a></li>
            <li><a href="?pg=pages">Alterar Pagina </a></li>
        </ul>
				</li>
		 <li><span style="font-size:18px;color:#999999;font-weight:bold">Gerenciar Banners</span>
            <ul>
					<li><a href="?pg=galeria/banner">Inserir Banner</a></li>
			<li><a href="?pg=galeria/listar_banner">Alterar Banner</a></li>
          </ul>
				</li>					
		
		  		   
		  <?
		  ///////////////////////////////////////////////
		  ///////////////////////////////////////////////
		  ///////////////////////FIM CONTEUDO///////////
		  ///////////////////////////////////////////////
		  ////////////////////////////////////////////////
		  
		  
		  ?>
		  
		  
		</td>
        <td  style="background-image:url('img3/lat_dir.png');background-repeat:repeat-y"></td>
      </tr>
      <tr>
        <td><img src="img3/inf_esq.png" alt="" width="36" height="36" /></td>
        <td  style="background-image:url('img3/inf.png');background-repeat:repeat-x"></td>
        <td><img src="img3/inf_dir.png" alt="" width="36" height="37" /></td>
      </tr>
      <tr>
        <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr> </tr>
        </table></td>
      </tr>
    </table>
	
	
	
	