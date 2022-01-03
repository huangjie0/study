//public表示公共类所有人都可以访问
// static表示一个静态方法
//void:表示返回的数据没有类型
//string[]args表示参数
//System.out.println：表示打印输出文本，换行
//System.out.print：表示打印输出文本，不换行
//变量：声明，定义一个变量,数据类型+变量名称，二、给变量赋值，三、使用变量、可以把第一二部进行合并
//java的数据类型1、整数类型：byte、short、int、long
//byte:占一个字节长度:-127~127
//short:占两个字节
//int:占四个字节
//long:占八个字节长度
//2、浮点类型----->float:单精度浮点型，占4个字节double:双精度占八个字节长度
//3、文本型------->char:1、单个字母2、如果是数字，则表示ASCII码
//------>string:引用类型、对象类型
//4、布尔型----->boolean:true或者fals
//变量名称的命名规则：首位必须以字母、_、$开头，其余部分必须以数字、字母、_、$开头
//变量名不能重复
//一次声明多次赋值
//不同数据类型的转换1、隐式转换必须满足的规则：1、数据的基本类型相同，
//比如说都是数字2、转换的顺序：byte、short、int、long、flot、double
//强制转换：如果要转换的目标小于当前数据，会丢失精度。
//将str转换为int类型，使用函数integer.parseInt(变量名)；
//将int转换成str类型，使用integer.toString(变量名);
//赋值运算符=、+=、-=、*=、/=、%=
//算数运算符：+-*/%、++、--
//比较运算符号：；<、>、<=、>=、==、！=
//逻辑运算符号：&&、||（逻辑或）、！逻辑非
//位运算符：&（位与）、|（位或）、~（位非）
//其他的运算符号：（）、[]
//条件运算符：条件？值1：值2，也叫做三目运算符
//Scanner类：用来扫描用户输入的文本信息
//类和对象，类对事物特征的抽象描述，对象是具有特定特征和实际存在的事物
//构造函数：或者称为new函数，构造初始化一个对象并且分配初始空间
//System.in读取输入流，按字节读取的
//nextint()方法获取我们用户输入的整数
//nextfloat()方法获取我们输入的浮点数
//next()获取我们输入的所有文本
//nextline()获取输入的所有的文本，读取回车键
//条件控制语句：当满足一定条件时，程序会执行什么动作，或者不满足执行什么条件
//if(条件表达式){代码块}，通常和else{代码块}使用、else if一起使用。
//swith case条件表达式分支结构只能是byte、short、int、char、string(java se8版本新增的类型)
//相同点：都表示程序设计中的多重条件判断结构，不同点，swith只能是等值判断，而且只能是byte\short\int\char\string
//不能是浮点或者布尔类型
//2\case后只能是常量，不能接变量3、无法使用区间进行判断，if...else...:可以是等值也可以是区间或者是布尔值
//else语句还可以嵌套if...else...语句，表达式的变量类型可以是容易数据类型，可以是常量也可以是变量
//循环结构分为三种循环体while,do while,for,
package com;
import java.util.Scanner;//导入scanner类
import javax.print.DocFlavor.INPUT_STREAM;
public class java {
    public static void main(String[] args){
        /*        System.out.println("hello world");
        int a=127;
        byte $a=120;
        short _a=200;
        long a_$=168;
        float $1=123.12f;
        double $2=158.75d;
        char $7='f';
        String str="程度和";
        boolean tru=true;
        int $$a=15;
        byte $$b=10;
        $$a=$$b;
        float $4=153.30f;
        int $5=110;
        $5=(int)$4;
        String s="123456";
        int n=66877;
        String s1= Integer.toString(n);
        System.out.println(s1);*/
//        int i=10%3*5-2;
////        i+=1;//i=i+1
////        i-=1;//此处计算结果等于三
////        i*=2;
////        i/=6;
////        i%=2.5;
////        Boolean tr=5<3?true:false;
////        System.out.println(i);
//        System.out.println("请输入一个金额");
//        Scanner input=new Scanner(System.in);
//        int n=input.nextInt();
//        int m=input.nextInt();
////        String st=n>1000?"去吃日料":n>500?"去吃火锅":"去吃沙县小吃吧";
////        System.out.println(st);
//        System.out.println(m+n);

//        int a= 20;
//        int b= 30;
//        int c;
//        System.out.println(a);
//        System.out.println(b);
//        c=a;
//        a=b;
//        b=c;
//        System.out.println(a);
//        System.out.println(b);

//        System.out.println("请输入你的身高（使用浮点数）");
//        Scanner height=new Scanner(System.in);
//        System.out.println("请输入你的体重（使用浮点数）");
//        Scanner weight=new Scanner(System.in);
//        double h = height.nextFloat();
//        double w = weight.nextFloat();
//        double BMI = w/(h*h);
//        System.out.println("BMI的值为"+BMI);


//        String tq;
//        System.out.println("请输入今天的天气");
//        Scanner input = new Scanner(System.in);
//        String m=input.next();
//        if (m.equals("晴天")){
//            System.out.println("去爬山");
//        }else if (m.equals("阴天")){
//            System.out.println("去跑步");
//        }else if (m.equals("下雨")){
//            System.out.println("在家呆着");
//        }else {
//            System.out.println("不确定");
//        }


//       Scanner input= new Scanner(System.in);
//        System.out.println("请输入一个年份");
//        int a = input.nextInt();
//        if (a%4==0&&a%100!=0||a%400==0){
//            System.out.println("是闰年");
//        }else {
//                System.out.println("不是闰年");
//        }
//        Scanner input = new Scanner(System.in);
//        System.out.println("你的成绩是多少分啊？");
//        int score = input.nextInt();
//        if (score==100){
//            System.out.println("我给你奖励一辆汽车");
//        }else if (score>=90&&score<100){
//            System.out.println("让你妈妈给你买个MP4");
//        }else if (score>=60&&score<90){
//            System.out.println("给你买本参考书看看吧");
//        }else if (score<60&&score>=0){
//            System.out.println("屁都没有，滚去学习！");
//        }else {
//            System.out.println("您输入的不是数字或者大于100分了");
//        }

//        Scanner input=new Scanner(System.in);
//        System.out.println("请输入你拨哪个键");
//        int t=input.nextInt();
//        switch (t){
//            case 1:
//                System.out.println("拨爸爸的号");
//                break;//跳出当前的分支结构。通常不能省略
//            case 2:
//                System.out.println("拨妈妈的号");
//                break;
//            case 3:
//                System.out.println("拨爷爷的号");
//                break;
//            case  4:
//                System.out.println("拨奶奶的号");
//                break;
//            default:
//                break;
//        }


//        Scanner input=new Scanner(System.in);
//        System.out.println("请输入你的彩票尾数是多少");
//        int n=input.nextInt();
//        switch (n){
//            case 2:
//                System.out.println("恭喜你是一等奖");
//                break;
//            case 3:
//                System.out.println("你是二等奖哦");
//                break;
//            case 5:
//                System.out.println("你是二等奖");
//                break;
//            case 8:
//                System.out.println("你是二等奖呀");
//                break;
//            default:
//                System.out.println("谢谢参与");
//                break;
//        }
//        int n=1;
//        while (n<=5){
//            System.out.println("helloworld");
//            n++;
//        }

//        Scanner input=new Scanner(System.in);
//        System.out.println("请输入学生姓名：");
//        String name=input.nextLine();
//        while (!name.equals("done")){
//            System.out.println("请输入学生姓名");
//            name=input.nextLine();
//        }
//        System.out.println("程序结束");
//        Scanner input=new Scanner(System.in);
//        String name;
//        do {
//            System.out.println("请输入学生姓名");
//            name = input.nextLine();
//        }while (!name.equals("done"));
//        System.out.println("程序结束");

//        for (long n=1;n<=100;n++){
//            System.out.println("黄杰");
//        }
//        for (int n=1;n<=50;n++){
////            if(n%2==0){
////                System.out.println(n);
////            }
//            System.out.println(2*n-1);
//        }
//        int num=1;
//        int sum=0;
//        while (num<=100){
//            sum+=num;
//            num++;
//        }
//        System.out.println(sum);
//
//        int sum=0;
//        for (int n=1;n<=100;n++){
//            sum+=n;
//        }
//        System.out.println(sum);

//        int sum=0;
//        int n=1;
//        do {
//            sum+=n;
//            n++;
//        }while (n<=5);
//        System.out.println(sum);


//        for(int i=1;i<=5;i++){
//            for (int j=1;j<=5;j++){
//                System.out.print("*");
//            }
//            System.out.print("\n");
//        }


//        for(int i=1;i<=5;i++){
//            for (int j=1;j<=i;j++){
//                System.out.print("*");
//            }
//            System.out.print("\n");
//        }

//        for(int i=1;i<=5;i++){
//            for (int j=i;j<=5;j++){
//                System.out.print("*");
//            }
//            System.out.print("\n");
//        }
//        for (int n=100;n<=200;n++){
//            if ((n%3==0)||(n%7==0)){
//                System.out.println(n);
//            }
//        }

//        int n_1=100;
//        while (n_1<=200){
//            if ((n_1%3==0)||(n_1%7==0)){
//                System.out.println(n_1);
//            };
//                n_1++;
//        }
    Scanner input=new Scanner(System.in);
    int j=6;
    System.out.println("请输入一个数字");
    int n=input.nextInt();
    for (int i=1;i<=10;i++){
        if (n==j){
            System.out.println("恭喜您猜对了，请领取您的奖品");
            break;
        }else if(n!=j && i<10){
            System.out.println("答案猜错了，请重新输入");
            n=input.nextInt();
            continue;
        }
        else {
            System.out.println("游戏结束了");
        }
        }
    }
}

