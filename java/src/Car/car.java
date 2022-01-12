package Car;

public class car {
    int lt;
    String color;
    int weight;
    public car(int lt){
        this.lt=lt;
    }
    public car(int lt,String color){
        this.color=color;
        this.lt=lt;
    }
    public car(int lt,String color,int weight){
        this.lt=lt;
        this.color=color;
        this.weight=weight;
    }
    public void show(){
        System.out.println("这个汽车的轮胎个数是"+Integer.toString(lt)+"它的颜色是"+color+"它的重量是"+weight+"kg");
    }
}
