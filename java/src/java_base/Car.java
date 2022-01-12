package java_base;

public class Car {
    public Car(String clolor,String pp,double sd){
        this.color=clolor;
        this.pp=pp;
        this.sd=sd;
    }    
    public Car(String color){
        this.color=color;
    }  //构造方法重载
    public Car(double sd){
        this.sd=sd;
    } //构造方法重载
    private String color;
    public void setcolor(String color){
        this.color=color;
    }
    public String getcolor(){
        return color;
    }
    private String pp;
    public void setpp(String pp){
        this.pp=pp;
    }
    public String getpp(){
        return pp;
    }
    private double sd;
    public void setsd(double sd){
        this.sd=sd;
    }
    public double getsd(){
        return sd;
    }
}
