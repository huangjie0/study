package java_base;
import java.lang.Math;

public class YDZBYS {
    public static double Ydzbys(double x_x1,double x_x2,double y_y1,double y_y2){
        double x_r=Math.abs(x_x1-x_x2);
        double y_r=Math.abs(y_y1-y_y2);
        double x_y_r=Math.hypot(x_r, y_r);
        return x_y_r;
    }
}
