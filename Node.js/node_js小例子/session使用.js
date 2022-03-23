//导入express模块
const express = require('express');
//创建express服务器实例

const app = express();

//配置session中间件
const session = require('express-session');
//注册session中间件
app.use(session({
    secret:'huangjie',
    resave:false,
    saveUninitialized:true,
}));

//托管静态页面
app.use(express.static('./File'));
//解析post提交过来的数据表单
app.use(express.urlencoded({extended:false}));


