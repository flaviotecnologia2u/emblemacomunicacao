<?php
	include("cute/cuteeditor_files/include_CuteEditor.php"); 
?>



	<form action="salva_page.php" method="post">
<?php


	$Buscaa = mysql_query("SELECT * FROM page WHERE id = '$id'");
	$Dados = mysql_fetch_array($Buscaa);

            $editor=new CuteEditor();
            $editor->ID="content";
            $editor->Text=$Dados[content];
            $editor->EditorBodyStyle="font:normal 12px arial;";
            $editor->EditorWysiwygModeCss="php.css";
            $editor->Height=600;
            $editor->Draw();
            $editor=null;

?>
			<br>
			<input type="hidden" name="id" value="<?=$id?>">
			<input type="submit" value="Update">
		</form>
    
		

