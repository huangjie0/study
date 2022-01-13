package Vehicles;

public class Car extends vehicle {
    int seats;
    public Car(String brand,String color,int seats){
        super(brand,color);
        this.seats=seats;
    }
    public void showCar(){
        System.out.println("这个小汽车的商标是"+this.brand+"颜色是"+this.color+"成员是"+this.seats);
    }
}
