package java_base;

public class Person {
    public Person(String name,Car car){
        this.name=name;
        this.car=car;
    }
    private String name;
    public void setname(String name){
        this.name=name;
    }
    public String getname(){
        return name;
    }
    private Car car;                 
    public void setcar(Car car){
        this.car=car;
    }
    public Car getcar(){
        return car;
    }
   
    public void kaiche(){
        System.out.println(name +"开着一辆" + car.getcolor() + car.getpp() + "以速度为"+car.getsd()+"在公路上运行");
    }
}
