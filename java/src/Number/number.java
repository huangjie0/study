package Number;

public class number {
    int n1;
    int n2;
    public number(int n1,int n2){
        this.n1=n1;
        this.n2=n2;
    }
    public void addition( ){
        int x= this.n1;
        int y= this.n2;
        int result=x+y;
         System.out.println("加法的结果是"+result);
    }
    public void subtration( ){
        int x=this.n1;
        int y=this.n2;
        int result = x-y;
        System.out.println("减法的的结果是"+result);
    }
    public void multiplication(){
        int x=this.n1;
        int y=this.n2;
        int result = x*y;
        System.out.println("乘法的的结果是"+result);
    }
    public void  division(){
        int x=this.n1;
        int y=this.n2;
        int result = x/y;
        System.out.println("除法的的结果是"+result);
    }

}
