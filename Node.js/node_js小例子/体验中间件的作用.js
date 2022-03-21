//导入模块
const express = require('express');
//创建实例化对象
const app = express();
//创建注册中间件
app.use(function(req,res,next){
    //获取到服务器到达的时间
    const time = Date.now();
    next();
})
app.get('/',(req,res)=>{
    console.log('这是get/');
    res.send('hello world');
})
app.get('/user',(req,res)=>{
    console.log('这是get/user');
    res.send('你好世界');
})
//启动服务器
app.listen(80,()=>{
    console.log('服务器启动成功，http://127.0.0.1')
});