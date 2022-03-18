//创建导入模块
const express = require('express');
//创建web服务器实例化对象
const app = express();
//启动服务器
app.get('/user',function(req,res){
    //调用express方法向客户端响应一个json对象
    res.send({name:'zs',age:20,gender:'男'})
})
app.post('/user',function(req,res){
    res.send('请求成功');
})
app.get('/',(req,res)=>{
    //通过req.query方法可以获取到客户端发送过来的查询参数
    //默认是空对象
    res.send(req.query);
})
app.get('/user/:id',(req,res)=>{
    //req.params是动态匹配的url参数，默认是空对象
    console.log(req.params);
    res.send(req.params);
})
//启动web服务器
app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})