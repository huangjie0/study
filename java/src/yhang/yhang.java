package yhang;

public abstract class yhang {
    double money,lixi;
    public abstract double lv();
    public double getlixi(){
        lixi=money*lv();
        return lixi;
    }
}
