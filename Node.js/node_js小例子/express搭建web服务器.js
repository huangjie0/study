//基于http开发api接口开发
//创建基本的服务器
//导入express
const express = require('express');
//创建web服务器
const app = express();
//启动web服务器
app.listen(80,()=>{
    console.log('express server running at https://127.0.0.1');
})
