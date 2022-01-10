package java_base;

public class ZBJS {
    //调用函数人口
    public static void main(String[] args) {
        ZB dian_1=new ZB();
        dian_1.x=50;
        dian_1.y=60;
        ZB dian_2=new ZB();
        dian_2.x=7;
        dian_2.y=9;
        System.out.println(ZBGS.zbgs(dian_1.x, dian_2.x,dian_1.y,dian_2.y));

        YDZB c = new YDZB();
        c.x_x=0;
        c.y_y=100;
        c.r=1;
        YDZB c1 = new YDZB();
        c1.x_x=2;
        c1.y_y=1000;
        c.r=1;
        if((c.r+c1.r)==YDZBYS.Ydzbys(c.x_x,c1.x_x,c.y_y,c1.y_y)){
            System.out.println("相切");
        }else if((c.r+c1.r)>YDZBYS.Ydzbys(c.x_x,c1.x_x,c.y_y,c1.y_y)){
            System.out.println("相离");
        }else if((c.r+c1.r)<YDZBYS.Ydzbys(c.x_x,c1.x_x,c.y_y,c1.y_y)){
            System.out.println("相交");
        }
    }
}
