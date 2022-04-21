const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

const views = require('koa-views')
const co = require('co')
const convert = require('koa-convert')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const debug = require('debug')('koa2:server')
const path = require('path')
const cors = require('koa-cors')
const cookie = require('koa-cookie');
//路由使用cookie
router.use(cookie.default())

const config = require('./config')
const routes = require('./routes')

const port = process.env.PORT || config.port

// error handler
onerror(app)

// middlewares
app.use(bodyparser())
  .use(json())
  .use(logger())
  .use(require('koa-static')(__dirname + '/public'))
  .use(views(path.join(__dirname, '/views'), {
    options: {settings: {views: path.join(__dirname, 'views')}},
    map: {'njk': 'nunjucks'},
    extension: 'njk'
  }))
  .use(router.routes())
  .use(router.allowedMethods())
  .use(cors())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - $ms`)
})

router.get('/', async (ctx, next) => {
  // ctx.body = 'Hello World'
  ctx.state = {
    title: 'Koa2'
  }
  await ctx.render('index', ctx.state)
})
// * 用户名重名检测
function checkNameDup(name){
  const nameArray = ['lucy','tomy','isen','lily'];
  return nameArray.indexOf(name)>-1
}
// * 用户名正则检测
function checkName(name){
  const reg = /^[a-zA-Z0-9_-]{4,16}$/
  return reg.test(name);
}
//nameRegist页面处理路由
router.get('/nameRegist',async(ctx,next)=>{
  //获取用户输入的名字
  const {name} = ctx.request.query
  let data = {
    status : true
  }
  // // * 后端验证
  // // * 用户名正则检测
  // if(checkName(name)){
  //     // * 用户名不重名
  //     if(!checkNameDup(name)){
  //       data.status = true;
  //       data.message='用户名符合要求';
  //     }else{
  //       data.status = false;
  //       data.message = '用户名重名';
  //     }
  // }else{
  //   // * 用户名不符合要求
  //   data.status = false;
  //   data.message = '用户名不符合要求';
  // }
  
  ctx.response.body = data;
  //渲染页面
  await ctx.render('regist')
})
router.get('/passwordRegist',async(ctx,next)=>{
  await ctx.render('passwordRegist')
})





routes(router)
app.on('error', function(err, ctx) {
  console.log(err)
  logger.error('server error', err, ctx)
})

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})
