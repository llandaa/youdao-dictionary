//scroll
var myScroll;
var myScroll1;
var myScroll2;
var myScroll3;
var myScroll4;
var myScroll5;
var myScroll6;

var myScroll7;
var mySceoll8;
var myScrollNav;
var video1 = document.querySelector('.video1');
var backTop = document.querySelector('.backtop');
var picTxt = document.querySelector('.picfix');
var searchBox = document.querySelector('.searchfix');
var study = document.querySelector('.study');
var isKey = true;
function updatePosition () {
	console.log(this.y>>0)
	if(this.y>>0<-300){
		backTop.style.display="block";
		picTxt.style.zIndex = "999"
		picTxt.style.display="block";
	}
	if(this.y>>0<-350 ){
		searchBox.style.display="block"
	}
	if(this.y>>0 == 0){
		backTop.style.display="none";
		//study.style.display="none";
		
	}
	if(this.y>>0 > -354 ){
		searchBox.style.display="none";
		picTxt.style.zIndex = "-1"
		picTxt.style.display="none";
	}
	/*if(this.y>>0 <= -1118 ){
		study.style.display="block"
	}*/
    if(this.y>>0<-500 && isKey){
        video1.play();
        isKey = false;
    }
     video1.onclick=function(){
	if(!isKey){
		video1.play();
		isKey = true;
	}else{
		video1.pause();
		isKey = false;
	}
	}
}
function loaded () {
	myScroll1 = new IScroll('.pictxt', {eventPassthrough: true, scrollX: true, scrollY: false, preventDefault: false})
	myScroll3 = new IScroll('.picfix', {eventPassthrough: true, scrollX: true, scrollY: false,bounce:false, preventDefault: false})
	myScroll = new IScroll('#dictSecion', {
		bounceEasing: 'elastic',
		bounceTime: 1200 ,
		probeType: 3,
		mouseWheel: true ,
		click: true
		//disableMouse:true,
		//disablePointer:true,
		//disableTouch:true
	});
    
	myScroll2 = new IScroll('#encySecion', { 
		bounceEasing: 'elastic',
		bounceTime: 1200,
		probeType: 3,
		mouseWheel: true ,
		click: true
		
	});
	myScroll4 = new IScroll('#tranSecion', { bounceEasing: 'elastic', bounceTime: 1200,mouseWheel: true ,click: true,bounce:false});
	myScroll5 = new IScroll('#findSecion', { bounceEasing: 'elastic', bounceTime: 1200,mouseWheel: true ,click: true,bounce:false});
	myScroll6 = new IScroll('#mySecion', { bounceEasing: 'elastic', bounceTime: 1200,mouseWheel: true ,click: true,bounce:false});
	myScroll7 = new IScroll('#wordSecion', { bounceEasing: 'elastic', bounceTime: 1200,mouseWheel: true ,click: true,bounce:false});
	myScroll8 = new IScroll('#cardSecion', { bounceEasing: 'elastic', bounceTime: 1200,mouseWheel: true ,click: true,probeType: 3});
	
	myScrollNav = new IScroll('.sectionnav', {
		//scrollX: true,
		scrollY: false,
		momentum: false,
		snap: true,
		snapSpeed: 400,
		keyBindings: true,
	});
	myScroll.on('scroll', updatePosition);
    myScroll.on('scrollEnd', updatePosition);
    myScroll8.on('scroll', updatePosition);
    myScroll8.on('scrollEnd', updatePosition);
}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
//视屏播放

//banner
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });

