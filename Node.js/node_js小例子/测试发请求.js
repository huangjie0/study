//导入模块
const express = require('express');
const cors = require('cors'); 
const bodyParser = require('body-parser');
// const mysql = require('mysql');
//创建服务器对象
const app = express();
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
//解决跨域问题
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method' )
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
    res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
    next()
});
//parser配置
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//创建数据库
//建立mysql与项目之间的联系
// const db = mysql.createPool({
//     host:'127.0.0.1',
//     user:'root',
//     password:'123456',
//     database:'test'
// });
//定义sql语句
// const sql = 'select username,password from users'
// db.query(sql,(err,result)=>{
//     if(err)return console.log(err.message);
//     result.forEach((item)=>{
//         var username = item.username;
//         var userpwd = item.password;
//     })
// })
//创建路由
app.post('/testget',(req,res)=>{
    var query = req.query
    var userName = query.userName;
    var userPwd = query.userPwd;
    if(userName!='huangjie'||userPwd!='123456'){
        return res.send({status:1,msg:'登录失败'})
    }
    res.send({status:0,msg:'登录成功'})
})
//开启服务器
app.listen(8000,()=>{
    console.log('服务器已经启动了，8000端口监听中.....')
});




