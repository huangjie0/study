package circular;
import java.lang.Math;

public class s {
    double r;
    public s(double r){
        this.r=r;
        this.r=S(this.r);
    }
    public static double S(double r){
        double s=r*r*Math.PI;
        System.out.println(s);
        return s;
    }
}
