//导入fs模块
const fs = require('fs');
//封装promise函数
function write_Promise(){
    return new Promise((resolve,reject)=>{
        fs.writeFile('./File/4.txt','第三次写入文件',(err)=>{
            if(err){
                reject(err);
            }else{
                resolve();
            } 
        })
    })
}
//使用promise实现异步读写
write_Promise().then(()=>{
    console.log('写入成功');
    return new Promise((resolve,reject)=>{
        fs.writeFile('./File/5.txt','第四次写入文件',(err)=>{
            if(err){
                reject(err);
            }else{
                resolve();
            } 
        })
    })
}).then(()=>{
    console.log('再次写入成功');
}).catch((err)=>{
    console.log('写入失败'+err);
})

//使用promise实现读并且重新写入文件
function read_1(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./File/4.txt','utf-8',(err,dataStr)=>{
            if(err){
                reject(err)
            }
            resolve(dataStr);
        })
    })
}
function read_2(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./File/5.txt','utf-8',(err,dataStr1)=>{
            if(err){
                reject(err)
            }
            resolve(dataStr1);
        })
    })
}
let str = ``
read_1().then((dataStr)=>{
    str+=dataStr;
    return read_2()
}).then((dataStr1)=>{
    str=str+'\n'+dataStr1;
    return new Promise((resolve,reject)=>{
        fs.writeFile('./File/6.txt',str.toString(),(err)=>{
            if(err){
                reject(err)
            }
            resolve()
        })
    })
}).then(()=>{
    console.log('success')
}).catch((err)=>{
    console.log('写入失败'+err);
})