//导入模块
const express = require('express');
//创建服务器对象
const app = express();
//创建路由
app.get('./发请求测试.html',(req,res)=>{
    //设置响应体
    res.send('Hello ajax');
})
//解决跨域问题
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
//开启服务器
app.listen(8000,()=>{
    console.log('服务器已经启动了，8000端口监听中.....')
})




