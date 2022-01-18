package yonghu;

import javax.xml.crypto.Data;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class testorder {
    public static void main(String[] args) {
        String[] aihao1 = {"敲代码", "游泳", "打篮球"};
        String[] aihao2 = {"乒乓球", "游戏", "旅游"};
        String[] aihao3 = {"干饭", "登山", "冬泳"};
        List<order> orders1 = new ArrayList<order>();
        List<order> orders2 = new ArrayList<order>();
        List<order> orders3 = new ArrayList<order>();

        order o1 = new order("2012121", 88, new Date(), "吃得少" );


    }
}
