package Vehicles;

public class test {
    public static void main(String[] args) {
        Car c= new Car("宝马","黄色",12);
        c.showCar();
        System.out.println(c.brand);
        System.out.println(c.seats);
        System.out.println(c.color);
        kache e= new kache("奥迪","蓝色",200,100);
        e.showTruck();
        System.out.println(e.brand);
        System.out.println(e.color);
    }
}
