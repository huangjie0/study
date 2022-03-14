//导入fs模块
const fs = require('fs');
//使用写入的方法
fs.writeFile('./File/3.txt','fffffff',(err)=>{
    if(err){
        return console.log('文件写入失败'+err);
    }
    console.log('文件写入成功');
})