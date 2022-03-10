//获取左右按钮标签
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var ul = document.querySelector('.ul');
var ol =document.querySelector('ol');
var box = document.querySelector('.box')
//自动轮播
function move(){
    var i = 1;
    setInterval(function(){
        i++;
        ul.style.transform = "translateX(" + (-600*(i-1)) + "px)";
        if(i===5){
            i=1;
            ul.style.transform = "translateX(" + (600*(i-1)) + "px)";  
        }
        for(var j=0;j<ol.children.length;j++){
            ol.children[j].classList.remove('active');
        }
        ol.children[i-1].classList.add('active');
    },2000)
    box.addEventListener('click',function(e){
        e=e||window.event;
        var target = e.target||e.srcElement
        if(target.className=='left'){
            console.log("-------------")
        }
    })
    box.addEventListener('click',function(e){
        e=e||window.event;
        var target = e.target||e.srcElement
        if(target.className=='right'){
            console.log('-------------')
            
        }
    })
}
move();





