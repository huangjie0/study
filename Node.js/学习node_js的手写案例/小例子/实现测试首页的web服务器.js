//导入http模块
const http = require('http');
//导入path模块
const path = require('path');
//导入fs模块
const fs=require('fs');

//创建web服务器实例化对象
const server = http.createServer();
//给服务器绑定监听事件
server.on('request',function(req,res){
    //获取客户端的url地址
    const url = req.url;
    //把本地请求的url地址映射到本地存放路径
    const fpath = path.join(__dirname,url);
    //根据映射来读取文件
    fs.readFile(fpath,'utf-8',function(err,dataStr){
        if(err){
            return res.end("404 Not found");
        }
        res.end(dataStr);
    })
})
//启动服务器，运行在80端口
server.listen(80,function(){
    console.log("server listen at http://127.0.0.1")
})