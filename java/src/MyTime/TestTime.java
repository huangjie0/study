package MyTime;

public class TestTime {
    public static void main(String[] args) {
        mytime my_time = new mytime(1,20,30);
        my_time.display();
        my_time.addHour(5);
        my_time.display();
        my_time.subHour(6);
        my_time.display();
    }
}
