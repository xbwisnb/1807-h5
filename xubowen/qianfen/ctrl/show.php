<?php
	
	include "mysql.php";
	
	echo load();
	
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