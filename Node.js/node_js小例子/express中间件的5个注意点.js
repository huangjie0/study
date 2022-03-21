//注意5个注意事项
// 代码自上而下顺序实现
// 1.一定在路由之前注册中间件
// 2.客户端发送过来的请求,可以连续调用多个中间件处理
// 3.执行中间业务代码之后,不要忘了调用next()函数
// 4.调用完next()之后不要写其他业务逻辑
// 5.连续调用多个中间件时,多个中间件,共享req和res对象
//中间件的分类--------------------------------------------
//应用级别中间件,路由中间件,错误级别的中间件,express内置的中间件,第三方的中间件
//应用级别的中间件
//导入模块
// const express = require('express');
// //创建实例对象
// const app = express();
// //应用级别中间件
// app.get('/',(req,res)=>{
//     console.log('get/')
//     res.send('hello world');
// })
// app.post('/user',(req,res)=>{
//     console.log('post/');
//     res.send('你好世界');
// });
// //开启服务器
// app.listen(80,()=>{
//     console.log('http://127.0.0.1');
// })

// //路由中间件,绑定在router实例上
// //导入模块
// const express = require('express')
// //创建实例对象
// const app = express()
// //创建路由对象
// const router = express.Router()
// //路由的中间件
// router.use(function(req,res,next){
//     console.log('time',Date.now())
//     next();
// })
// //使用app注册路由中间件
// app.use('/',router);

// 错误级别的中间件,定义错误级别的中间,防止程序在崩溃时的中间件(err,req,res.next)
//导入模块
// const express = require('express');
// //创建实例对象
// const app = express();
// //人为抛出错误
// app.get('/',(req,res)=>{
//     throw new Error('我是人为制造的错误');
//     //由于人为制作的错误,后面的代码就不会执行;
//     res.send('人为制造的错误');
// });
// //定义错误级别的中间件
// app.use(function(err,req,res,next){
//     //打印错误信息
//     console.log('发生了错误'+err.message);
//     // 向客户端响应错误对象
//     res.send('Error!'+ err.message);
// });
// //启动服务器
// app.listen(80,()=>{
//     console.log('http://127.0.0.1');
// });

//内置中间件,内置中间件,express.static快速托管静态资源内置中间件,express.json中间件解析json格式请求数据,有兼容性
//express.urlencoded解析url-encoded格式的请求体数据
//导入模块
const express = require('express');
//创建实例化对象
const app = express();
//配置json中间件解析json表单数据
app.use(express.json());
//解析url-encoded格式的数据
app.use(express.urlencoded({extended:false}));
//get请求
app.post('/user',(req,res)=>{
    //打印body里面的参数
    //默认情况不配置解析表单数据中间件,等于undefined;
    console.log(req.body);
    res.send('ok');
});
//开启服务器
app.listen(80,()=>{
    console.log('http://127.0.0.1')
});