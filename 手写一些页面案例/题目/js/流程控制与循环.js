// 通过弹出框提示用户输入时间信息，根据用户输入的时间弹出问候信息；
function hi(){
    var time = Number(prompt("请输入时间？"));
   if(time<6){
    alert("这是休息时间，不要说话！")
   }else if(time<13){
    alert("上午好");
   }else if(time<19){
       alert("下午好")
   }else if(time<24){
       alert("晚上好")
   }
}
hi();

//请客吃饭
//用if else if解题
function eat(){
    var money = prompt("班长你口袋里有多少钱啊？");
    if(money<500){
        alert("下次来把钱给我带上！")
    }else if(money<1000){
        alert("请大家吃棒棒糖");
    }else if(money<1500){
        alert("请大家喝饮料")
    }else if(money<2000){
        alert("请大家吃快餐")
    }else{
        alert("请大家吃西餐")
    }
}
eat();

// 一个物体从1000米高的地方落下，每次弹起的高度是前一次高度的0.6倍，问多少次之后，高度小于1米。
//解法
function bounce(){
    var height = 1000;
    var conut = 0;
    while(height>1){
        height*=0.6;
        conut++;
    }
    alert(conut);
}
bounce();

//物品a 2元，b 5元，c 15元，请问刚好花完100元有多少种情况？
function finish(){
    var a;
    var b;
    var c;
    var conut = 0;
    for(var a=1;a<50;a++){
        for(var b=1;b<20;b++){
            for(var c=1;c<7;c++){
                if(2*a+5*b+15*c==100){
                    console.log("a:"+a+'个'+"b:"+b+'个'+'c:'+c+'个');
                    conut++;
                }
            }
        }
    }
    console.log(conut);
}
finish();

// 孩子吃糖，第一天你给孩子买了一些糖，孩子每天吃糖的一半多一个，到了第10天的时候，发现只剩下一个糖了，问当初第一天买了多少糖？(从后往前推)
function sugar (){
    var n=1;
    while(n>1){
        
    }

}

// 最近抖音有对折纸挑战，在不考虑难度的情况下，一张普通的0.0001米厚度的纸，多少次对折后，可以达到最高峰珠穆拉玛峰的高度8848米？
function height(){
    var height = 0.0001;
    var conut = 0;
    for(var i=0;i<100;i++){
        height*=2;
        conut++;
        if(height>=8848){
            break;
        }
    }
    console.log(conut);
}
height();

//输入一个数字，首先判断是否为质数，如果不是质数，将其分解质因数 如：24 = 2 * 2 * 2 * 3，将分解出的质数打印出来。
function prime_Numbers(){
    var number=prompt("请输入一个数字");
    for(var i=2;i<number;i++){
        if(number%i==0){
            console.log("不是质数");
        }else{
            console.log("是质数");
            return;
        }
    }
}
prime_Numbers();








