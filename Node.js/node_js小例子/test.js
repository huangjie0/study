const test = require('../HJTest/index');
//格式化时间的功能
// const dtStr = test.dateFormat(new Date());
// console.log(dtStr);
//测试html转义
const htmlStr = '<h1>首页</h1>'
const result = test.htmlEscape(htmlStr);
console.log(result);