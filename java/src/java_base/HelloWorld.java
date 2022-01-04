package java_base;

public class HelloWorld {

    //功能function
    public static void main(String[] args){
        System.out.println("helloworld");
        byte by=127/-128;//8位，1字节  bit:比特。
        short s;//16位，2个字节
        int a;//32位，4个字节
        long b=100L;//64位，8字节
        long b1=100;
        a = (int)b1;

        long ll=100;
        float s8=ll;//隐式转换为小数
        System.out.println(s8);


        float f = 3.14F;//4字节
        double d = 3.14;//8位
        float f2=(float)d;//强制类型转换

        char c = 'a';//一个字符
        String c2 = "abc";//可以放多个类型

        boolean bl=true;//布尔类型只有true和false
        boolean b2=false;
    }
    //这个方法返回打招呼内容
    public static String sayHello(){
        return "hello";
    }
    /*这个方法计算两个数的相加结果
    返回的是整数类型*/
    public static int add(int a,int b){
        return a+b;
    }
}
