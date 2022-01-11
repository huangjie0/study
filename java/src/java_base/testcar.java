package java_base;

public class testcar {
    public static void main(String[] args) {
        // Car hj = new Car();
        // hj.setcolor("黄色");
        // hj.setpp("宝马");
        // hj.setsd(400);
        Car car_1= new Car("黄色", "宝马", 45454);
        Person person_1=new Person("黄杰", car_1);
        person_1.kaiche();
        // HJ.setname("朱友");
        // HJ.setcar(hj);
        // HJ.kaiche();
    }
}
