//使用async和await实现
//导入fs模块
const fs = require('fs');
//封装返回是promise函数
function readFile(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./File/4.txt','utf-8',(err,dataStr)=>{
            if(err){
                reject(err);
            }
            resolve(dataStr);
        })
    })
}
async function main(){
    await readFile();
}
main().then((dataStr)=>{
    console.log('读取成功'+dataStr);
}).catch((err)=>{
    console.log('读取失败'+err);
})