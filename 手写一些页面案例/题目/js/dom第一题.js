  //补零操作
  function zero(i){
    if(i<10){
        i ='0'+i
    }
    return i
}
function time_2(){
    const time=new Date();
    const year=time.getFullYear();
    const month=time.getMonth()+1;
    const day=time.getDate()
    const hour=zero(time.getHours())
    const minutes=zero(time.getMinutes())
    const seconds=zero(time.getSeconds())
    const weeks='天一二三四五六'
    const week=time.getDay()
    const week_1=weeks[week];
    return year+'年'+month+'月'+day+'日'+'星期'+week_1+hour+'时'+minutes+'分'+seconds+'秒'
}
var box = document.getElementById('box')
setInterval(
    function(){
        box.innerText=time_2()
    },1000)