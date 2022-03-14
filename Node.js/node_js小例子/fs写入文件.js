//fs.writeFile(file,内容,callback)
//导入文件模块
const fs = require('fs');
//写入文件
fs.writeFile('./File/2.txt','abcd',(err)=>{
    //如果文件写入成功为null
    console.log(err);
});