package Vehicle;

public class vehicle {
     double sd;
     double size;
     public vehicle (double sd,double size){
         this.sd=sd;
         this.size=size;
    }
    public void speeUp(int speed){
        this.sd+=speed;
        System.out.println("提了"+speed+"速度");
        System.out.println("当前速度为"+this.sd+"体积为"+this.size);
    }
    public void speedDown(int speed){
         this.sd-=speed;
         System.out.println("减了"+speed+"速度");
         System.out.println("当前车速为"+this.sd+"体积为"+this.size);
    }
}
