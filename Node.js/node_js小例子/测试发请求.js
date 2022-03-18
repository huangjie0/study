//导入模块
const express = require('express');
//创建服务器对象
const app = express();
//创建路由
app.get('./发请求测试.html',(req,res)=>{
    //设置响应头，设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    res.send('Hello ajax');
})
//开启服务器
app.listen(8000,()=>{
    console.log('服务器已经启动了，8000端口监听中.....')
})