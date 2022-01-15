//导入fs模块
const fs=require('fs');
//导入path模块
const path=require('path');
const { Script } = require('vm');
//正则表达式,匹配js文件
const regScript=/<script>[\s\S]*<\/script>/
const regHtml=/<!DOCTYPE html>[\s\S]*<\/html>/
fs.readFile(path.join(__dirname,'./home_page.html'),'utf8',function(err,dataStr){
    if(err){
        return console.log('读取失败'+err.message);
    }
    //拆解文件
    resolveScrip(dataStr);
    resolveHtml(dataStr);
})
//定义处理js方法
function resolveScrip(htmlStr){
    //使用正则提取内容
    const r1 = regScript.exec(htmlStr);
      //将提取出来的script出来字符串，进行字符串的替换
    const newscript = r1[0].replace("<script>","").replace("</script>","");
    //调用fs.readfile方法将提取script放入js文件里面
    fs.writeFile(path.join(__dirname,'./home_page.js'),newscript,function(err,dataStr){
            if(err){
                return console.log("文件写入失败"+err.message);
            }
            console.log("写入成功"+dataStr);
    })
}
//处理html文件方法
function resolveHtml(htmlStr){
    const r2 = regHtml.exec(htmlStr);
    const newhtml=r2[0];
    fs.writeFile(path.join(__dirname,'./home.html'),newhtml,function(err,dataStr){
            if(err){
                return console.log("文件写入失败"+err.message);
            }console.log("文件写入成功"+dataStr);
    })
}
