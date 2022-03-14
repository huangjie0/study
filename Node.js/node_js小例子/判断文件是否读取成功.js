const fs = require('fs')
fs.readFile('./File/1.txt','utf8',(err,dataStr)=>{
    if(err){
        return console.log('读取文件失败'+err);
    }
    console.log('读取文件成功'+dataStr)
})