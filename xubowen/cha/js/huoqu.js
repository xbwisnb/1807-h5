$.ajax({
	type:"get",
	url:"http://localhost/xubowen/cha/json/data.json",
	success:function(res){
		var str = ""
		for (var i=0;i<res.logo.length;i++) {
			str+=`<img src="${res.logo[i].url}">`
		}
		
		$(".logo a").html(str)
		
		
		
		var str2=""
		for(var i=0;i<res.xuan.length;i++){
			str2+=`<img src="${res.xuan[i].url}">`
		}
		
		$(".every a").html(str2)
		
		var str3=""
		for(var i=0;i<res.tu.length;i++){
			str3+=`
			<li>
			<img src="${res.tu[i].url}">
				<p >${res.tu[i].name}</p>			
				<p class="special-alt">${res.tu[i].shou}</p>
				<span class="special-now-price">${res.tu[i].price}</span>
				
			</li>
			`
		}
			
		$("#tu ul ").html(str3)
		
		var str4=""
		for(var i=0;i<res.lou1.length;i++){
			str4+=`
			<a href="list.html">
			<div class="te-img">
			<img src="${res.lou1[i].url}">
			</div>
				<p class="te-xiang">${res.lou1[i].name}</p>			
				<p class="te-alt">${res.lou1[i].shuo}</p>
				<span class="c-price">${res.lou1[i].price}</span>
				</a>
			`
		}
	
		$(".center ").html(str4)
		
		var str5=""
		for(var i=0;i<res.lou2.length;i++){
			str5+=`
			<a href="list.html">
			<div class="te-img">
			<img src="${res.lou2[i].url}">
			</div>
				<p class="te-xiang">${res.lou2[i].name}</p>			
				<p class="te-alt">${res.lou2[i].shuo}</p>
				<span class="c-price">${res.lou2[i].price}</span>
				</a>
			`
		}
		
		$(".center-2 ").html(str5)
		
		var str6=""
		for(var i=0;i<res.lou3.length;i++){
			str6+=`
				<a href="list.html">
			<div class="img-all">
			<img src="${res.lou3[i].url}">
			</div>
				<p class="t1">${res.lou3[i].name}</p>			
				<p class="t2">${res.lou3[i].last}</p> 
				</a> 
			`
		}
		$(".bottom").html(str6)
		
		var str7=""
	for (var i=0;i<res.zi.length;i++) {
			str7+=`<img src="${res.zi[i].url}">
		            <a href="list.html" class="more-card">			
					<h2>${res.zi[i].name}</h2>	
					<p class="more-text">${res.zi[i].shuo}</p>
					<p class="more-text">${res.zi[i].min}</p>
					<img src="${res.zi[i].src}">
			</a>
			`
		}
		
		
		$("#drink-2 .left").html(str7)
		
		var str8=""
		for(var i=0;i<res.nang.length;i++){
			str8+=`<a href="list.html" class="news-item">
				<p class="news-title">${res.nang[i].name}</p>
				<div class="news-artical clearfix">
				<img src="${res.nang[i].url}">
				<p >${res.nang[i].shuo}</p>
				</div>
			</a>
			` 
		}
	
		$(".di2").html(str8)
		
		var str9=""
		for(var i=0;i<res.ang.length;i++){
			str9+=`<a href="list.html" class="news-item">
				<p class="news-title">${res.ang[i].name}</p>
				<div class="news-artical clearfix">
				<img src="${res.ang[i].url}">
				<p >${res.ang[i].shuo}</p>
				</div>
			</a>
			` 
		}
		console.log(str9)
		$(".di1").html(str9)
		
	}
	
});