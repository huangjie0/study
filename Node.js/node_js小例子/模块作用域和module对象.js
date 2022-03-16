//module对象
const useName = '张三';
function hello(useName){
    console.log('你好'+useName);
}
//使用module.exports方法导出成员
module.exports={
    useName,
    hello()
}
