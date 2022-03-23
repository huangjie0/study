// 过滤一个数组内重复的元素，并用这些元素重构一个新的数组，新数组内也不能有重复元素
var arr=[1,2,3,5,2,3,4,5,1,2];
var newarr=[];
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            i++;
            j=i;
        }
    }
    newarr.push(arr[i]);
}

// 反转任意数组 (不使用reverse)
var newarr = []
var arr=[1,5,6,4,2,7,9]
for(var i=0;i<arr.length;i++){
    newarr.unshift(arr[i])
}
console.log(newarr)

// 求数组中的最大值（假设全部是数字的数组）
var arr=[2,5,4,1,400,520,100,20]
var newar = arr.sort(function(a,b){return b-a})[0]
console.log(newar)

// 找到数组中每一个符合要求的数组下标（不使用indexOf）
var array = [1,2,3,4,1,1];
var target = 2;
function main(array,target){
    for(var i=0;i<array.length;i++){
        if(target===array[i]){
            console.log(i)
            continue;
        }
    }
}
main(array,target);









