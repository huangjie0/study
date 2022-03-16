//实现步骤
//导入http模块
const http = require('http');
//导入fs模块
const fs=require('fs');
//导入path模块
const path = require('path');
//创建基本的web服务器  
const server = http.createServer();
//监听web服务器的request事件
server.on('request',(req,res)=>{
    const url = req.url;
    const fpath=path.join(__dirname,url);
    fs.readFile(fpath,'utf-8',(err,dataStr)=>{
        if(err) return res.end('读取失败'+err)
        res.end('读取成功'+dataStr);
    })
    res.setHeader('Content-Type','text/html;charset=utf-8');
})
//启动服务器
server.listen(80,()=>{
    console.log('server running at http://127.0.0.1')
})