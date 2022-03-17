//导入fs模块
const fs = require('fs');
//封装promise对象
function read_file(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./File/5.txt','utf-8',(err,dataStr1)=>{
            if(err){
                reject(err)
            }else{
                resolve(dataStr1);
            }
           
        })
    })
}
//封装第二个对象
// function read2_file(){
//     return new Promise((resolve,reject)=>{
//         fs.readFile('./File/6.txt','utf-8',(err,dataStr2)=>{
//             if(err){
//                 reject(err)
//             }
//             resolve(dataStr2);
//         })
//     })
// }
async function main(){
    await read_file()
}
main().then((data)=>{
    console.log(data)
})