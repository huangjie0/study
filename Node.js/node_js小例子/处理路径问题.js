//演示路径问题
const fs = require('fs');
fs.readFile('./File/3.txt','utf-8',(err,data)=>{
    if(err){
        console.log('路径读取失败'+err.message)
    }
    console.log('读取文件成功'+data);
})
//打印当前文件下的目录
// console.log(__dirname);
