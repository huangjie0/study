//定义格式化时间方法
//编写格式化时间的函数
function zero(n){
    return n>9?n:'0'+n
}
function dataFormat(daStr){
    const dt = new Date(daStr);
    //获取年份信息
    const year = dt.getFullYear();
    //获取月份信息
    const month = zero(dt.getMonth()+1);
    //获取日的信息
    const day = zero(dt.getDate());
    //获取时
    const hour = zero(dt.getHours());
    //获取分
    const minutes = zero(dt.getMinutes());
    //获取秒
    const second=zero(dt.getSeconds()); 
    //返回值
    return `${year}-${month}-${day} ${hour}:${minutes}:${second}`
}

module.exports={
    dataFormat
}