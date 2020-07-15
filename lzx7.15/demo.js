 function f1(id) {
 	return document.getElementById(id);
 }
 function animate(element,json,fn){
			//首先是消除定时器
		    clearInterval(element.nameId);
		    element.nameId = setInterval(function(){
		    	//获得目前直接的位置
		    	var flag = true;
		    	for(var attr in json ){
		    		
		    		//改变透明度
		    		if(attr == "opacity"){
		    			//获得当前的透明度
		    			var current = getStyle(element,attr)*100;
				    	//目标位置
				    	var target = json[attr]*100;
				    	//确定步伐
				    	var index = (target-current)/10;
				    	index = index>0?Math.ceil(index):Math.floor(index);

				    	//前进的位置
				    	current+=index;
				    	element.style[attr] = current/100;
		    		}else if (attr == "zIndex") {
		    			element.style.zIndex = json[attr];

		    		}else{

		    			var current = parseInt(getStyle(element,attr));
				    	//确定步伐
				    	var target = json[attr];
				    	var index = (target-current)/10;
				    	index = index>0?Math.ceil(index):Math.floor(index);

				    	//前进的位置
				    	current+=index;
				    	element.style[attr] = current + "px";
		    		}
			    	if(target != current) {
			    		flag = false;
			    	}

		    	}
			    if(flag){
			    		clearInterval(element.nameId);
			    		if(fn){
			    			fn();
			    		}
			    }
		    },20);
		}




 function getStyle(element,attr) {
			  return window.getComputedStyle?window.getComputedStyle(element,null)[attr]:element.currenttSyle[attr];

     }