//导入模块
const express = require('express');
const parser = require('body-parser');
//创建实例化对象
const app = express();
//使用app.use来注册中间件在配置对象参数
app.use(parser.urlencoded({extended:false}));
//监听post请求
app.post('/user',(req,res)=>{
    console.log(req.body)
    res.send('ok');
})
//启动服务器
app.listen(80,()=>{
    console.log("http://127.0.0.1");
})