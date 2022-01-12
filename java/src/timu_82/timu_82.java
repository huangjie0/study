package timu_82;

public class timu_82 {
    int a;
    int b;
    double c;
    double d;
    double e;
    String f;
    String g;
    public timu_82(int a,int b){
        this.a=a;
        this.b=b;
        if (a>b){
            System.out.println(a);
        }else {
            System.out.println(b);
        }
    }
    public timu_82(double c,double d,double e){
        this.c=c;
        this.d=d;
        this.e=e;
        double res=c*d*e;
        System.out.println(res);
    }
    public timu_82(String f,String g){
        if (f==g){
            System.out.println("相等");
        }else {
            System.out.println("不相等");
        }
    }
}
