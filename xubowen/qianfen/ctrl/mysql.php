<?php
	$link = @mysql_connect("localhost:3306","root","123456");
	if(!$link){
		echo "连接失败";
		echo mysql_error();
	}
	
	$a = @mysql_select_db("test1807");
	if(!$a){
		echo "选择数据库失败";
		echo mysql_error();
	}
	
	$b = mysql_query("set names utf8");
	if(!$b){
		echo "设置字符集失败";
		echo mysql_error();
	}
?>