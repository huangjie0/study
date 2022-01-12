package MyTime;

public class mytime {
    double hour;
    double minute;
    double second;
    public mytime(double hour,double minute,double second){
        this.hour=hour;
        this.minute=minute;
        this.second=second;
    }
    public void display(){
        System.out.println("该时间为"+hour+":"+minute+":"+second);
    }
    public void addSecond(int sec){
        this.second+=sec;
    }
    public void addMinute(int min){
        this.minute+=min;
    }
    public void addHour(int hour){
        this.hour+=hour;
    }
    public void subSecond(int sec){
        this.second-=sec;
    }
    public void subMinute(int min){
        this.minute-=min;
    }
    public void subHour(int hour){
        this.hour-=hour;
    }
}
