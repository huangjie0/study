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

console.log(newarr);









