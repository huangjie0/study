//es5
// // 函数声明法
// function run(){
//     return 'run'
// }
// //匿名函数
// var run2 = function(){
//     return 'run2'
// }

// ts中定义函数
function run():string{
    return 'run'
}
var run2 = function():string{
    return '123'
}
console.log(run());
console.log(run2());

//ts定义方法传参
function getInfo(name:string,age:number):string{
    return  `${name}---${age}`
}
console.log(getInfo('张三',20));

var getInfo2 = function(name:string,age:number){
    return `${name}+++${age}`
}

//无返回值
function run3():void{
    console.log('run');
}
run3()

// 方法可选参数
function getInfo3(name:string,age?:number):string{
    return `${name}======${age}`
}
console.log(getInfo3('hello'));

//默认参数
function getInfo4(name:string,age:number=20){
    return `${name}||||${age}`
}
console.log( getInfo4('huangjie'));
//剩余参数
function sum(a:number,b:number,c:number,d:number):number{
    return a+b+c+d
}
console.log(sum(1,2,3,4));

function sum2(...result:number[]):number{
    var sum = 0
    for(var i=0;i<result.length;i++){
        sum+=result[i]
    }
    return sum
}
console.log(sum2(1,3,4,5,6,7));

function sum3(a:number,...result:number[]):number{
    var sum = a
    for(var i=0;i<result.length;i++){
        sum+=result[i]
    }
    return sum
}
console.log(sum2(1,3,4,5,6,7));

//函数的重载，兼容重载写法
function css(name:string):string;
function css(age:number):number;
function css(str:any):any{
    if(typeof str == 'string'){
        return str
    }else{
        return  str + '1111'
    }
}






    
    