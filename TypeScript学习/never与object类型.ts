export default {}

let obj1:object;
obj1 = {
    name:"黄杰",
    age:18
}
// obj1=1
console.log(obj1);


function error(message:string):never{
    throw new Error(message)
}
error("你好")
//推断返回值为never类型,无法到达的终点
function hello0(){
    return error("哈哈");
}

function init():never{
    while(true){

    }
}