package Birds;

public class test {
    public void getInstance(bird bird){
        bird.sd();
    }



    public static void main(String[] args) {
        test n =  new test();
        n.getInstance(new dayan());
        n.getInstance(new gezi());
        bird b = new gezi();
        gezi g = (gezi)b;
        g.fei();
        g.sd();
//        bird b
//        gezi g = (gezi) b;
//        g.eat();







//        gezi d = new gezi();
//        d.sd();
//        d.fei();
//        dayan e = new dayan();
//        e.fei();
//        e.sd();
//        mifeng r = new mifeng();
//        r.cn();
//        r.fei();
//        System.out.println(r.t_1);
//        mayi m = new mayi();
//        m.cn();
//        m.fei();
//        System.out.println(m.t_1);
    }
}
