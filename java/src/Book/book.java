package Book;

public class book {
    private String sm;
    private String zz;
    private int price;
    public book(String sm,String zz,int price){
        this.sm=sm;
        this.zz=zz;
        this.price=price;
    }
    public void setsm(String sm){
        this.sm=sm;
    }
    public String getsm(){
        return sm;
    }
    public void setzz(String zz){
        this.zz=zz;
    }
    public String getzz(){
        return zz;
    }
    public void setprice(int price){
        this.price=price;
    }
    public int getprice(){
        return price;
    }
}
