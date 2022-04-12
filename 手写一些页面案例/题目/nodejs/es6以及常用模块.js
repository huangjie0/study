//导入fs模块
const fs = require('fs')
//同时写入文件
fs.writeFile('./File/1.txt','第一个文件',(err)=>{
    if(err){
        return console.log('写入失败'+err)
    }
    console.log('写入成功');
    fs.writeFile('./File/2.txt','第二个文件',(err)=>{
        if(err){
            return console.log('写入失败'+err);
        }
        console.log('再次写入成功')
    })
})
//同时读取两个文件
fs.readFile('./File/1.txt','utf-8',(err,dataStr1)=>{
    if(err){
        return console.log('读取失败'+err);
    }
    console.log('读取成功');
    fs.readFile('./File/2.txt','utf-8',(err,dataStr2)=>{
        if(err){
            return console.log('读取失败'+err);
        }
        console.log('读取成功');
        let str=`${dataStr1.toString()}
${dataStr2.toString()}
        `
        fs.writeFile('./File/3.txt',str,(err)=>{
            if(err){
                return console.log('写入失败'+err)
            }
            console.log('success');
        })
    })
})
