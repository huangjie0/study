const fs=require('fs');
//导入path模块处理路径问题
//../会抵消上一层路径
const path = require('path');
fs.readFile(path.join(__dirname,'./1.txt'),'utf8',function(err,dataStr){
    if(err){
        return console.log('读取文件失败'+err.message);
    }
    console.log('读取文件成功');
});