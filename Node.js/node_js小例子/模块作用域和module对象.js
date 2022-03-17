//向module.exports对象上挂载属性和方法
//使用module.exports永远指向是对象为准
// const age = 20;
// module.exports.userName='张三';
// module.exports.hello=function(){
//     console.log('你好世界');
// }
// module.exports.age=age;
// module.exports指向全新的对象
module.exports={
    username:'张三',
    hello(){
        console.log('你好世界');
    }
}
