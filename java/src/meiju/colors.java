package meiju;

public enum  colors {
    RED,
    GREEN,
    BLACK;
    private Integer code;//状态码
    private String message;//错误信息
    //成员方法
    public void setCode(Integer code){
        this.code=code;
    }
    private colors(){

    }
    //构造方法
     private colors(Integer code,String message){
        this.code=code;
        this.message=message;
    }
}
