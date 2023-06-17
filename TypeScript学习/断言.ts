export default {}
let str = '你好'
//1
let len = (<string>str).length
console.log(len);
//2
let len2 = (str as string).length
console.log(len2);
//3
function hello(x:number | string){
    console.log((x as string).length); 
}
hello("hello")
//4
function hello1(x:number | string){
    console.log((<string>x).length); 
}
hello1("hello")