$(function() {
	//lazyload
    $("img.lazy").lazyload({
    	threshold : -200,	//距离屏幕多高开始加载
    	effect : "fadeIn"	//特效  淡入
    });
    //点赞
   var dianzan = $('.icon-dianzan');
   
   	dianzan.each(function(i,item){
   	$(item).on('click',function(){
 		var num =$('b').eq(i).html();
		if(!dianzan.eq(i).hasClass('active')){
			dianzan.eq(i).addClass('active')
			num++;
			$('b').eq(i).html(num);
		}
   });
   })
  var txtArr = ['Believe in yourself','Consider things from every angle','Do not get up and do not give in','Want it more that anything','Xcellerate your efforts','zero in your target,and go for ig'];
  var _num = 0;
  showNum()
  function showNum(){
  		$('.biantxt').html(txtArr[_num]);
		//console.log($('.biantxt').html())
	if(_num<txtArr.length-1){
		_num ++;
	}else{
		_num = 0;
	}
	setTimeout(showNum,5000)
  }
 //翻译跳转
 $('.searchfix').on('click',function(){
 	$('.btn').removeClass('active');
 	$('.homefan').addClass('active');
 	$('#dictSecion').removeClass('active');
 	$('#encySecion').removeClass('active');
 	$('#tranSecion').addClass('active');
 	$('.picfix').hide();
 	$('.searchfix').hide();
 })
 $('.searchhome').on('click',function(){
 	$('.btn').removeClass('active');
 	$('.homefan').addClass('active');
 	$('#dictSecion').removeClass('active');
 	$('#encySecion').removeClass('active');
 	$('#tranSecion').addClass('active');
 	$('.picfix').hide();
 	$('.searchfix').hide();
 })
 //单词本
 $('.danciben').on('click',function(){
 	$('#homehead').removeClass('active');
 	$('#wordhead').addClass('active');
 	$('#findSecion').removeClass('active');
 	$('#wordSecion').addClass('active');
 })
 
 $('.backshang').on('click',function(){
 	$('#homehead').addClass('active');
 	$('#wordhead').removeClass('active');
 	$('#findSecion').addClass('active');
 	$('#wordSecion').removeClass('active');
 })
 
 //翻转
 function rotateW(obj,wordc,worde){
 var zhuKey = true;
 obj.on('click',function(){
 	if(zhuKey){
 		$(this).removeClass('animated rotateOut1');
 		$(this).addClass('animated rotateOut');
 		$(this).find('.title').html(wordc);
 		zhuKey = false; 
 	}else{
 		$(this).removeClass('animated rotateOut');
 		$(this).addClass('animated rotateOut1');
 		$(this).find('.title').html(worde);
 		zhuKey = true;

 	}
 })
 
 $('.backcard').on('click',function(){
 	$('#cardSecion').removeClass('active');
 	$('#wordSecion').addClass('active');
 	$('#cardhead').removeClass('active');
 	$('#wordhead').addClass('active');
 })
 $('.cardstudy').on('click',function(){
 	$('#cardSecion').addClass('active');
 	$('#wordSecion').removeClass('active');
 	$('#cardhead').addClass('active');
 	$('#wordhead').removeClass('active');
 })
 }
 rotateW($('.big'),'big','大');
 rotateW($('.hello'),'hello','你好');
  rotateW($('.midle'),'middle','中');
 rotateW($('.small'),'small','小');
 
 var audio1 = document.querySelector('audio')
 $('.icon-bofang2').on('click',function(){
 	audio1.play();
 	$(this).fadeOut(1000);
 	$('.icon-iconfontcolor96').fadeIn(1000);
 })
 $('.icon-iconfontcolor96').on('click',function(){
 	audio1.pause();
 	$(this).fadeOut(1000);
 	$('.icon-bofang2').fadeIn(1000);
 })
 
});
//点击切换
(function(d){
	var landa = {
		btns: d.querySelectorAll('.btn'),
		contents: d.querySelectorAll('.content'),
		change: function(){
			var _this = this;
			for(var i=0,len=this.btns.length;i<len;i++){
				(function(index){
					_this.btns[index].addEventListener('click',function(){
						for(var j=0;j<len;j++){
							_this.contents[j].classList.remove('active');
							_this.btns[j].classList.remove('active');
						}
						_this.contents[index].classList.add('active');
						this.classList.add('active');
					},false)
				})(i);
			}
		}
	}
	landa.change()
})(document)
//滚轮事件

