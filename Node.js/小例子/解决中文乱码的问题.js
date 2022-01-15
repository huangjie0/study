const http = require('http');
const server = http.createServer();
server.on('request',function(req,res){
//发送字符串
const str = `您请求url地址是${req.url},请求的方式是${req.method}`;
//解决乱码
res.setHeader('Content-Type','text/html;charset=utf-8')
//将内容响应给客户端
res.end(str); 
});
server.listen(80,()=>{
    console.log("server running at http://127.0.0.1")
})
