//获取所有要操作的标签
var ul = document.querySelector('.ul');
var ol =document.querySelector('ol');
var box = document.querySelector('.box')

//封装运动函数
var i=1;
function move(){
    i++;
    ul.style.transform = "translateX(" + (-600*(i-1)) + "px)";
    if(i==6){
        i=2;
        ul.style.transform = "translateX(" + (600*(i-3)) + "px)";
    }
    for(var j=0;j<ol.children.length;j++){
        ol.children[j].classList.remove('active')
    }
    ol.children[i-2].classList.add('active');
}
//定时器函数封装
var move1 = setInterval(function(){
    move()
},2000);
//鼠标移入移出事件
box.onmouseover=function(){
    clearInterval(move1);
};
box.onmouseout=function(){
    move1 = setInterval(function(){
        move();
    },2000)
}

//点击事件
box.addEventListener('click',function(e){
    e=e||window.event;
    var target = e.target || e.srcElement;
    if(target.className=='left'){
        ul.style.transform = "translateX(" + (-600*(i-1)) + "px)";
        i--;
        if(i==0){
            i=4;
            ul.style.transform = "translateX(" + (-2400) + "px)";
        }
        for(var j=0;j<ol.children.length;j++){
            ol.children[j].classList.remove('active')
        }
        ol.children[i-1].classList.add('active');
    }
})
box.addEventListener('click',function(e){
    e=e||window.event;
    var target = e.target || e.srcElement;
    if(target.className=='right'){
        ul.style.transform = "translateX(" + (-600*i) + "px)";
        i++;
        if(i==6){
            i=2;
            ul.style.transform = "translateX(" + (-600*(i-1)) + "px)";
        }
        for(var j=0;j<ol.children.length;j++){
            ol.children[j].classList.remove('active')
        }
        ol.children[i-2].classList.add('active');
    }
})
ol.addEventListener('click',function(e){
    e=e||window.event;
    var target = e.target||e.srcElement;
    if(target.className='one'){
        var one = target.getAttribute('data-num');
        ul.style.transform = "translateX(" + (-600*(one-0)+1) + "px)"; 
        for(var j=0;j<ol.children.length;j++){
            ol.children[j].classList.remove('active')
        }
        ol.children[one-1].classList.add('active');
    }
    if(target.className=='two'){
        var two = target.getAttribute('data-num');
        ul.style.transform = "translateX(" + (-600*(two-0)+1) + "px)";
        for(var j=0;j<ol.children.length;j++){
            ol.children[j].classList.remove('active')
        }
        ol.children[two-1].classList.add('active');


    }
    if(target.className=='three'){
        var three = target.getAttribute('data-num');
        ul.style.transform = "translateX(" + (-600*(three-0)+2) + "px)"; 
        for(var j=0;j<ol.children.length;j++){
            ol.children[j].classList.remove('active')
        }
        ol.children[three-1].classList.add('active');

    }
    if(target.className=='four'){
        var four = target.getAttribute('four');
        ul.style.transform = "translateX(" + (-600*(four-0)+3) + "px)"; 
        for(var j=0;j<ol.children.length;j++){
            ol.children[j].classList.remove('active')
        }
        ol.children[four-1].classList.add('active');
    }
})



















