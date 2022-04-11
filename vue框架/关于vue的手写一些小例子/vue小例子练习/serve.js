const express = require('express');
const app = express()

app.use((req,res,next)=>{
    console.log('有人请求服务器1了');
    next()
})
app.get('/student',(req,res)=>{
    const student=[
        {id:'001',name:'tom',age:18},
        {id:'002',name:'jerry',age:19},
        {id:'001',name:'tony',age:120},
    ]
    res.send(student)
})
app.listen(5000,(err)=>{
    if(!err)console.log('服务器1启动成功，请求学生信息地址为:http://localhost:5000/student')
})