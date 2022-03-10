//获取左右按钮标签
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var ul = document.querySelector('.ul');
var ol =document.querySelector('ol');
var box = document.querySelector('.box');
//封装轮播图函数
var i = 1;
function move(){
    i++;
    ul.style.transform = "translateX(" + (-600*(i-1)) + "px)";
    if(i===5){
        i=1;
        ul.style.transform = "translateX(" + (600*(i-1)) + "px)";  
    }
    for(var j=0;j<ol.children.length;j++){
        ol.children[j].classList.remove('active');
    }
    ol.children[i-2].classList.add('active');
}
//封装定时器函数
var move1 = setInterval(
    function(){
        move();
    },2000);
//点击按钮事件
function click (){
    box.addEventListener('click',function(e){
        e=e||window.event;
        var target = e.target||e.srcElement
        if(target.className=='left'){
            i--;
            ul.style.transform = "translateX(" + (-600*(i-1)) + "px)";
            if(i===0){
                i=4;
                ul.style.transform = "translateX(" + (600*i) + "px)";  
            }
            for(var j=0;j<ol.children.length;j++){
            ol.children[j].classList.remove('active');
            }
            ol.children[i-1].classList.add('active');
        }
        }
    )
    box.addEventListener('click',function(e){
    e=e||window.event;
    var target = e.target||e.srcElement
    if(target.className=='right'){
        ul.style.transform = "translateX(" + (-600*i) + "px)";
        i++;
        if(i===5){
            i=1;
            ul.style.transform = "translateX(" + (600*(i-1)) + "px)";  
        }
        for(var j=0;j<ol.children.length;j++){
            ol.children[j].classList.remove('active');
        }
        ol.children[i-1].classList.add('active');
    }
    })
}
click();
//鼠标移入移出事件
box.onmouseover=function(){
    clearInterval(move1);
};
box.onmouseout=function(){
    move1 = setInterval(function(){
        move();
    },2000)
}






















