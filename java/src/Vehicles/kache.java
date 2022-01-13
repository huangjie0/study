package Vehicles;

public class kache extends vehicle {
    float load;
    int seats;
    public kache(String brand,String color,float load,int seats){
        super(brand,color);
        this.load=load;
        this.seats=seats;
    }
    public void showTruck(){
        System.out.println("这个小汽车的商标是"+this.brand+"颜色是"+this.color+"载重是"+this.load+"成员是"+this.seats);
    }
}
