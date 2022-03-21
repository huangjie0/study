//导入模块
const express = require('express');
//创建路由对象
const router = express.Router();
//向路由上挂载post请求对象
router.post('/',(req,res)=>{
    const query = req.body;
    res.send({
        status:0,
        mag:'post请求成功',
        body:query
    })
});
//暴露模块
module.exports=router//导入路由模块
const router = require('./创建post路由模块');
