//导入fs模块，来操作文件  
const fs = require('fs');
 
//调用fs中的readfile()方法读取文件
//参数1：读取文件的存放路径,参数2，读取文件的编码格式,默认是utf-8格式，一般默认utf8格式
//参数3：回调函数，拿到读取失败和成功的结果 err dataStr
fs.readFile('./files/1.txt','utf8',function(err,dataStr){
    //如果读取成功err的值为null
    console.log(err);//打印失败的结果
    console.log("------------")
    console.log(dataStr);//打印成功的结果
})