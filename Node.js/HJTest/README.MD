## 安装
```
npm install HJTest
```

## 导入
```js
const HJTest = require('HJTest');
```

## 格式化时间
```js
//调用dateForm对时间进行格式化
const dtStr = HJTest.dateForm(new Date())
console.log(dtStr);
```

## 转义特殊字符和还原html的方法
```js
//转义特殊字符的方法
const htmlStr = '<h1>首页</h1>'
const result = test.htmlEscape(htmlStr);
console.log(result);
//编译html的方法
const Str = '&lt;h1&gt;首页&lt;/h1&gt;'
const str = test.StrEscape(Str);
console.log(str);
```

## 开源协议
ISC
