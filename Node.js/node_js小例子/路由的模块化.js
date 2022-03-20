//express不建议挂载在app身上
//导入express
const express = require('express');
//实例化对象
const app = express();
//导入路由模块
const router = require('./测试路由模块');
//注册模块
app.use(router);
//启动服务器
app.listen(80,()=>{
    console.log('http://127.0.0.1')
})