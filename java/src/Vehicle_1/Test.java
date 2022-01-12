package Vehicle_1;
/**
 * 测试子类改写抽象方法的方法
 * */
public class Test {
    public static void main(String[] args) {
        Car d = new Car();
        System.out.println(d.NoOfWheels());
        Motorbike m = new Motorbike();
        System.out.println(m.NoOfWheels());
    }
}
