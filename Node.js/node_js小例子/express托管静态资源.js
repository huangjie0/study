//导入express库
const express = require('express');
//实例化对象
const app = express();
//调用静态方法，快速对外提供静态资源
app.use(express.static('./File'));
//启动服务器
app.listen(80,()=>{
    console.log('服务器启动成功啦,端口号是http://127.0.0.1')
})