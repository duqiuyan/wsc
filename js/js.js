$(function() {$.post("?",{"act":"checkCollection","ppid":"36170" },function(data) {if (data.stats ==1) {$("#ifCollect").html("已收藏");}
},"json");$("#pro_img").touchSlider({mouseTouch:true,autoplay:false,imgloadflag:true,viewport:'.pro_img_box ul',namespace:"pro_img_box",pagination:'.pro_img_item',currentClass:"cur" });$.get('/ajax/ajaxOperate.aspx?act=checkFave&ppid=36170&_m='+Math.random(),function(re){if(re.stats==1){$('#myfavbtn').addClass('myfavico2');}
},'json')
});var ppid =36170;function myfav(ppid,obj) {var href =window.location.href;if ($.trim(ppid).length >0) {$.ajax({url:'/ajax/ajaxOperate.aspx',dataType:'json',data:{'act':'addCollection','ppid':ppid },type:'post',success:function(txt) {switch (txt.stats) {case 1:$("#ifCollect").html("已收藏");$('#myfavbtn').addClass('myfavico2');break;case 2:window.location.href ="/login.aspx?url=" + encodeURI(href);break;case 3:$("#ifCollect").html("已收藏");break;}
}
});}
}