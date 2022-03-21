//导入模块
const express = require('express');
//创建路由
const router = express.Router()
//执行路由中的模块.....
router.get('/',(req,res)=>{
    const query = req.query;
    //调用res,send（）方法，把数据响应给客户
    res.send({
        status:0,//0表示处理成功，1处理失败
        msg:'Get请求成功',
        data:query
    })
});
router.post('/',(req,res)=>{
    const body = req.body;
    res.send({
        status:0,
        msg:'Post请求成功',
        data:body
    })
})
//将路由模块导出
module.exports=router;