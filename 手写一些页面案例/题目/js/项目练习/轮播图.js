//获取左右按钮标签
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var box = document.querySelector('.box');

//每一张距离：600px
//给左右标签绑定事件
right.onclick=function(){
    var ul = document.querySelector('.ul');
    ul.style.transform = "translateX(" + (-600*i) + "px)";
    i++;
}
left.onclick = function(){
    console.log('你点击了我')
}
//1秒钟定期更换图片
var i = 0;
var move = setInterval(function(){
var ul = document.querySelector('.ul');
ul.style.transform = "translateX(" + (i*-600) + "px)";
i++;
if(i===6) {
    ul.style.transform = "translateX(" + (-600) + "px)";
    i=1;
}
},2000);


//鼠标悬停到图片图片停止
box.onmousemove=function(){
    clearInterval(move);
}
box.onmouseleave = function(){
    
}

