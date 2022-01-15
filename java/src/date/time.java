package date;

import java.util.Arrays;
import java.util.Calendar;

public class time {
    public static void main(String[] args) {
//        Calendar t=Calendar.getInstance();
//        System.out.println(t.get(Calendar.YEAR));
//        System.out.println(t.get(Calendar.HOUR));
//        System.out.println(t.get(Calendar.DATE));
//        System.out.println(t.get(Calendar.DATE));
//        System.out.println(t.get(Calendar.MONDAY));
//        String str=new String();
//        System.out.println(str);
        //字符串的操作
        String str="ophgfgfkd";
////        System.out.println(str.contains("kai"));
////        System.out.println(str.endsWith("jdfjfd"));
////        System.out.println(str.startsWith("djhdf"));
////        System.out.println(str.startsWith("d",1));
////        System.out.println(str.equals("yandff"));
//        char[] cs = {'a','d','e','n'};
//        String str = new String(cs);
//        System.out.println(str);
        //创建字符串对象的方式
//        String str="";
//        String str_1=new String();
        //对字符串操作转化
//        char c= str.charAt(1);
//        System.out.println(c);

//        int num = str.codePointBefore(1);
//        System.out.println(num);
        //对字符串的查找
//        str.indexOf("a");
        System.out.println(str.indexOf("o"));
        System.out.println(str.indexOf("o",1));
        System.out.println(str.isEmpty());
        System.out.println("123".concat(str));
        System.out.println(str.substring(4,7));
        //对字符串进行替换
        System.out.println(str.replace("a","dhfhdsjkhfd"));
        String [] strs = str.split("d");
        for (String c:strs){
            System.out.println(c);
        }
        //其他方法
        //字符串的长度length()
        System.out.println(str.length());
        char [] cs= str.toCharArray();
        System.out.println(Arrays.toString(cs));
        System.out.println(str.toUpperCase());//转大写
        System.out.println(str.toLowerCase());//转小写
        StringBuffer sb= new StringBuffer("abc");
        sb.append("fhdfhdhh");
        System.out.println(sb.reverse());
        //StringBuffer和StringBuilder(可变字符串序列字符串)
        //其字符串中的字符串系列可以改变,改变过后其对象还是同一个
        //StringBuffer是一个线程安全字符串,效率低
        //StringBuilder是一个线程不安全的字符串,效率高
        //String类型不可变字符序列字符串
        //如果String类中的某一个字符发生改变,这个字符串不在是以前对象,使用在字符串序列不长且时常发生改变使用String字符串
    }
}
