//path路径模块
//导入path模块,处理路径模块
const path = require('path')
const fs = require('fs');
// path.join()将多个路径拼接为完整路径字符串
// const pathStr = path.join('a/','b/c','../','./d');
// console.log(pathStr);
// const pathStr2 = path.join(__dirname+'/a');
//__dirname为文件当前处在的目录
// console.log(pathStr2);
// fs.readFile(path.join(__dirname,'/File/2.txt'),'utf-8',(err,dataStr)=>{
//     if(err){
//         console.log('文件读取失败'+err.message)
//     }
//     console.log('文件读取成功'+dataStr);
// })
//path.basename()打印出完整文件名
const fpath = 'a/b/c/index.html'
// const fullName = path.basename(fpath);
// console.log(fullName);
//第二个参数将拓展名移出掉
// const name = path.basename(fpath,'.html');
// console.log(name);
//获取路径文件中扩展名方法
const name = path.extname(fpath);
console.log(name);


