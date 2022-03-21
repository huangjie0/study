//导入模块
const express = require('express');
//导入路由模块
const router = require('./创建post路由模块');
//创建实例化对象
const app = express();
//注册路由组件
app.use(router);
//启动服务器
app.listen(80,()=>{
    console.log('post请求的服务器已开启，http://127.0.0.1')
})