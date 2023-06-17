export default {}
type person = "你好" | "哈哈" | "hello" | "en"
let lisi:person = "你好"
let person1:person = "哈哈"
type mufun = (a:string,b:number)=>number

let myfun1:mufun=(a:string,b:number)=>b
//第三中
type my = {
    name:string,
    age:number,
    sex:string
}
let my1:my = {
    name:"你好",
    age:18,
    sex:"女"
}

