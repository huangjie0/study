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
const str='a'
function capital(str){
    return str.substring(0,1).toUpperCase()+str.substr(1).toLowerCase()
}
console.log(capital(str))

//把下面数组的首尾两个元素互换
var arr = ["鹿晗","王俊凯","蔡徐坤","彭于晏","周杰伦","刘德华","赵本山"];
var temp = arr.pop()
var temp_1 = arr.shift()
arr.push(temp_1)
arr.unshift(temp)
console.log(arr)

//计算今日离你出生日期经过了多久，精确到分钟(Date)。
var myBirthday=new Date(1996,9,12)
var newTime=new Date()
var diff = newTime.getTime() - myBirthday.getTime()
var year = Math.ceil(diff/1000/60/60/24/360)
var day=Math.floor(diff/(60*60*24))
var hour=Math.floor(diff%(60*60*24)/3600)
var minutes=Math.floor(diff%3600/60)
var object={year:year,day:day,hour:hour,minutes:minutes}
console.log(object)

// 使用Math对象完成一个函数，要求输入start与end两个参数，最终随机获取两个数字之间的随机值
function getRandom(start,end){
    return Math.floor(Math.random()*(end-start+1))+start
}
console.log(getRandom(1,3));




