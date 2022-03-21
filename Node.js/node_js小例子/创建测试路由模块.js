//导入模块
const express = require('express');
//创建路由
const router = express.Router()
//执行路由中的模块.....
router.get('/',(req,res)=>{
    console.log('get/');
    res.send('ok!');
});
//将路由模块导出
module.exports={
    router
}