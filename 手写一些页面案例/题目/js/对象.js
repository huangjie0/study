// - 书写一个函数，判断指定数据是否存在于指定数组中
    
//     要求：
//     函数名称：exist
//     函数调用方式：exist(数据data，数组arr)
//     函数功能：判断“数据data”是否存在于“数组arr”中，如果是函数返回值为true，如果不是函数返回值为false
arr=[1,5,321,45,15]
data=15
function exist(data,arr){
    for(var i=0;i<arr.length;i++){
        if(data==arr[i]){
            return true
        }
    }return false
}
console.log(exist(data,arr))

// - 请使用arguments完成函数getResult，实现得到输入的所有的数值中的最小值、最大值、平均数、总和
    
//     作业描述：
//     函数名：getResult
//     函数调用方式：getResult(数值1，数值2，数值3，数值4.....)
//     函数功能：返回值是一个对象，这个对象有sum, max, min, averages等属性，分别表示实参的总和、最大值、最小值、平均数等

function getResult(){
    var sum = 0;
    var max = arguments[0]
    var min = arguments[0]
    var averages
    for(var i=0;i<arguments.length;i++){
        sum+=arguments[i]
        averages = sum/arguments.length
    }
    for(var j=1;j<arguments.length;j++){
        if(max<arguments[j]){
            max=arguments[j]
        }
    }
    for(var j=1;j<arguments.length;j++){
        if(min>arguments[j]){
            min=arguments[j]
        }
    }
    return {sum:sum,max:max,min:min,averages:averages}
}
console.log(getResult(1,2))


// 字符串首字母大写。
const str='jsdfhdfhjfrjhrjf'
function capital(str){
    str.toUpperCase()
}