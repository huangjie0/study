package Person;

public class peson {
    String name;
    int age;
    public peson(String name,int age){
        this.name=name;
        this.age=age;
    }
    public void dispaly(){
        System.out.println("姓名是"+this.name);
        System.out.println("年龄是"+this.age+"岁");
    }
}
