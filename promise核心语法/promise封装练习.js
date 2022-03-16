//导入fs模块
const fs = require('fs');

function minReadFile(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,'utf-8',(err,dataStr)=>{
            if(err){
                reject(err);
            }else{
                resolve(dataStr)
            }
        })
    });
}
minReadFile('./1.txt').then((dataStr)=>{
    console.log('文件读取成功'+dataStr.toString());
});
minReadFile('./1.txt').catch((err)=>{
    console.log('文件读取失败'+err.toString());
})