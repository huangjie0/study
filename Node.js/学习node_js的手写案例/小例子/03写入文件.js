//导入fs模块
const fs = require('fs');
//调用fs里面的readFile模块，写入文件内容
//参数1：表示文件存放路径,参数2写入的内容，参数3是回调函数,默认utf8格式
//如果写入成功打印null,如果文件写入失败，显示是一个错误对象。
fs.writeFile('./files/3.txt','jhjfhjfhjfdfjdjjh',function(err){
    console.log(err);
    if(err){
        return console.log("文件写入失败"+err.message);
    }else{
        return console.log('文件写入成功')
    }
})

