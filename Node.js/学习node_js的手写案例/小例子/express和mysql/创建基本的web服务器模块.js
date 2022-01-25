const http = require('http');
const server = http.createServer();
server.on('request',function(req,res){
    //req是请求对象包含客户端相关数据
    const url = req.url
    //method是请求类型
    const method = req.method
    const str=`Your request url is ${url},and request method is ${method}`
    console.log(str);
    //调用res.end（）方法
    res.end(str);
})
server.listen(80,function(){
    console.log("server running at http://127.0.0.1")
})