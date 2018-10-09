class Insert{
	constructor(){
		this.send = document.getElementById("send");
		this.cont = document.getElementById("cont");
		this.which = document.getElementById("which");
		this.idea = document.getElementById("idea");
		this.setUrl = "http://localhost/xubowen/qianfen/ctrl/insert.php";
		this.getUrl = "http://localhost/xubowen/qianfen/ctrl/show.php";
		this.tbody = document.querySelector("tbody");
		this.insert = document.getElementById("insert");
		this.type = 1;
		
		this.init()
		this.load()
		this.changeType();
	}
	load(){
		var that = this;
		postAjax(this.getUrl).then(function(res){
			that.res = JSON.parse(res);
			that.display()
		})
	}
	init(){
		var that = this;
		this.send.onclick = function(){
			if(that.type == 1){
				postAjax(that.setUrl,{
					cont:that.cont.value,
					which:that.which.value,
					idea:that.idea.value
				}).then(function(res){
					if(res == 0){
						that.res.push({
							id:"hahah",
							cont:that.cont.value,
							which:that.which.value,
							idea:that.idea.value
						})
						that.display()
					}else{
						console.log(res)
					}
				})
				console.log("添加")
			}else{
				console.log("修改")
			}
		}
	}
	display(){
		var str = "";
		for(var i=0;i<this.res.length;i++){
			str += `<tr>
						<td>${this.res[i].id}</td>
						<td>${this.res[i].cont}</td>
						<td>${this.res[i].which}</td>
						<td>${this.res[i].idea}</td>
						<td><button type="button" class="btn btn-primary updata" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">修改</button></td>
						<td><span class="btn btn-secondary">删除</span></td>
					</tr>`
		}
		this.tbody.innerHTML = str;
	}
	changeType(){
		var that = this;
		this.insert.onclick = function(){
			that.type = 1;
		}
		this.tbody.addEventListener("click",function(eve){
			var e = eve || window.event;
			var target = e.target || e.srcElement;
			if(target.nodeName == "BUTTON"){
				that.type = 2;
			}
		})
	}
}


new Insert()

