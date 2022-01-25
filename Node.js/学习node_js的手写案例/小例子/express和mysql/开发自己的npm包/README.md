## 安装
···
npm install huangjie
···

## 导入
···
const huangjie=require('huangjie')
···

## 格式化时间
···
const dateformat = huangjie.dateformat(new Date())
console.log(dateformat)
···
## 处理html特殊字符
···
htmlStr='<h1>这是h1标签</h1>'
const htmlStr = huangjie.htmlEscape(htmlStr)
console.log(htmlStr)
···

## 开源协议
ISC