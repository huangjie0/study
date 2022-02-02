const http = require('http');
http.createServer((req,res)=>{
    console.log(req.url);
    //设置响应头200，类型是html字符集是utf8
    res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"});
    res.write("<head><meta charset='utf8'></head>");
    res.write('你好 node.js')
    res.end();//结束响应
}).listen(3000);
