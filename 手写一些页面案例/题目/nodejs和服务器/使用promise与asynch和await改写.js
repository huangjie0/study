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
function readFile(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./File/4.txt','utf-8',(err,dataStr1)=>{
            if(err){
                reject(err)
            }
            resolve(dataStr1);
        })
    })
}
readFile().then((dataStr1)=>{
    console.log('读取成功'+dataStr1);
    return new Promise((resolve,reject)=>{
        fs.readFile('./File/5.txt','utf-8',(err,dataStr2)=>{
            if(err){
                reject()
            }
            resolve(dataStr2)
        })
    })
}).then((dataStr2)=>{
    console.log('读取成功'+dataStr2);
    return new Promise((resolve,reject)=>{
        let str = `${dataStr1}
${dataStr2}`
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
    console.log('读写失败'+err)
})



