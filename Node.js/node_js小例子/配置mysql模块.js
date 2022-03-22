//导入mysql模块
const mysql = require('mysql');
//建立mysql与项目之间的联系
const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'test'
});
//测试是否配置成功；
db.query('select 1',(err,result)=>{
    if(err) return console.log(err.message);
    console.log(result); 
});
