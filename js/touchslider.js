function (a) {a.fly =function (b,c) {var d ={version:"1.0.0",autoPlay:!0,vertex_Rtop:20,speed:1.2,start:{},end:{},onEnd:a.noop },e =this,f =a(b);e.init =function (a) {this.setOptions(a),!!this.settings.autoPlay &&this.play() },e.setOptions =function (b) {this.settings =a.extend(!0,{},d,b);var c =this.settings,e =c.start,g =c.end;f.css({marginTop:"0px",marginLeft:"0px",position:"fixed" }).appendTo("body"),null !=g.width &&null !=g.height &&a.extend(!0,e,{width:f.width(),height:f.height() });var h =Math.min(e.top,g.top) - Math.abs(e.left - g.left) / 3;h < c.vertex_Rtop &&(h =Math.min(c.vertex_Rtop,Math.min(e.top,g.top)));var i =Math.sqrt(Math.pow(e.top - g.top,2) + Math.pow(e.left - g.left,2)),j =Math.ceil(Math.min(Math.max(Math.log(i) / .05 - 75,30),100) / c.speed),k =e.top ==h ?0 :-Math.sqrt((g.top - h) / (e.top - h)),l =(k *e.left - g.left) / (k - 1),m =g.left ==l ?0 :(g.top - h) / Math.pow(g.left - l,2);a.extend(!0,c,{count:-1,steps:j,vertex_left:l,vertex_top:h,curvature:m }) },e.play =function () {this.move() },e.move =function () {var b =this.settings,c =b.start,d =b.count,e =b.steps,g =b.end,h =c.left + (g.left - c.left) *d / e,i =0 ==b.curvature ?c.top + (g.top - c.top) *d / e :b.curvature *Math.pow(h - b.vertex_left,2) + b.vertex_top;if (null !=g.width &&null !=g.height) {var j =e / 2,k =g.width - (g.width - c.width) *Math.cos(j >d ?0 :(d - j) / (e - j) *Math.PI / 2),l =g.height - (g.height - c.height) *Math.cos(j >d ?0 :(d - j) / (e - j) *Math.PI / 2);f.css({width:k + "px",height:l + "px","font-size":Math.min(k,l) + "px" }) } f.css({left:h + "px",top:i + "px" }),b.count++;var m =window.requestAnimationFrame(a.proxy(this.move,this));d ==e &&(window.cancelAnimationFrame(m),b.onEnd.apply(this)) },e.destory =function () {f.remove() },e.init(c) },a.fn.fly =function (b) {return this.each(function () {void 0 ==a(this).data("fly") &&a(this).data("fly",new a.fly(this,b)) }) } }(jQuery);$("#fqfk").click(function(){var pagei =layer.open({type:1,content:$("#installment").html(),shadeClose:false,style:'width:' + ($(window).width() *0.9) + 'px; max-height:' + ($(window).height() *0.9) + 'px;border-radius:5px; border:none;',success:function (olayer) {var cla ='getElementsByClassName';olayer[cla]('close')[0].onclick =function () {layer.closeAll();}
},shadeClose:false
});});if ($(".pro_pz dl").length < 1) {$(".pro_pz").hide();}
var isFlag =true;function priceTip(ppid,_type) {loadId();$(".smstip").show();mark("show");if (_type =="jjtz") {$(".smstip h3").html("降价通知：");$("#jjtz").show().siblings("div").hide();$("#jj_nowprice em").html($("#now_price").text().substring(1,$("#now_price").text().length));} else {$(".smstip h3").html("到货通知：");$("#dhtz").show().siblings("div").hide();}
$("#mark").click(function() {$(".smstip").hide();});}
function subTip(ppid) {var phone =$("#phone").val(),price =$("#price").val();if (phone =="" ||phone ==null) {layer.open({content:"手机号码不能为空！",shadeClose:false,btn:["确定"]});return false;}
if(price==""||price==null)
{layer.open({content:"价格不能为空！",shadeClose:false,btn:["确定"]});return false;}
$.post("?",{act:"addNotify",ppid:ppid,phone:phone,price:price },function(d) {if (d.stats ==1) {layer.open({content:"提交成功！",shadeClose:false,btn:["确定"]});$(".smstip, #mark").hide();mark("hide");} else {layer.open({content:d.result,shadeClose:false,btn:["确定"]});}
},"json");}
function wxsubTip(ppid)
{var price =$("#price").val();if(price==""||price==null)
{layer.open({content:"价格不能为空！",shadeClose:false,btn:["确定"]});return false;}
$.post("?",{act:"WXaddNotify",ppid:ppid,price:price },function(d) {if (d.stats ==1) {layer.open({content:"提交成功！",shadeClose:false,btn:["确定"]});$(".smstip, #mark").hide();mark("hide");} else {layer.open({content:d.result,shadeClose:false,btn:["确定"]});}
},"json");}
function subTip1(ppid) {var phone =$("#phone1").val();if (phone =="" ||phone ==null) {layer.open({content:"手机号码不能为空！",shadeClose:false,btn:["确定"]});return false;}
$.post("?",{act:"daohuoNotify",ppid:ppid,phone:phone },function(d) {if (d.stats ==1) {layer.open({content:"提交成功！",shadeClose:false,btn:["确定"]});$(".smstip, #mark").hide();mark("hide");} else {layer.open({content:d.result,shadeClose:false,btn:["确定"]});}
},"json");}
var ppid =0;function subSelect() {$(".se_yanse").hide();if (ppid !=0) {window.location ="/product/" + ppid + ".html";}
}
var isdo =1;function selectst(obj) {if (isdo ==1) {isdo =0;ppid =$(obj).attr("ppriceid");$.get("/detail.aspx",{act:"getguige",ppid:ppid,t:+new Date() },function(res) {$(obj).addClass("cur").siblings(".cur").removeClass("cur");$("#guigelist").html(res);isdo =1;},"text");}
}
$(".pj_box ul").css({width:100 *$(".pj_box ul li").length });$("#show_sjfw").click(function() {$(".sjfwshow").toggle();$(this).hide();$("#hide_sjfw").removeClass("cur").show();});$("#hide_sjfw").click(function() {$(".sjfwshow").toggle();$(this).hide();$("#show_sjfw").removeClass("cur").show();});if (parseInt($("#now_price").html()) >600) {$("#fenqi").show();}
$(".kucun").click(function() {$(".kc_show").show();$(this).addClass("kucuncur");});$("#kc_close").click(function() {$(".kc_show").hide();$(".kucun").removeClass("kucuncur");});$(function() {$("#services_ a").click(function() {$(this).toggleClass("cur");});$("#mark").click(function() {$("#bigImg").removeClass("bigImg");$("#bigImg").find("img").attr("style","");$("#mark").hide();$(".wrapper").removeClass("mg0");$(".pro_img_nav").attr("style","");});$("#bigImg").click(function() {var bigImgBox =$(this);if ($(this).hasClass("bigImg")) {$("#mark").trigger("click");} else {bigImgBox.addClass("bigImg");$(".wrapper").addClass("mg0");var w =$(window).width();var h =$(window).height();bigImgBox.find("img").css("width",w + "px");var curH =bigImgBox.find(".pro_img_wrap").first().height();var t =0;if (h >curH) {t =(h - curH) *0.5;}
$(".pro_img_nav").css("top",-t + 5 + "px");bigImgBox.css({"top":t + "px","width":w + "px" });$("#mark").show();}
});});function addCart(buyType,ppriceid,addType) {var otherPPid ="";if ($("#services_ a[class=cur]").length >0) {$("#services_ a[class=cur]").each(function() {otherPPid +=$(this).attr("ppriceid") + ",";});otherPPid =otherPPid.substring(0,otherPPid.length - 1);}
if (buyType !=2) {layer.open({content:"M站暂不支持非裸机方式购买",shadeClose:false,btn:["确定"]});} else {layer.open({type:2,content:"加载中...",shadeClose:false });var pcfwid=0;if($('#pcfw_dl .pcfuwu').length>1){var pcfw=$('#pcfw_dl .pcfuwu').first();if(pcfw.hasClass('active'))
pcfwid =pcfw.attr('ppid');};$.ajax({url:'/ajax/initCart.aspx',dataType:'json',type:'post',data:{'type':'m','ppid':ppriceid,'otherPPID':otherPPid,'pcfwid':pcfwid },success:function(res) {layer.closeAll();if (addType ==0) {window.location.href ="cart.html";} else {var self=$(".add_cart");var seltLeft=self.offset().left;var selftTop=$(window).height()-50;var offset =$('#mybuycarer').offset();var src=self.attr("data-src");var flyDom=src?$('<img class="fly-img" src="images/>'):$('<span class="fly-img"></span>');flyDom.fly({start:{left:seltLeft,top:selftTop-100
},end:{left:offset.left+20,top:offset.top - $(window).scrollTop(),width:10,height:10
},onEnd:function(){setTimeout(function(){$(".fly-img").remove();$("#cartCount").show().html(res.cartcount);},100);} 
});}
}
});}
}
function buyInShop(buyType,ppriceid,addType){layer.open({type:2,content:"加载中...",shadeClose:false});$.post("/ajax/initCart.aspx",{type:'m',ppid:ppriceid},function(res){if(res.stats==1){window.location.href="cart.html?ppid="+ppriceid;}else{layer.closeAll();}
},"json");}
var UArea ={pid:"99",zid:"9901",did:"990101",dname:"全国",Init:function() {this.pid =Cookie.Get("pidc")||99;this.zid =Cookie.Get("zidc")||9901;this.did =Cookie.Get("didc")||990101;if (Cookie.Get('dnamec') !=null) {this.dname =Cookie.Get('dnamec');}
if (this.dname ==null ||this.dname =="") {this.dname ='全国';Cookie.Set('dnamec','全国');}
}
};var hasShop=Cookie.Get("hasshop");function AreaClick(the) {var time =24 *300;Cookie.Set('pidc',$(the).attr('pid'),time);Cookie.Set('zidc',$(the).attr('zid'),time);Cookie.Set('didc',$(the).attr('did'),time);Cookie.Set('dnamec',$(the).attr('dname'),time);var cityid_ =$(the).attr("did") ==0 ?$(the).attr("zid") ==0 ?$(the).attr("pid") ==0 ?0 :$(the).attr("pid") :$(the).attr("zid") :$(the).attr("did");Cookie.Set('cityid',cityid_,time);Cookie.Set('ischecked',1,time);Cookie.Set('hasshop',hasShop,time);UArea.Init();window.location.reload();return false;}
UArea.Init();var nowpid =UArea.pid,nowzid =UArea.zid,nowdid =UArea.did,nowdame =UArea.dname;var re,nowpname,nowzname;$.get("/area/0",function(rsp) {if(rsp.stats==1){$('#ps_sheng').html(template("cityTmpl",rsp.result)).val(nowpid);}
},'json');function buidCity(pid,zid,did){$.get("/area/"+pid,function(json) {if (json.stats ==1) {re =json.result;var zname ="",shiStr ='<option value="0">请选择</option>',xianStr ='<option value="0">请选择</option>';for (var i =0;i < re.length;i++) {var reItem =re[i];if (reItem.pid ==pid) {var chile =reItem.items;shiStr +="<option pid='" + reItem.pid + "' value=" + reItem.id + ">" + reItem.name + "</option>";if(did!=0){if (reItem.id ==zid) {for (var j =0;j < chile.length;j++) {var xian =reItem.items[j];xianStr +="<option pid='" + reItem.pid + "' zid='" + reItem.id + "' did='" + xian.id + "'  value='" + xian.id + "' dname='" + xian.name + "'>" + xian.name + (xian.iskc ==true ?"*" :"") + "</option>";}
$("#ps_xian").html(xianStr).val(did);}
}else{$("#ps_xian").html(xianStr);}
}
$("#ps_shi").data("mdata" + reItem.id,reItem.items);$("#ps_shi").html(shiStr).val(zid);$('#ps_sheng').val(pid);}
}
},'JSON');}
buidCity(nowpid,nowzid,nowdid);$("#ps_sheng").change(function() {var pid =this.value;var isshop=$(this).find("option:selected").attr("data-hasshop");hasShop=isshop==1?"true":"false";buidCity(pid,0,0);});$("#ps_shi").change(function() {var chile =$(this).data("mdata" + this.value),xianStr ="";for (var j =0;j < chile.length;j++) {var xian =chile[j],slted =$("#ps_shi > option:selected");xianStr +="<option pid='" + slted.attr("pid") + "' zid='" + this.value + "' did='" + xian.id + "' dname='" + xian.name + "'>" + xian.name + (xian.iskc ==true ?"*" :"") + "</option>";}
$("#ps_xian").html("<option value='0'>请选择</option>" + xianStr);});$("#ps_xian").change(function() {if (this.value ==0) {return;} else {var objoption =this.options[this.selectedIndex];AreaClick(objoption);}
});function showmsg(txt) {layer.open({content:txt,shadeClose:false,btn:["确定"]});return;}
 function m_showshop()
{$.post("?",{act:"getMenDian"},function(rsp){if(rsp.stats==1)
{var result=eval(rsp.result);var html="";var basepath="http://img2.ch999img.com/";for(i=0;i<result.length;i++)
{var re=result[i];html+="<div class=\"m_img\"> <img src=\""+basepath+re.mainpic+"\"/></div>";html+="<h4 ><a href=\"http://m.ch999.com/location/" + re.Id + ".html\" target=\"blank_\">" + re.AreaName + "</a></h4>";html +="<p class=\"m_addr\"><a href=\"http://m.ch999.com/location/" + re.Id + ".html\" target=\"blank_\">地址：</span>" + re.ShopAddress + "</a></p></div>";}
html+="<div style=\"height:10px; overflow:hidden\"></div>"
$("#m_shop_list").html(html);}
},"json")
$('.m_mark, .m_shop').show();var w=$(window).width()-64;$('.m_mark').height($('html,body').height()).click(m_closeshop);var h=$(window).height()-$('.m_shop').height();$('.m_shop').css({width:w+'px',top:(h*0.5)+'px'});}
function m_closeshop()
{$('.m_mark, .m_shop').hide();}

