//导入模块
const express = require('express');
const cors = require('cors');
const router = require('./创建测试路由模块');
//创建实例化对象
const app = express();
//配置解析表单数据的中间件
app.use(express.urlencoded({extended:false}));
//一定在路由之前配置中间件
app.use(cors());
//注册路由模块
app.use(router);
//开启服务器
app.listen(80,()=>{
    console.log('跨域服务器已经启动，http://127.0.0.1')
})