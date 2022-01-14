package NBN;

public class out {
    static String a="这是外部类";
    public void show(){
        class Inner2{}
    }
    public out(String a){
        this.a=a;
    }
    static class inner{
        String b="这是b";
        public inner (String b){
            this.b=b;
        }
        public inner(){}
        public void showInner(){
            String str="111";
            System.out.println(str);
            System.out.println(this.b);
            System.out.println(out.a);
        }
        public inner getinner(){
            return new inner();
        }
    }
}