var scrollFunc = function (e) {
        e = e || window.event;
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
            if (e.wheelDelta > 0) { //当滑轮向上滚动时
            	//console.log("shang")
                searchBox.style.display="block"
                picTxt.style.display="none"
            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时
            	//console.log("xia")
                searchBox.style.display="none"
               picTxt.style.display="block"
            }
        } else if (e.detail) {  //Firefox滑轮事件
            if (e.detail> 0) { //当滑轮向上滚动时
                searchBox.style.display="block"
                picTxt.style.display="none"
            }
            if (e.detail< 0) { //当滑轮向下滚动时
                searchBox.style.display="none"
                picTxt.style.display="block"
            }
        }
    }
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {//firefox
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法  //ie 谷歌
    window.onmousewheel = document.onmousewheel = scrollFunc;
    
//翻译
var transla = document.querySelector('.icon-xiangyou');
var textar = document.querySelector('textarea');
var eng = document.querySelector('.eng');
var gengduoeng = document.querySelector('.gengduoeng');
var transfanyi = document.querySelector('.transfanyi');
var guanbi = document.querySelector('.icon-guanbi');
var transbottom = document.querySelector('.transbottom');
var trans = document.querySelector('.trans');
var transsave = document.querySelector('.transsave');
transla.onclick=function(){
	transfanyi.style.display="block";
	textar.style.height="2.8rem"
	transbottom.style.height="3rem"
	trans.style.height = "4rem"
	transsave.style.display="none"
	if(textar.value == "小"){
	 eng.innerText = "small";
	 gengduoeng.innerHTML ="little<br/>small</br>young</br>tiny</br>micro"
	}
	if(textar.value == "大"){
	 eng.innerText = "big";
	 gengduoeng.innerHTML ="big<br/>large</br>great</br>huge"
	}
	if(textar.value == "中"){
	 eng.innerText = "In the";
	 gengduoeng.innerHTML ="center<br/>middle</br>China</br>in</br>medium"
	}
	if(textar.value == "你好"){
	 eng.innerText = "How are you";
	 gengduoeng.innerHTML ="hello<br/>hi"
	}
	transsave.innerHTML = transsave.innerHTML + "<br/>"  + textar.value +"<br/>"+ eng.innerText +"<div class='linexu'></div>";
}
guanbi.onclick=function(){
	transsave.style.display="block"
	textar.value="";
	transfanyi.style.display="none";
	textar.style.height="1rem"
	transbottom.style.height="1.5rem"
	trans.style.height = "2.5rem"
	
}
	
//画布
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.arc(160,100,90,0,2*Math.PI,false);
var gradL = ctx.createLinearGradient(80,20,80,180);//渐变

gradL.addColorStop(0, "#3b4367");		//添加渐变色
gradL.addColorStop(0.2, "#4c5383");	
gradL.addColorStop(0.4, "#313967");
gradL.addColorStop(0.6, "#2f3764");
gradL.addColorStop(0.8, "#4b5282");
gradL.addColorStop(1, "#3b4367");

ctx.fillStyle = gradL;
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#3b4367"
ctx.arc(130,50,5,2*Math.PI,false);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#444c7e"
ctx.arc(160,80,8,2*Math.PI,false);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#4f5788"
ctx.arc(220,90,4,2*Math.PI,false);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#4f5788"
ctx.arc(210,70,3,2*Math.PI,false);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#4f5788"
ctx.arc(200,120,3,2*Math.PI,false);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#313967"
ctx.arc(160,140,4,2*Math.PI,false);
ctx.fill();
ctx.closePath();



ctx.beginPath();
ctx.fillStyle = "#ff9692"
ctx.strokeStyle ="#eb6d69"
ctx.lineWidth = 3
ctx.moveTo(120,90)
ctx.lineTo(120,150)
//ctx.arcTo(120,160,130,160,10)
ctx.lineTo(180,150)
//ctx.arcTo(200,160,200,150,10)
ctx.lineTo(180,90)
//ctx.arcTo(200,80,190,80,10)
ctx.lineTo(120,90)
//ctx.arcTo(120,80,120,90,10)
ctx.stroke()
ctx.fill();
ctx.closePath();

function EllipseTwo(context, x, y, a, b) {
    context.save();
    var r = (a > b) ? a : b;
    var ratioX = a / r;
    var ratioY = b / r;
    context.rotate(Math.PI/6)
   
    context.scale(ratioX, ratioY);
    context.beginPath();
    context.strokeStyle = "#D6CCCC"
    context.arc(x / ratioX, y / ratioY, r, 0, 2 * Math.PI, false);
    context.stroke();
    context.closePath();
    context.restore();
    
    
}
EllipseTwo(ctx,190,16,110,30)


ctx.beginPath();
//ctx.lineCap = "round"
ctx.fillStyle = "#ff9692"
ctx.lineWidth = 3
ctx.moveTo(120,89)
ctx.lineTo(150,70)
ctx.lineTo(207,70)
ctx.lineTo(180,89)
//ctx.lineTo(1,90)
ctx.stroke()
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#ff9692"
ctx.lineWidth = 1
ctx.moveTo(181,89)
ctx.lineTo(210,70)
ctx.lineTo(212,130)
ctx.lineTo(181,151)
ctx.lineTo(181,91)
ctx.stroke()
ctx.fill()
ctx.closePath();

ctx.translate(0,-4)
ctx.beginPath();
ctx.fillStyle = "#f3f0f0"
ctx.strokeStyle = "#9598ae"
ctx.lineWidth = 1
ctx.moveTo(150,85)
ctx.lineTo(150,45)
ctx.arcTo(150,30,165,30,15)
ctx.arcTo(180,30,180,45,15)
ctx.lineTo(180,85)
ctx.arcTo(180,87.5,177.5,87.5,2.5)
ctx.arcTo(175,87.5,175,85,2.5)
ctx.lineTo(175,45)
ctx.arcTo(175,35,165,35,10)
ctx.arcTo(155,35,155,45,10)
ctx.lineTo(155,85)
ctx.arcTo(155,87.5,152.5,87.5,2.5)
ctx.arcTo(150,87.5,150,85,2.5)
ctx.stroke()
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.translate(6,10)
ctx.fillStyle = "#cb4948"
//ctx.arc(180,70,10,2*Math.PI,false);
ctx.moveTo(190,90);
ctx.quadraticCurveTo(200,102.5,190,115)
ctx.moveTo(190,90);
ctx.quadraticCurveTo(180,102.5,190,115)
ctx.fill()
ctx.closePath();

ctx.beginPath();

ctx.arc(222,35,5,2*Math.PI,false);

var gradX = ctx.createRadialGradient(222,35,5,232,30,5);	//确定渐变的范围跟方向
			
	gradX.addColorStop(0, "#DE86AD");		//添加渐变色
	gradX.addColorStop(1, "#CB729B");	
	ctx.fillStyle = gradX;
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#F39249"
ctx.arc(66,76,3,2*Math.PI,false);
ctx.fill();
ctx.closePath();



ctx.beginPath();
ctx.fillStyle = "#9A6AAA"
ctx.arc(90,99,6,2*Math.PI,false);
ctx.fill();
ctx.closePath();

ctx.beginPath();
//ctx.fillStyle = "#8AAADA"
ctx.arc(234,131,9,2*Math.PI,false);
var gradL = ctx.createRadialGradient(234,131,2,234,131,8);	//确定渐变的范围跟方向
			
			gradL.addColorStop(0, "#8aaada");		//添加渐变色
			gradL.addColorStop(1, "#6a92c3");	
			
			
ctx.fillStyle = gradL;	//把图形的fillStyle赋值成渐变
ctx.fill();
ctx.closePath();



ctx.beginPath();
ctx.fillStyle = "#e99f39"
ctx.moveTo(55,150);
ctx.lineTo(70,165);
ctx.lineTo(55,180);
ctx.lineTo(105,180);
ctx.lineTo(105,150);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.translate(2,0)
ctx.fillStyle = "#f6c240"
ctx.moveTo(55,150);
ctx.lineTo(70,165);
ctx.lineTo(55,180);
ctx.lineTo(105,180);
ctx.lineTo(105,150);
ctx.fill();
ctx.closePath();



ctx.beginPath();
ctx.fillStyle = "#e99f39";
ctx.moveTo(205,150);
ctx.lineTo(255,150);
ctx.lineTo(245,165);
ctx.lineTo(260,180);
ctx.lineTo(205,180);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#f6c240";
ctx.translate(-2,0)
ctx.moveTo(205,150);
ctx.lineTo(255,150);
ctx.lineTo(245,165);
ctx.lineTo(260,180);
ctx.lineTo(205,180);
ctx.fill();
ctx.closePath();



ctx.beginPath();
ctx.translate(0,-5)
ctx.fillStyle = "#f7c341"
ctx.strokeStyle="#ea9a3e"
ctx.moveTo(85,140);
ctx.quadraticCurveTo(155,130,230,140)
ctx.lineTo(230,170)
ctx.quadraticCurveTo(200,160,85,170)
ctx.stroke()
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#ffdc53"
ctx.moveTo(85,140);
ctx.quadraticCurveTo(155,130,230,140)
ctx.lineTo(230,170)
ctx.quadraticCurveTo(200,160,85,170)
ctx.fill();
ctx.closePath();

ctx.beginPath();
//ctx.scale(0.5)
ctx.translate(-10,30)
ctx.fillStyle = "#ffdc53"
ctx.moveTo(30,30);
ctx.lineTo(32,20);
ctx.lineTo(34,30);
ctx.lineTo(44,32);
ctx.lineTo(34,34);
ctx.lineTo(32,44);
ctx.lineTo(30,34);
ctx.lineTo(20,32);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.translate(20,90)
ctx.fillStyle = "#ffdc53"
ctx.moveTo(30,30);
ctx.lineTo(32,20);
ctx.lineTo(34,30);
ctx.lineTo(44,32);
ctx.lineTo(34,34);
ctx.lineTo(32,44);
ctx.lineTo(30,34);
ctx.lineTo(20,32);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.translate(220,-120)
ctx.fillStyle = "#ffdc53"
ctx.moveTo(30,30);
ctx.lineTo(32,20);
ctx.lineTo(34,30);
ctx.lineTo(44,32);
ctx.lineTo(34,34);
ctx.lineTo(32,44);
ctx.lineTo(30,34);
ctx.lineTo(20,32);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.translate(-10,70)
ctx.fillStyle = "#ffdc53"
ctx.moveTo(30,30);
ctx.lineTo(32,20);
ctx.lineTo(34,30);
ctx.lineTo(44,32);
ctx.lineTo(34,34);
ctx.lineTo(32,44);
ctx.lineTo(30,34);
ctx.lineTo(20,32);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.translate(10,0)
ctx.fillStyle = "#7aa721"
ctx.moveTo(-120,130);
ctx.lineTo(-20,130);
ctx.arcTo(0,130,0,150,20);
ctx.arcTo(0,170,-20,170,20);
ctx.lineTo(-120,170);
ctx.arcTo(-140,170,-140,150,20);
ctx.arcTo(-140,130,-120,130,20);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.translate(0,-5)
ctx.fillStyle = "#96c334"
ctx.moveTo(-120,130);
ctx.lineTo(-20,130);
ctx.arcTo(0,130,0,150,20);
ctx.arcTo(0,170,-20,170,20);
ctx.lineTo(-120,170);
ctx.arcTo(-140,170,-140,150,20);
ctx.arcTo(-140,130,-120,130,20);
ctx.fill();
ctx.closePath();