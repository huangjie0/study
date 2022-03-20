//这是路由模块
//导入express
const express=require('express');
//创建路由对象
const router = express.Router();
//挂载路由
router.get('/',(req,res)=>{
    res.send('ok!');
})
router.post('/',(req,res)=>{
    res.send('ok>>>>>');
})
//导出路由对象
module.exports=router;