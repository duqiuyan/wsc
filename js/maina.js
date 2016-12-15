window.onload=function(){
	// var guideButton=document.getElementById("guideButton");
	var cover=document.getElementById("coverid");
	// var guideBox=document.getElementById("guideBox");
	var pageArr=document.getElementsByClassName("guidePage"); 


			guideBegin();
		for(var i=0;i<pageArr.length;i++){
			(function(index){
				console.log("xxxxx---------",i);
				// var closeBtn=pageArr.item(index).getElementsByClassName("close").item(0);
				var nextBtn=pageArr.item(index).getElementsByClassName("nextBtn").item(0);
				// closeBtn.onclick=function(){
				// 	guideClose(index);
				// }
				nextBtn.onclick=function(){
					console.log("click", index);
					if(index==pageArr.length-1){
						console.log("关闭", index);
					   guideClose(index);
					}else{
					   pageArr.item(index+1).style.display="block";
					   pageArr.item(index).style.display="none";
					   nextBtn.style.backgroundImage = 'url(../image/btn.jpg)';
					}
					
				}
			})(i)
			
		}
	// guideButton.onclick=function(){
	// 	guideBegin();
	// 	for(var i=0;i<pageArr.length;i++){
	// 		(function(index){
	// 			console.log("xxxxx---------",i);
	// 			// var closeBtn=pageArr.item(index).getElementsByClassName("close").item(0);
	// 			var nextBtn=pageArr.item(index).getElementsByClassName("next").item(0);
	// 			// closeBtn.onclick=function(){
	// 			// 	guideClose(index);
	// 			// }
	// 			nextBtn.onclick=function(){
	// 				if(index==pageArr.length-1){
	// 				   guideClose(index);
	// 				}else{
	// 				   pageArr.item(index+1).style.display="block";
	// 				   pageArr.item(index).style.display="none";
	// 				}
					
	// 			}
	// 		})(i)
			
	// 	}
	// }
	//首次登录
	if(document.cookie!="name=onelyLogin"){
		guideBegin();
		// guideButton.onclick();
	}
	function guideBegin(){
		cover.style.display="block";
		// guideBox.style.display="block";
		pageArr.item(0).style.display="block";
	}
	function guideClose(index){
		pageArr.item(index).style.display="none";
		cover.style.display="none";
		// guideBox.style.display="none";
	}
	//设置cookie  Google Chrome只支持在线网站的cookie的读写操作，对本地html的cookie操作是禁止的。
	document.cookie="name=onelyLogin";
	alert(document.cookie);
}