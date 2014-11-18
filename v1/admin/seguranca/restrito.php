<?
session_save_path("/tmp"); 
session_start();
if (!isset($_SESSION['nivel'])) { header('location: login.php'); die; }
?>