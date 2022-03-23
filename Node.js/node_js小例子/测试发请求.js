//导入模块
const express = require('express');
const cors = require('cors'); 
const bodyParser = require('body-parser');
const Jwt = require('jsonwebtoken');
const session = require('express-session');
const mysql = require('mysql');
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
const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'test'
});
//定义sql语句
const sql = 'select username,password from users'
db.query(sql,(err,result)=>{
    if(err)return console.log(err.message);
    result.forEach((item)=>{
        console.log(item);
    })
})
//指定加密的密钥
const secretKey = 'huangjiehh';
//注册将jwt字符串解析还原成json对象中间件
app.use(session({secret:secretKey}));
//注册使用全局错误处理的中间件，捕获jwt失败的错误
app.use((err,req,res,next)=>{
    if(err.name=='UnauthorizeError'){
        return res.send({
            status:401,
            message:'无效的token'
        })
    }
    res.send({
        status:500,
        message:'未知的错误'
    })
})
//创建路由
app.post('/testget',(req,res)=>{
    var query = req.query
    var userName = query.userName
    var userPwd = query.userPwd
    if(userName=='huangjie'&&userPwd=='12345678'){ 
        //在登录成功之后，调用jwt.sign（）方法生成jwt字符串，并通过token属性发送客户端
        const tokenStr = Jwt.sign({
            username:userName,
        },secretKey,{expiresIn:'30s'})
        res.send({status:0,msg:'登录成功',token:tokenStr});
    }else{
        res.send({status:1,msg:'登录失败'});
    };
})
//开启服务器
app.listen(8000,()=>{
    console.log('服务器已经启动了，8000端口监听中.....')
});


