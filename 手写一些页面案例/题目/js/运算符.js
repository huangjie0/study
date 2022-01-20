//写出下面表达式的结果
// var check1 = 4 < 3|| 10 < 5;
//false;

//var check2 = 4 > 3 || 10 < 5;
//true

// var check3 = !(4 > 3);
//false

// var check4 = !(4 === '4');
//true

// var val = 'c';
// var str = 'Value is' + (val === 'c') ? 'a':'b';
// console.log(str);
//a


// var n = 24;
// n - 1 && (n+=5)
// console.log(n);
//29

//第三题
// 定义一个数字10，将这个数字乘以2，而后将结果赋值给result变量。
var number = 10;
var result = number*2
alert(result);
//第五题
// == 只表示值相等，不管类型等不等无所谓，=== 表示值和类型都相等才行

//第六题
//设置半径为20，计算圆的周长。
function S(r){
    S=2*r*Math.PI;
    console.log("这个圆的周长是"+S)
}
S(2);

//假设一共201个小时，请计算，一共经过了多少天多少小时？
function time(hour){
    var day=Math.round((hour/24));
    var hour_1=hour-(day*24);
    console.log("一共走了"+day+'天'+'和'+hour_1+'小时');
}
time(201);

//假设a商品的价格为10.21元，b商品的价格为20.12元，请精确计算出他们的总价格。
function fullPrice(a,b){
    var yuan_1 = Math.round(a);
    var yuan_2 = Math.round(b);
    var fullyuan=yuan_1+yuan_2;
    var jiao_1 = Math.round((a*10)/100);
    var jiao_2 = Math.round((b*10)/100);
    var full_jiao = jiao_1+jiao_2;
    console.log("一共是"+fullyuan+'元'+full_jiao+'角');
}
fullPrice(10.21,20.12);

//如果某年的年份值是4的倍数并且不是100的倍数，或者该年份值是400的倍数，那么这一年就是闰年，随机给一个年份，查看是否是闰年
function bissextile(){
    var year = prompt("请输入一个年份")
    if((year%4==0&&year%100!=0)||(year%400==0)){
        console.log(year+'是闰年');
    }else{
        console.log(year+'不是闰年');
    }
}
bissextile( );















