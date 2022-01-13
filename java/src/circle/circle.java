package circle;

public class circle {
    double r;
    public circle(){
    }
    public circle(double r){
        this.r=r;
    }
    public double getRadius(){

            return r;
    }
    public double grtPerimeter( ){
            return  2*r*Math.PI;
    }
    public double getArea( ){
                 return r*r*Math.PI;
    }
    public void disp(){
        System.out.println("圆的半径是"+this.getRadius());
        System.out.println("圆的周长是"+this.grtPerimeter());
        System.out.println("圆的面积是"+this.getArea());
    }
}
