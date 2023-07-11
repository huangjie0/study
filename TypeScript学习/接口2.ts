//对属性，类，函数约束

// function getInfo(name:string):void{
//     console.log('hello Word');
// }
// getInfo('哈哈哈')
// 对json约束
interface info{
    name:string,
    age:number
}

// function getInfo(info:{name:string}):void{
//     console.log('hello Word');
// }
// getInfo({name:'张三'})
function getInfo(name:info){
    console.log(name.name);
    console.log(name.age);
}
function getInfo1(info2:info){
    console.log(info2.age);
    console.log(info2.name);
}
//必须包含
var info = {
    name:'你好',
    age:20,
    label:'hh'
}
getInfo(info)
getInfo1(info)
