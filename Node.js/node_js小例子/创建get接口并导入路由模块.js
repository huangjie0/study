//导入模块
const express = require('express');
const router = require('./创建测试路由模块');
//创建实例化对象
const app = express()
//全局注册路由模块
app.use(router);
//启动服务器
app.listen(80,()=>{
    console.log('服务器已经启动成功啦,http://127.0.0.1');
}) 