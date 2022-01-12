package Addition;

public class addition {
    int a;
    int b;
    long a_a;
    long b_b;
    double a_;
    double b_;
    float a_1;
    float b_1;
    String a_2;
    String b_2;
    //针对是整型的运算
    public addition(int a,int b){
        this.a=a;
        this.b=b;
        int res=a+b;
        System.out.println(res);
    }
    //针对长整型运算
    public addition(long a_a,long b_b){
        this.a_a=a_a;
        this.b_b=b_b;
        long res=a_a+b_b;
        System.out.println(res);
    }
    //针对的是浮点数运算
    public addition(float a_1,float b_1){
        this.a_1=a_1;
        this.b_1=b_1;
        float res=a_1+b_1;
        System.out.println(res);
    }
    public addition(double a_,double b_){
        this.a_=a_;
        this.b_=b_;
        double res=a_+b_;
        System.out.println(res);
    }
     //针对的是字符串运算
    public addition(String a_2,String b_2){
        this.a_2=a_2;
        this.b_2=b_2;
        String res=a_2+b_2;
        System.out.println(res);
    }


}
