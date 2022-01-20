package ManagementFrame;

public class MyExption extends RuntimeException{
        //定义构造方法
    public MyExption(){
        super();
    }
    public MyExption(String message){
        super(message);
    }
}
