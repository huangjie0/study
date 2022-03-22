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
// db.query('select 1',(err,result)=>{
//     if(err) return console.log(err.message);
//     console.log(result); 
// });
//查询sql语句,如果执行select语句,得到的是数组。
// 定义sql语句
// const sql = 'select * from users';
// db.query(sql,(err,result)=>{
//     if(err)return err.message
//     console.log(result);
// });
//插入数据对象
// const user={username:'xiaoming',password:'30303030'};
// const sql = 'insert into users (username,password) values (?,?)'
// db.query(sql,[user.username,user.password],(err,result)=>{
//     if(err)return console.log(err.message);
//     if(result.affectRows===1){
//         console.log('插入成功');
//     }
// })
//删除数据
// const sql = "DELETE FROM users WHERE username = 'xiaoming'"
// db.query(sql,(err,result)=>{
//     if(err)return console.log(err.message)
//     console.log(result);
// })

