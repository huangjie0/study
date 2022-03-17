//分别打印模块化对象
// console.log(exports);
// console.log(module.exports);
// console.log(exports===module.exports);
const username = '张三';
exports.username = username;
exports.age = 20;
exports.hello = function(){
    console.log('大家好')
}
module.exports={
    age:21,
    gender:'男',
    say:function(){
        console.log('hello world');
    }
}