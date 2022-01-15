package meiju;

public class test {
    public static void main(String[] args) {
        colors color = colors.GREEN;
        System.out.println(color);
        System.out.println(color.name());
        System.out.println(color.ordinal());
        switch (color){
            case GREEN:
                System.out.println("绿灯");
                break;
            case RED:
                System.out.println("红灯");
                break;
            case BLACK:
                System.out.println("白灯");
                break;
            default:
                System.out.println("正在升级中......");
                break;
        }
    }
}
