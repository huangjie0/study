//不使用app.use方法使用
// 导入模块
const express = require('express');
//创建服务器的实例
const app = express();
//创建中间件
const mw1 = function(req,res,next){
    console.log('调用了全局中间件1');
    //流转到下一个中间件
    next();
}
//创建中间件2
const mw2 =  function(req,res,next){
    console.log("这是局部中间件2");
    //流转下一个中间件
    next();
}
//局部中间件，将局部中间插入到里面。
app.get('/',[mw1,mw2],(req,res)=>{
    console.log('get/');
    res.send('hello world');
})
app.get('/user',(req,res)=>{
    console.log('get/');
    res.send('hello world');
})
//开启服务器··
app.listen(80,()=>{
    console.log('http://127.0.0.1')
});