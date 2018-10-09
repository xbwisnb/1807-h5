<?php
	
	include "mysql.php";
	
	$cont = @$_REQUEST["cont"];
	$which = @$_REQUEST["which"];
	$idea = @$_REQUEST["idea"];
	
	$a = mysql_query("INSERT wrong (cont,which,idea) VALUES('".$cont."','".$which."','".$idea."')");
	if($a){
		echo 0;
	}else{
		echo 1;
		echo mysql_error();
	}
	
	
?>