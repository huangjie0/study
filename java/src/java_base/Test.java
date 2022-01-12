package java_base;

public class Test {
    public static void main(String[] args) {
        Mao mao_1 = new Mao();
        Gou gou_1 =new Gou();
        gou_1.age = 20;
        gou_1.fs = "紫色";
        gou_1.eat();
        gou_1.js_1();
        System.out.println(gou_1.age);
        mao_1.age=18;
        mao_1.fs="黄色";
        System.out.println(mao_1.age);
        mao_1.eat();
        mao_1.js();
    }
}
   
