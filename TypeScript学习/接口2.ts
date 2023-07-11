//对属性，类，函数约束

// function getInfo(name:string):void{
//     console.log('hello Word');
// }
// getInfo('哈哈哈')
// 对json约束
// interface info{
//     name:string,
//     age:number
// }

// function getInfo(info:{name:string}):void{
//     console.log('hello Word');
// }
// getInfo({name:'张三'})
// function getInfo(name:info){
//     console.log(name.name);
//     console.log(name.age);
// }
// function getInfo1(info2:info){
//     console.log(info2.age);
//     console.log(info2.name);
// }
//必须包含
// var info = {
//     name:'你好',
//     age:20,
//     label:'hh'
// }
// getInfo(info)
// getInfo1(info)

//接口可选属性
// interface info{
//     firstName:string;
//     lastName?:string
// }
// function getName(name:info){
//     console.log(name);
// }
// getName({
//     firstName:'黄杰'
// })

//函数接口
// interface jiami{
//     (key:string,value:string):string;
// }
// var md5:jiami = function(key:string,value:string):string{
//     //模拟
//     return key + value
// }
// md5('name','zhangsan')

// 可索引接口
// interface UserArr{
//     [index:number]:string
// }
// var arr2:UserArr = ['1','2','3']
// interface UserObject{
//     [index:string]:string
// }
// var arr2:UserObject={
//     hello:'你好',
//     name:'黄杰'
// }

//类类型接口
interface Animal5{
    name:string;
    eat(str:string):void
}
class Dog1 implements Animal5{
    name:string;
    constructor(name:string){
        this.name = name
    }
    eat(){
        console.log(this.name+'吃粮食');
    }
}
var d = new Dog1('小黑');
d.eat()







 