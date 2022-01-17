package student_1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class teststudent {
    public static void main(String[] args) {
        student m1 = new student("20","黄杰","男","20","马鞍山");
        student m2 = new student("25","张三","男","26","合肥");
        student m3 = new student("25","李四","女","30","合肥");
        student m4 = new student("25","王五","女","30","合肥");
        student m5 = new student("28","张家界","女","36","合肥");
        List <student> slist=new ArrayList<student>();
        slist.add(m1);
        slist.add(m2);
        slist.add(m3);
        slist.add(m4);
        slist.add(m5);
        //用for循环遍历
//        for (int i=0;i<slist.size();i++){
//            student s = slist.get(i);
//            System.out.println(s.age);
//            System.out.println(s.dizhi);
//            System.out.println(s.name);
//            System.out.println(s.xingbie);
//            System.out.println(s.xuehao);
//        }
        //利用foreach遍历
//        for (student s:slist){
//            System.out.println(s.age);
//            System.out.println(s.dizhi);
//            System.out.println(s.name);
//            System.out.println(s.xingbie);
//            System.out.println(s.xuehao);
//        }
        //利用迭代器进行遍历
        Iterator <student>iter = slist.iterator();
        while (iter.hasNext()){
           student m= iter.next();
           System.out.println(m.xuehao);
           System.out.println(m.xingbie);
           System.out.println(m.dizhi);
           System.out.println(m.age);
        }
    }
}
