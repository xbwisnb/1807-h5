
//	function getCookie(name){
//      var arr = document.cookie.split("; ");
//      console.log(arr);
//      for(var i=0;i<arr.length;i++){
//          arr2 = arr[i].split("=");
//          if(arr2[0] == name){
////          	console.log(arr2[0]);
//          	
//              return arr[1];
//          }
//
//      }
//      return "";
//  }
 
 
$("#btn").click(function(){
	
	var otxt = JSON.parse(localStorage.name);
	var opass = JSON.parse(localStorage.pass);
	if($('#zhang').val() == otxt && $('#mi').val()==opass){
		console.log(1)
		location.href = "http://localhost/xubowen/cha/index.html"
		alert("登录成功");
	}
	
})
