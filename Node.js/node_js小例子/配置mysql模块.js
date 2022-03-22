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
//     if(result.affectedRows===1){
//         console.log('插入成功');
//     }
// })
//插入多条数据写法
// const user={username:'ll',password:'44444',
//             username:'pp',password:'99999',
//             username:'gg',password:'10121212',status:1,
//             username:'www',password:'886666',
//             username:'mmm',password:'303030'
//             }
// const sql = 'insert into users set ?'
// db.query(sql,user,(err,result)=>{
//     if(err)return console.log(err.message);
//     if(result.affectedRows===1){
//         console.log('插入成功');
//     }
// })
//删除数据
// const sql = "DELETE FROM users WHERE username = 'xiaoming'"
// db.query(sql,(err,result)=>{
//     if(err)return console.log(err.message)
//     console.log(result);
// })
//更新数据
const user = {password:'9',id:2};
const sql="update users set password=? where id=?"
db.query(sql,[user.password,user.id],(err,result)=>{
    if(err)return console.log(err.message)
    if(result.affectedRows===1){
        console.log('更新成功');
    }
})

