package java_base;

public class testcar {
    public static void main(String[] args) {
        Car hj = new Car();
        hj.color="黄色";
        hj.pp="宝马";
        hj.sd=400;
        Person HJ= new Person();
        HJ.name="黄杰";
        HJ.car=hj;
        HJ.kaiche();
    }
}
