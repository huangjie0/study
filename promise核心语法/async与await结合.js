//导入fs模块
const fs = require('fs');
//导入util
const util_1 = require('util');
//利用util进行包装
const myUtil = util_1.promisify(fs.readFile);

async function main(){
    try{
        console.log(await (await myUtil('./1.txt')).toString())
    }catch(e){
        console.log(e);
    }
}
main();