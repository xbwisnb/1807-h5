$.ajax({
	type:"get",
	url:"http://localhost/xubowen/cha/json/huodong.json",
	async:true,
	
	success:function(res){
		var str=""
		for(var i=0;i<res.huodong.length;i++){
			str+=
			`<img src="${res.huodong[i].url}">`
			
		}
		console.log(str)
		$(".banner").html(str)
	}
	
	
	
	
	
	
});