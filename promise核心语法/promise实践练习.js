//导入fs模块
const fs = require('fs');
const pth = require('path');
//利用fs进行读取文件
// fs.readFile(pth.join(__dirname,'./1.txt'),'utf-8',(err,dataStr)=>{
//     if(err){
//         throw err
//     }
//     console.log('成功'+dataStr.toString());
// })
const p = new Promise((resolve,reject)=>{
    fs.readFile(pth.join(__dirname,'./1.txt'),'utf-8',(err,dataStr)=>{
        if(err){
            reject(err);
        };
        resolve(dataStr);
    })
})
p.then((dataStr)=>{
    console.log('成功了'+dataStr.toString());
})
p.catch((err)=>{
    console.log('失败了'+err.toString());
});
