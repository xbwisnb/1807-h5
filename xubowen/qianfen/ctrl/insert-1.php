<?php
	
	include "mysql.php";
	
	$cont = @$_REQUEST["cont"];
	$which = @$_REQUEST["which"];
	$idea = @$_REQUEST["idea"];
	
	$a = mysql_query("INSERT wrong (cont,which,idea) VALUES('".$cont."','".$which."','".$idea."')");
	if($a){
//		echo 0;
		echo load();
	}else{
		echo 1;
		echo mysql_error();
	}
	
	
	function load(){
		$q = mysql_query("SELECT * FROM wrong");
		$str = "";
		while($arr = mysql_fetch_assoc($q)){
			$str = $str.json_encode($arr).",";
		}
		
		$str = "[".substr($str,0,-1)."]";
		
		return $str;
	}
	
	
?>