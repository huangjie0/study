package java_base;

public class number_77 {
    //"safyrggfrg"
    //char c = "safyrggfrg".charAt(0)
    //手动输入一个字符串，分别找出字符串中大写字母，小写字母，数字，拼接成字符串
    public static void main(String[] args) {
        //System.out.println("dhHJN52482fdhfudhf".length());
        String b="uhfdufhudHHUOhf544";
        String s1="";
        String s2="";
        String s3="";
        for (int i = 0;i<b.length();i++){
            char c = b.charAt(i);
            if(c>='A' && c<='Z'){
                s1+=c;//判断是否大写
            }else if(c >='a'&&c<='z'){
                s2+=c;//判断是否为小写
            }else if(c>='0'&&c<='9'){
                s3+=c;//
            }
        }
        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s3);
    }
}
