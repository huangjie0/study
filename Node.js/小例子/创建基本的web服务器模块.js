const http = require('http');
const server = http.createServer();
server.on('request',function(req){
    //req是请求对象包含客户端相关数据
    const url = req.url
    //method是请求类型
    const method = req.method
    console.log(url);
    console.log(method);
})
server.listen(80,function(){
    console.log("server running at http://127.0.0.1")
})