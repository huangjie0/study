//导入express模块
const express = require('express');
//创建express实例
const app = express();
//注册全局中间件,中间件作用，多个中间件共享一个req,res，
// 基于这样的特征，我们可以在上游中间件，统一为res,req添加属性和方法，在上游添加下游访问
//定义第一个全局中间件
app.use(function(req,res,next){
    console.log('这是第一个中间件');
    next();
});
//定义第二个全局中间件
app.use(function(req,res,next){
    console.log('这是第二个中间件');
    next();
})
//定义第三个中间件全局中间件
app.use(function(req,res,next){
    console.log('这是第三个中间件');
    next();
});
//定义路由
app.get('/',(req,res)=>{
    res.send('hello world');
})
app.get('/user',(req,res)=>{
    res.send('hello world,你好世界');
})
//启动服务器
app.listen(80,()=>{
    console.log('http://127.0.0.1');
});