function addbooking(obj) {var proid =$(obj).attr("proid");var ppid =$(obj).attr("ppid");$.post("?",{act:"addbooking",proid:21249,ppid:36170,t:+new Date() },function(res) {switch (res.status) {case -1:if (window.confirm(res.msg)) {window.location ="/login.aspx?url=" + encodeURI(res.url);}
break;default:layer.open({content:res.msg,shadeClose:false,btn:["确定"]});break;}
},"json");}
function isKC(d) {switch (d) {case 1:return "现货";break;case 2:return "在途";break;case 3:return "预订";break;case 4:return "已下市";break;case 5:return "缺货";break;case 6:return "预约";break;case 7:return "有货";break;}
}
(function() {var hasshop=Cookie.Get("hasshop")=="false"||Cookie.Get("hasshop")==null?false:true;var cityid=310104;if(!hasshop){cityid=990101}
$.ajax({url:"http://price.ch999img.com/DataAPI.ashx",data:{act:"kc-get",ppid:"36170",cityId:cityid },success:function(data) {var webKC =isKC(data.WebStoreState);if (data.WebStoreState ==5) {$(".liji_buy").css({background:"#ddd",color:"#333" }).attr({"title":"商品缺货不可购买",href:"javascript:;" }).removeAttr("onclick").html("商品缺货").siblings("a").hide();$(".liji_buy").addClass("left");$("#mybuycarer").show();$("#lblTextKcState").html("该商品已缺货，到货时间不确定，");$("#daohuotz").show();} else if (data.WebStoreState ==4) {$(".liji_buy").addClass("que").removeClass("yuyuebtn").attr({"title":"商品下市不可购买",href:"javascript:;" }).removeAttr("onclick").html("商品已下市").siblings("a").hide();$("#lblTextKcState").html("该商品已下市，不可购买！");$("#mybuycarer").show().addClass("right");if ($("#fenqifuBtn").length >0) {$("#fenqifuBtn").hide();}
} else if (data.WebStoreState ==6) {$(".liji_buy").addClass("yuyuebtn").removeClass("que").attr({"title":"商品未上市可提前预约，以到货价为准",href:"javascript:;",onclick:"addbooking(this)" }).html("预约购买").siblings("a").hide();$("#mybuycarer").show().addClass("right");$("#lblTextKcState").html("商品未上市可提前预约，以到货价为准");} else {$("#lblTextKcState").html(data.WebStoreDes);$(".liji_buy").removeClass("que yuyuebtn").attr({"title":"",href:"javascript:void(0);","data-src":'http://img2.ch999img.com/pic/product/70x70/20151124171824260.jpg',onclick:'buyInShop(2,36170,0)' }).html("到店购买");}
$("#lblProductKcState").text(webKC);$("#lblProductKcStateShop").text(isKC(data.ShopStoreState));var ShopStores =data.ShopStores;var html ="",zitiHtml ="";if (ShopStores ==null &&data.ZITI ==null) {$("#lblShop").hide();$("#lblShop1").show();} else if (ShopStores !=null) {for (var i =0;i < ShopStores.length;i++) {var _class ="";var StoreDes =ShopStores[i].StoreDes;if (StoreDes =="少量" ||StoreDes =="现货" ||StoreDes =="充足") {_class ="xianhuo";} else if (StoreDes =="预订" ||StoreDes =="预约") {_class ="yuding";} else if (StoreDes =="已下市" ||StoreDes =="缺货" ||StoreDes =="下市") {_class ="quehuo";} else if (StoreDes =="在途") {_class ="zaitu";}
var url =ShopStores[i].url.substring(ShopStores[i].url.lastIndexOf("/") + 1,ShopStores[i].url.length);html +='<li><a href="http://m.ch999.com/location/' + url + '" title="点击查看' + ShopStores[i].ShopName + '详细信息">' + ShopStores[i].ShopName + '</a><em class="' + _class + '">[' + StoreDes + ']</em></li>';}
$("#lblShopList").html(html);} else {$("#lblShop dt").text("自 提 点：");$("#lblShop h5").text("自 提 点：");$("#lblProductKcStateShop").parent().hide().after("查看自提点");var ztItem =data.ZITI,zitiHtml ="";for (var i =0;i < ztItem.length;i++) {zitiHtml +='<li><a href="http://m.ch999.com/zitilist.aspx?#zt_' + ztItem[i].Id + '">' + ztItem[i].Name + '自提点</a></li>';}
$("#lblShopList").html(zitiHtml);}
if (data.Support39Transfer) {$("#sjkdId").show();if ($("#dnfwId").length >0) {$("#dnfwId").show();}
}
if (data.SupportFreeMaintenance) {}
if (data.SupportInstallment) {}
if (data.supportJiaji) {$("#jiajiId").show();}
if (data.SupportThreeHourReach) {$("#sxsId").show();}
if (data.SupportExpressDelivery) {$("#kuaidiId").show();}
if("2"=="187") 
 {$("#sxsId").hide();}
},dataType:"jsonp"
});})();