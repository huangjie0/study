package java_base;
import java.lang.Math;

public class ZBGS {
    public static double zbgs(double x1,double x2,double y1,double y2){
        double x_r=Math.abs(x1-x2);
        double y_r=Math.abs(y1-y2);
        double jl = Math.hypot(x_r, y_r);
        return jl;
        }
}
