package java_base;

public class ZBJS {
    //调用函数入口
    public static void main(String[] args) {
        ZB dian_1=new ZB();
        dian_1.setX(2);
        dian_1.setY(3);
        ZB dian_2=new ZB();
        dian_2.setX(5);
        dian_2.setX(7);
        System.out.println(ZBGS.zbgs(dian_1.getX(), dian_2.getX(),dian_1.getY(),dian_2.getY()));

        // YDZB c = new YDZB();
        // c.x_x=0;
        // c.y_y=0;
        // c.r=1;
        // YDZB c1 = new YDZB();
        // c1.x_x=8;
        // c1.y_y=0;
        // c.r=1;
        // if(c.r+c1.r==YDZBYS.Ydzbys(c.x_x,c1.x_x,c.y_y,c1.y_y)){
        //     System.out.println("相切");
        // }else if(c.r+c1.r>YDZBYS.Ydzbys(c.x_x,c1.x_x,c.y_y,c1.y_y)){
        //     System.out.println("相离");
        // }else {
        //     System.out.println("相交");
        // }
    }
}
