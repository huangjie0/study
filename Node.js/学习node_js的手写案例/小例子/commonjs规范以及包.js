//在每个模块内，module变量代表当前模块，使用module.exports是对外接口
//加载某个模块，加载module,exports属性，require()方法用于加载模块
//包是第三方的包，node.js的包都是开源的，免费的。
//安装包------>npm install 包名

//使用moment对模块进行格式化
//导入moment模块
const moment = require('moment');
//格式化模板
const dt = moment().format('YYYY-MM-DD HH:m:ss');
console.log(dt);






