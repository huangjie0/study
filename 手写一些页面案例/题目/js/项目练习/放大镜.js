//开关，防止过多操作dom
var flag = false;
var div1 = document.querySelector('.box1');
var div = document.querySelector('.box');
div1.onmousedown = function(){
    flag = true
}
div1.onmouseup = function(){
    flag = false
}
//给父元素绑定委托事件
div.onmousemove = function(e){
    if(flag==false)return
    //事件兼容
    e = e||window.event

    var x = e.clientX-750
    var y = e.clientY-50

    if(x<=0)x= 0
    if(y<=0)y= 0
    //判断临界值是否过界
    if(x>=div.clientWidth-div1.offsetWidth){
        x = div.clientWidth-div1.offsetWidth
    } 
    if(y>=div.clientHeight-div1.offsetHeight){
        y=div.clientHeight-div1.offsetHeight
    }
    //动态绑定移动距离值
    div1.style.left = x + 'px'
    div1.style.top = y + 'px'
    var big_img = document.querySelector('.big_img');
    //获取并修改行内元素值
    big_img.style.left = -(2537*x)/634 +'px'
    big_img.style.top = -(2593*y)/648 +'px'
}