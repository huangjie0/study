package Vehicles;

public class vehicle {
     public String brand;
     public String color;
    public vehicle(String brand,String color){
        this.brand=brand;
        this.color=color;
    }
    public void run(){
        System.out.println("我已经开动了");
    }
    public void showInfo(){
        System.out.println("这个车的商标是"+this.brand+"它的颜色是"+this.color);
    }

}
