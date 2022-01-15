const path=require('path');
const fpath='/files/1.txt';
//文件的名称
// const fullname=path.basename(fpath);
// console.log(fullname);
//文件的扩展名
const fullname = path.extname(fpath);
console.log(fullname);
