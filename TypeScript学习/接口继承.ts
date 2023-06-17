interface IPERSON{
    age:number
}
interface IPERSON1 extends IPERSON{
    name:string
}
let lisi:IPERSON1={
    age:18,
    name:"你好"
}

//多继承
interface IFatherMoney{
    m1:number,

}
interface IMotherMoney{
    m2:number, 
}
interface ISonMoney extends IFatherMoney,IMotherMoney{
    m3:number, 
}
let p:ISonMoney={
    m1:1000,
    m2:10000,
    m3:1111
}
