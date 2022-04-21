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
const _ = require('lodash');
const cors = require('koa-cors');

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
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods())

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
router.get('/userinfo',async(ctx)=>{
  const {username,password,age,gender}=ctx.request.query;
  console.log(password)
  let data={
    state:true,
    username:username,
    password:password,
    age:age-0,
    gender:gender,
    foods:[
        { 
          id:1,
          name:'food1',
          available:true
        },
        { 
          id:2,
          name:'food2',
          available:false
        },
        { 
          id:3,
          name:'food3',
          available:true
        },
        { 
          id:4,
          name:'food4',
          available:true
        }
      ]
  }
  ctx.state=data
await ctx.render('index',ctx.state)
})
// * 用户名检测
router.get('/checkName',(ctx)=>{
  const { username } = ctx.request.query;

  let data = {
    status : true
  }
  // * 先正则检测名字
  if(checkName(username)){
    // * 用户名重名
    if(checkNameDup(username)){
      data.status = false;
      data.message = '用户名重名';
    }
  }else{
    // * 如果正则检测不过
    data.status = false;
    data.message = '用户名不符合要求';
  }

  ctx.response.body = data;
})

// * 用户注册
router.post('/regist',(ctx)=>{
  const { username , password, age } = ctx.request.body;
  console.log('password: ', password);
  console.log('username: ', username);
  console.log('age',age)
  let data = {
    status : true
  }
//后端验证年龄
  if(age>120){
    data.status=false
    data.message='密码大于120岁了，不符合要求'
  }else{
    ctx.response.data
  }
  // * 后端验证
  // * 用户名正则检测
  if(checkName(username)){
      // * 用户名不重名
      if(!checkNameDup(username)){
        if(!checkPassword(password)){
          data.status = false;
          data.message = '密码不符合要求';
        }
      }else{
        data.status = false;
        data.message = '用户名重名';
      }
  }else{
    // * 用户名不符合要求
    data.status = false;
    data.message = '用户名不符合要求';
  }
  
  ctx.response.body = data;
});

// * 用户名正则检测
function checkName(name){
  const reg = /^[a-zA-Z0-9_-]{4,16}$/
  return reg.test(name);
}

// * 用户名重名检测
function checkNameDup(name){
  const nameArray = ['lucy','tomy','isen','lily'];
  return _.indexOf(nameArray,name) > - 1
}

// * 密码检测
function checkPassword(password){
  const reg = /^[a-zA-Z0-9_]{8,15}$/
  return reg.test(password);
}

routes(router)
app.on('error', function(err, ctx) {
  console.log(err)
  logger.error('server error', err, ctx)
})

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})
