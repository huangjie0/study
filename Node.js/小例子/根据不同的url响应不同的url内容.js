const http = require('http');
const server = http.createServer();
server.on('request',function(req,res){
    let content='<h1>404 Not found</h1>';
    const url=req.url;
    if(url==='/'||url==='/小例子/home_page.html'){
        content='<h1>首页</h1>'
    }else if(url==='/小例子/home.html'){
        content='<h1>home页面</h1>'
    }
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end(content);
})
server.listen(80,function(){
    console.log("Server running at http://127.0.0.1")
})