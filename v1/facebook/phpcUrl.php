<!-- ####################################################################################################### -->


	<link rel="stylesheet" href="css/screen.css">
	<link rel="stylesheet" href="css/lightbox.css">





    <!-- ####################################################################################################### -->

	

<?php
class FacePageAlbum
{
		private $URL;
		private $TOKEN;
		private $PAGE;
		private $PHOTOS;
		private function setPage()
		{
				$protocol = $_SERVER['HTTPS'] == 'on' ? 'https' : 'http';
				$this->PAGE = 'album.php';
		}

		private function setAlbumUrl($id)
		{
			if(is_numeric($id))
			{
				if($this->TOKEN)
				{
					$this->URL = "http://graph.facebook.com/".$id."/albums?".$this->TOKEN;
					return true;
				}
				else
				{
					$this->URL = "http://graph.facebook.com/".$id."/albums";
					return true;				
				}
			}
			else
			{
				return false;
			}
		}
		private function setToken($appId, $appSecret)
		{
			$this->TOKEN = $this->curlGetFile('https://graph.facebook.com/oauth/access_token?type=client_cred&client_id='.$appId.'&client_secret='.$appSecret);
		}
		
		public function FacePageAlbum($id, $albumId, $aurl, $appId, $appSecret)
		{
			$this->setPage();
			if($id)
			{
				if($appId && $appSecret)
					$this->setToken($appId, $appSecret);
				$this->setAlbumUrl($id);
				if($albumId && $this->albumChk($albumId))
				{
					$this->PHOTOS = 'http://graph.facebook.com/'.$albumId.'/photos';
					$json  = json_decode($this->curlGetFile($this->PHOTOS));
					if($json -> error) die("THERE HAS BEEN AN ERROR:album id invalid");
					echo '<a class="FBback" href="index.php">Voltar</a>';
					
					
					if($json->paging->previous)
						echo '<a class="FBprev" href="'.$PAGE.'?aurl='.urlencode($json->paging->previous).'"> Voltar </a>';
					if($json->paging->next)
						echo '<a class="FBnext" href="'.$PAGE.'?aurl='.urlencode($json->paging->next).'"> Próximo </a>';
					echo '<br clear="all" />';
					foreach($json->data as $v)
					{
						?><a class="example-image-link" href = '<?=$v->source?>' data-lightbox="example-1" target='_blank'>
						<img class='thumb' src='<?=$v->picture?>' />
						</a><?
					}
					return true;
				}
				else if ($aurl)
				{
					$this->PHOTOS = urldecode($aurl);
					$json  = json_decode($this->curlGetFile($this->PHOTOS));
					if($json -> error) die("THERE HAS BEEN AN ERROR: album url invalid");
					echo '<a class="FBback" href="index.php">In&iacute;cio</a>';
					echo '<a class="FBbackAlbuns" href="'.$this->PAGE.'"> Voltar para álbuns </a>';
					if($json->paging->previous)
						echo '<a class="FBprev" href="'.$PAGE.'?aurl='.urlencode($json->paging->previous).'">Voltar</a>';
					if($json->paging->next)
						echo '<a class="FBnext" href="'.$PAGE.'?aurl='.urlencode($json->paging->next).'">Próximo</a>';
					echo '<br clear="all" />';
					foreach($json->data as $v)
					{
						?><a class="example-image-link" href = '<?=$v->source?>' data-lightbox="example-1">
						<img width='110px' src='<?=$v->picture?>' class='face_img'/>
						</a><?
					}
					return true;
				}
				else
				{
					$json = json_decode($this->curlGetFile($this->URL));
					if($json -> error) die("THERE HAS BEEN AN ERROR: pageId invalid");
					foreach($json->data as $v)
					{
					
					if($v->name!="Timeline Photos" and $v->name!="Profile Pictures" and $v->name!="Cover Photos"){
						echo "<div class ='ImgWrapper'>";
						echo  "<a href = '".$this->PAGE;
						echo  "?";
						echo  "aid=".$v->id."' target='_blank'>";
						echo "<img class='example-image-link' width='300' src='https://graph.facebook.com/".$v->id."/picture' />";
						echo "</a>";
						//echo  $v->from->name."<br>"; NOME DA PAGINA
						echo  "<br><span class='face'>Powered by Facebook</span><br> <a href = '".$this->PAGE;
						echo  "?";
						echo  "aid=".$v->id."' target='_blank'><span class='face_link'>Album: </span>".$v->name." </a>";
						echo  "<br><span><span class='face_link'> Fotos: </span>".$v->count."</span><br>";
						echo "<br clear='all'></div>";
					}}
					return true;
				}
			}
			return false;
		}
		public function curlGetFile($curlUrl)
		{
			$ch = curl_init(); 
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			curl_setopt($ch, CURLOPT_URL, $curlUrl); 
			$data = curl_exec($ch); 
			curl_close($ch);
			return $data;
		}
		
		public function albumChk($albumId)
		{
			$json = json_decode($this->curlGetFile($this->URL));
			$arrayId = array();
			foreach($json->data as $v)
						array_push($arrayId, $v->id);
			if(!in_array($albumId,$arrayId)) return false;
			return true;
		}
};
?>


 <!-- ####################################################################################################### -->
  	<script src="js/jquery-1.11.0.min.js"></script>
	<script src="js/lightbox.js"></script>

	<script>
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-2196019-1']);
	_gaq.push(['_trackPageview']);

	(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
	</script>

<!-- ####################################################################################################### -->