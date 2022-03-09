//获取左右按钮标签
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var box = document.querySelector('.box');

//每一张距离：600px
//给左右标签绑定事件
right.onclick=function(){
    i++;
    var ul = document.querySelector('.ul');
    ul.style.transform = "translateX(" + (-600*i) + "px)";
    if(i===5){
        ul.style.transform = "translateX(" + (-600) + "px)";
        i=1;
    }
}
left.onclick = function(){
    i--;
    var ul = document.querySelector('.ul');
    ul.style.transform = "translateX(" + (-600*i) + "px)";
    if(i==1){
        ul.style.transform = "translateX(" + (-600) + "px)";
        i=5;
    }
}
//1秒钟定期更换图片
var i = 0;
var move = setInterval(function(){
    var ul = document.querySelector('.ul');
    ul.style.transform = "translateX(" + (i*-600) + "px)";
    i++;
    if(i===6) {
    ul.style.transform = "translateX(" + (-600) + "px)";
    i=1;}
},1000);
//鼠标悬停到图片图片停止
// box.onmouseover=function(){
//     clearInterval(move);
// }
// box.onmouseout = function(){
//     setInterval(function(){
//         var ul = document.querySelector('.ul');
//         ul.style.transform = "translateX(" + (i*-600) + "px)";
//         i++;
//         if(i===6) {
//         ul.style.transform = "translateX(" + (-600) + "px)";
//         i=1;}
//     },1000);
   
// }

