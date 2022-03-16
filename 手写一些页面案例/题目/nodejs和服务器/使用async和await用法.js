//使用async和await实现
//导入fs模块
const fs = require('fs');
//封装返回是promise函数
function readFile(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./File/1.txt','utf8',(err,data)=>{
            if(err){
                reject(err);
            }
            resolve(data);
        })
    })
}
async function main(){
    await readFile()
}
main().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("读取失败"+err);
})





