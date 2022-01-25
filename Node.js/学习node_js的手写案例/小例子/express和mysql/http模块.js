//ip地址是每台电脑的唯一地址，通常使用点分十进制表示例如(192.168.1.1)
//域名和域名服务器以及端口号
//每个端口号不能被多个端口号端口号为80号可以被省略
//导入http模块创建web服务器
const http=require('http');
//实例化一个服务器
const server = http.createServer();
//给实例对象绑定事件用on方法,监听客户端的请求
server.on('request',function(req,res){
    console.log("someone visit our server");
})
//启动服务器
server.listen(80,function(){
    console.log("http serve running at http://127.0.0.1:80");
})




















