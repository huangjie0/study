//注意5个注意事项
// 代码自上而下顺序实现
// 1.一定在路由之前注册中间件
// 2.客户端发送过来的请求,可以连续调用多个中间件处理
// 3.执行中间业务代码之后,不要忘了调用next()函数
// 4.调用完next()之后不要写其他业务逻辑
// 5.连续调用多个中间件时,多个中间件,共享req和res对象
//中间件的分类--------------------------------------------
//应用级别中间件,路由中间件,错误级别的中间件,express内置的中间件,第三方的中间件
//应用级别的中间件
//导入模块
const express = require('express');
//创建实例对象
const app = express();
//应用级别中间件
app.get('/',(req,res)=>{
    console.log('get/')
    res.send('hello world');
})
app.post('/user',(req,res)=>{
    console.log('post/');
    res.send('你好世界');
})
//开启服务器
app.listen(80,()=>{
    console.log('http://127.0.0.1')
})

