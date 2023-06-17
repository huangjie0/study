export default {}
interface Imoney{
    (salary:number,reward:number):number
}
let sumMoney:Imoney=function(x:number,y:number):number{
    return x+y
}
let res = sumMoney(10,20)
console.log(res);

interface IARRAY{
    [index:number]:string
}
let myarray:IARRAY=["你好","哈哈",'hello']
let mystr:string = myarray[1]
console.log(mystr);

