//模块作用域防止全局变量污染
// const username="张三";
// function sayhello(){
//     console.log("你好!")
// }
//在自定义中使用module.exports对象
//挂载对象
module.exports.username="张三"
module.exports.sayhello=function(){
    console.log("hello");
}
const age=20;
module.exports.age=age;
//使用module.exports指向一个全新的对象
module.exports={
    nickname :'小黑',
    age:20,
    sayhi(){
        console.log("say hi")
    }
}

