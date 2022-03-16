//导入util模块
const util = require('util');
//导入fs模块
const fs = require('fs');

let myUtil = util.promisify(fs.readFile);
//返回一个新的函数
myUtil('./1.txt').then((dataStr)=>{
    console.log('读取成功'+dataStr.toString());
})