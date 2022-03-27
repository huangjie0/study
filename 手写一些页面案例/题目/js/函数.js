// 检查字符串是否含有大写字母，小写字母以及_,$,如果有缺少，则返回时缺少了哪些字符。
var str = '123A_$';
function character(str){
    for(var i=0;i<str.length;i++){
        if( str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
            console.log('有大写字母')
        }else if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
            console.log('有小写字母')
        }else if(str.charCodeAt(i)===95){
            console.log('有下划线')
        }else if(str.charCodeAt(i)===36){
            console.log('有美元符号')
        }
    }
}
character(str)

