export default {}
interface FULLNAME{
    firstName:string,
    lastName:string,
    age?:number,
    readonly sex:string
}
let person:FULLNAME={
    firstName:"黄",
    lastName:"姐",
    sex:"男"
}
interface IAA{
    readonly a:number
}
interface IAA{
    b:number
}
//接口拓展
let aabb:IAA = {
    a:1,
    b:2
}

