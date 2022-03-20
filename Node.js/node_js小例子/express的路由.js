//客户端的请求和服务器处理函数之间的映射关系
// 最简单的语法
const express=require('express');
const app = express()
//挂载路由
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.post('/',(req,res)=>{
    res.send('post send')
})
app.listen(80,()=>{
    console.log('http://127.0.0.1')
})