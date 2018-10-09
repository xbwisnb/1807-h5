var perimeters = window.location.search;
perimeters0 = decodeURI(perimeters.substr(1).split('&')[0]);
perimeters1 = decodeURI(perimeters.substr(1).split('&')[1]);

perimeters2 = decodeURI(perimeters.substr(1).split('&')[2]);
 
perimeters3 = decodeURI(perimeters.substr(1).split('&')[3]);
console.log(perimeters0,perimeters1,perimeters2,perimeters3)
		var	str=`
			<div id="s_box">
			
			<img src="${perimeters0}">
			<span class="xy"></span>
			</div>
		</div>
		<div id="b_box">
			
			<img src="${perimeters0}"/>
		</div>
		</div>
		</div>
			
			<div class="g-item  float-left">
            <h1 class="g-title">${perimeters1}</h1>
         <p class="g-scr">${perimeters2}</p>
            

            <dl>
                <dt>
                <div class="g-scj">市场价<span class="scj-price">￥ <del class="scj"> 235.00                                </del></span></div>
                </dt>
                <dd>
                    <div class="g-zp"> 醉品价
                        <span class="zp-price hy-price"> ${perimeters3 } </span>
                        </span>
                    </div>
                </dd> 
                <dd>
                    <div class="height-1">
                    </div>
                </dd>
                <dd>
                    <div class="g-pp">
                        <ul class="clearfix">
                        	<li><span class="g-hl">品牌</span><span class="g-con">醉品朴茶</span></li>
                            <li><span class="g-hl">净含量</span><span class="g-con">100克</span></li>
                            <li><span class="g-hl">商品编号</span><span class="g-con">8699842</span></li>
                        </ul>
                    </div>
                </dd> 
                <dd>
                    <div class="g-sl"> 数量
                        <button type="button" class="jian">-</button>
                        <input type="text" value="1" class="text-num">
                        <button type="button" class="plus">+</button>
                    </div>
                </dd> 
                <dd> <div class="g-cart"> 加入购物车 </div> </dd> </dd>
            </dl>
        </div> 
			`
		
	
		$("#xiang").html(str)
	