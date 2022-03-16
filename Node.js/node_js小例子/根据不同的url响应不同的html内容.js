//导入http模块
const http = require('http');
//利用http模块创建服务器实例化对象
const server = http.createServer();
//设置请求的参数以及响应的结果
server.on('request',(req,res)=>{
    const url = req.url;
    let content = '<h1>404 Not found!</h1>';
    if(url=='/'||url=='/index.html'){
        content = '<h1>首页</h1>'
    }else if(url==='/about.html'){
        content='<h1>关于页面</h1>'
    }
    //设置响应头，防止乱码
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end(content);
})
//服务器监听的端口
server.listen(80,()=>{
    console.log('server running at http://127.0.0.1');
})