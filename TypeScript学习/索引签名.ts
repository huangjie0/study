interface IAA{
    firstName:string,
    lastName:string,
    age?:number,
    readonly sex:string
}
let p2 = {
    firstName:"黄",
    lastName:"姐",
    age:18,
    sex:"女",
    singName:"en",
    dance:"hh"
}
let p1:IAA=p2

//2
let p3:IAA=({
    firstName:"黄",
    lastName:"姐",
    age:18,
    sex:"女",
    singName:"en",
    dance:"hh"
}) as IAA;
//索引签名
interface Ibeauty{
    [props:string]:string
}
let name5:Ibeauty = {
    name1:"你好",
    name2:"哈哈",
    name3:"我的",
    // name:555
    133:"话"
}


