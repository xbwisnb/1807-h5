
//	 function setCookie(name,value,timer){
//      var date =new Date;
//      date.setDate(date.getDate()+3);
//      if($("#zhang").val() != "" && $("#mi").val()!= ""){
//      document.cookie = " " + $("#zhang").val() + " = " + $("#mi").val() + "  ; expires="+date;
//		}
//  }
 
	$('#btn').click(function(){
		localStorage.setItem('name',JSON.stringify($('#zhang').val()))
		localStorage.setItem('pass',JSON.stringify($('#mi').val()))
			alert("注册成功，即将跳转到登录页面..")
			location.href = "http://localhost/xubowen/cha/login.html"
		
		
	});







