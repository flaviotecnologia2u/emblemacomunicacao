<script type="text/javascript" src="ckeditor/ckeditor.js"></script>
<script type="text/javascript" src="ckeditor/_samples/sample.js"></script>

<?php

$variables=(strtolower($_SERVER['REQUEST_METHOD'])== 'GET') ? $_GET : $_POST;

foreach ($variables as $k=> $v)

$$k=$v;




// ini�io da acao INSERI NO BD

if($acao== "updatebd"){
$sql = "UPDATE page SET page='$page' where id='$id'";
$sql2 = mysql_query($sql);

echo "<meta http-equiv='refresh' content='1;URL=?pg=pages'>";
}



// ini�io da acao FORM DE CADASTRO E ALTERAR


$form1 = "FORM";
$sql=mysql_query("SELECT * FROM page WHERE id='$id'");
$dados=mysql_fetch_array($sql);

?>
<form action="#" method="post" enctype="multipart/form-data" name="page">
<fieldset>

<input name="acao" type="hidden" value="updatebd">
<input name="id" type="hidden" value="<?=$id?>">
<table width="600" border="0" align="center" cellpadding="2" cellspacing="0">
  <tr>
     <td valign="middle">Name:
            <br>
          <input type="text" name="page" id="page" value="<? echo $dados[page];?>">              
	 </td>
  </tr>

        <tr>
          <td valign="middle">
			<input style="width:110px;" type="submit" class="input" onblur="this.className='input';" onfocus="this.className='inputon';" name='btgravar' value="Update"></td>
        </tr>
  </table>
</fieldset>
</form>
