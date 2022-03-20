//导入express模块
const express = require('express');
//创建实例化对象
const app = express();
//创建中间件
const mv = function(req,res,next){
    console.log('最简单的中间件');
    // 流转中间件
    next();
}
//开启服务器
app.listen(80,()=>{
    console.log('http://127.0.0.1');
})