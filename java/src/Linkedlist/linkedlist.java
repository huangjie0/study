package Linkedlist;

import java.util.*;

public  class linkedlist  {
    public static void main(String[] args) {
        //有序可重复的集合
        //创建一个空的LinkedList集合
//        LinkedList m = new LinkedList<String>();
//        //向其中添加元素
//        m.add("a");
//        m.add("b");
//        m.add("c");
//        m.add("abc");
//        System.out.println(m.size());
//        System.out.println(m.element());
//        System.out.println(m.getFirst());
//        System.out.println(m.getLast());
//        System.out.println(m);
//        m.addFirst("nnnnnnn");
//        m.addLast("dffghfgdffhfkjffgr");
//        System.out.println(m);

//        --------------------------------------------------
//        Vector v = new Vector<String>();
//        v.add("tttt");
//        v.add("fdygfdgfdgy");
//        v.add("hiudyfuyufryfgyr");
//        System.out.println(v);
//        v.removeElement("tttt");
//        System.out.println(v);
//        -----------------------------------------------------
        Set <String> m = new HashSet<String>();
        m.add("fhdfh");
        m.add("jkhdjfhfh");
        m.add("dhfdhfhdfhfhifhrui");
        //两种遍历方式
        //1，foreach 2，迭代器
//        Iterator<String> value = m.iterator();
//        while (value.hasNext()){
//            String a = value.next();
//            System.out.println(a);
//        }
        //foreach遍历
        for (String v:m){
            System.out.println(v);
        }
    }
}
