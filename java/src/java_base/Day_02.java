package java_base;
import java.util.Scanner;

// import javax.print.DocFlavor.INPUT_STREAM;

public class Day_02 {
    // static int c;
    public static void main(String[]arg){
        // Day_03.isOdd(4);
//      int a;//没有缺省值
//         System.out.println(c);
//         {
//             int b = 80;
//             System.out.println(b);
//         int d = 1;
//         int e = 2;
//         int f = d+e;
//         System.out.println(f);
//         System.out.println(d - e);
//         System.out.println(3/2);
//         System.out.println(3/2.0);
         //整数除是整数小数除是小数
//         System.out.println(3.0*2);
//         System.out.println('a'+1);
//         long r = 3 * 3L;
//         System.out.println(r);
//         String hi = "hello" + "!";
//         System.out.println(hi);//字符串拼接
//         System.out.println(1+2+"=1+2");
//         System.out.println("1+2="+(1+2));
//         int as = 90;
//         as += 90;
//         System.out.println(4==2);
//         int o = 65;
//         int t = 55;
//         System.out.println(o&t);
//         System.out.println(o|t);
//         System.out.println(~o);
//         System.out.println(o^t);
//         System.out.println(o<<1);
//         System.out.println(o>>2);
//         System.out.println(o>>1);
//         System.out.println(t>>>1);
//         System.out.println(1>10 && 2>1);
//         System.out.println(1>11||2<5);
//         System.out.println(!false);
//         int l = 1>0?10:1;
//         System.out.println(l);
//         int h1=160;
//         int h2=210;
//         int h3=165;
//         int maxh = (h1>h2?h1:h2)>h3?(h1>h2?h1:h2):h3;
//         System.out.println(maxh);
//         System.out.print("hello\n");
//         System.out.print("world\n");
//         double ran = Math.random()*10;
//         int k = (int)ran;
//         System.out.println(k);
//         if(k%2 != 0){
//             System.out.println("有车，打车上班");
//         }else{
//             System.out.println("去公交站");
//             System.out.println("去上班");
//         }
//         System.out.println("---------工作中-------------");

//         int score = (int)Math.round(Math.random()*100);
//         String grad = null;
//         if(score>=90){
//             grad="优";
//         }else {
//             if(score>=80){
//                 grad="良";
//             }else{
//                 if(score>=70){
//                     grad="中";
//                 }else {
//                     grad="差";
//                 }
//             }
//         }
//         System.out.println(score+grad);


//         Scanner input =  new Scanner(System.in);
//         System.out.println("请输入数字几（只能是1~7）");
//         int n=input.nextInt();
//         if(n==1){
//             System.out.println("今天是星期一");
//         }else if(n==2){
//             System.out.println("今天是星期二");
//         }else if(n==3){
//             System.out.println("今天是星期三");
//         }else if(n==4){
//             System.out.println("今天是星期四");
//         }else if(n==5){
//             System.out.println("今天是星期五");
//         }else if(n==6){
//             System.out.println("今天是星期六");
//         }else if(n==7){
//             System.out.println("今天是星期天");
//         }else{
//             System.out.println("输入数字有误请重新输入！！！！！");
//         }

//         int h=0;
//         while(h<54){
//             h++;
//             System.out.println(h);
//             System.out.println("加水");
//         }

//         double q=0.1;
//         int count=0;
//         while(q<=8848.13*1000){
//             q*=2;
//             count+=1;
//         }
//         System.out.println(count);

//        int i=1;
//        do{
//            System.out.println(i);
//            int j=1;
//            do{
//                System.out.println(j+"*"+i+"="+(i*j)+" ");
//                j++;
//             }while(j<=i);
//             System.out.println("\n");
//            i++;
//        }while(i<=9);

     //问题1
    //    int m =1;
    //    do{
    //         System.out.print("$");
    //         m++;
    //         int c=1;
    //         do{
    //             System.out.print("$");
    //             c++;
    //         }while(c<=9);
    //         System.out.print("\n");
    //    }while(m<=9);
       //问题2
    //  int m=1;
    //  while(m<=9){
    //      System.out.print("*");
    //      m++;
    //      int n=1;
    //      while(n<m-1){
    //          System.out.print("*");
    //          n++;
    //      }
    //      System.out.print("\n");
    //  }
        //问题三
//        int m=1;
//         while(m<=9){
//             System.out.print("*");
//             m++;
//             int n=m;
//             while(n<=9){
//                 System.out.print("*");
//                 n++;
//             }
//             System.out.print("\n");
//            }
        //问题四
        //   int m=1;
        //   while(m<=5){
        //       m++;
        //       int n=1;
        //       int r=1;
        //       while(r<m){
        //           r++;
        //          System.out.print(" ");
        //       }
        //       while(n<=8){
        //           System.out.print("*");
        //           n++;
        //       }
        //       System.out.print("\n");
        //      }

        //问题5
        //公鸡5元一只，母鸡3元一只，一元有3只小鸡
        //100只鸡，100元
            // int g,m,x;
            // int count=0;
            // for(int g=1;g<=20;g++){
            //     for(int m=1;m<=33;m++){
            //         for(int x=1;x<100;x++){
            //             if(g+m+x==100 && 5*g+3*m+x/3==100 && x%3==0){
            //                 System.out.println("公鸡"+g+"只");
            //                 System.out.println("母鸡"+m+"只");
            //                 System.out.println("小鸡"+x+"只");
            //                 System.out.println("----------------------------");
            //                 count++;
            //             }
            //         }
            //     }
            // }

            //问题6
        
            // for(int z=100;z<200;z++){
            //     if(z%3==1 && z%4==2 && z%5==3){
            //         System.out.println(z);
            //     }
            // }

            //问题7
            // for(int z=100;z<1000;z++){
            //     if(z%3==2 && z%5==3 && z%7==2){
            //         System.out.println(z);
            //     }
            // }
            // for(int i=0;i<10;i++){
            //     for(int j=0;j<10;j++){
            //         System.out.print(i);
            //         if(j==2)return;
            //     }
            // }

            // for(int a=1;a<10;a++){
            //     if(2 == a){
            //         continue;//结束本次循环进行下一次。
            //     }
            //     System.out.println(a);
            // }

            //枚举案例
            // int n = (int)Math.round(Math.random()*10);
            // System.out.println(n);
            // if(n<=5){
            //     switch(n){
            //         case 1:
            //             Season spring = Season.SPRING;
            //             System.out.println(spring);
            //             Season summer = Season.SUMMER;
            //             System.out.println(summer);
            //             break;
            //         case 2:
            //             Season spring_1 = Season.SPRING;
            //             System.out.println(spring_1);
            //             Season summer_1 = Season.SUMMER;
            //             System.out.println(summer_1);
            //             break;
            //         case 3:
            //             Season spring_2 = Season.SPRING;
            //             System.out.println(spring_2);
            //             Season summer_2 = Season.SUMMER;
            //             System.out.println(summer_2);
            //             break;
            //         case 4:
            //             Season spring_3 = Season.SPRING;
            //             System.out.println(spring_3);
            //             Season summer_3 = Season.SUMMER;
            //             System.out.println(summer_3);
            //             break;
            //         case 5:
            //             Season spring_4 = Season.SPRING;
            //             System.out.println(spring_4);
            //             Season summer_4 = Season.SUMMER;
            //             System.out.println(summer_4);
            //             break;
            //     }
            // }else{
            //     Season autumn = Season.AUTUMN;
            //     System.out.println(autumn);
            //     Season winter = Season.WINTER;
            //     System.out.println(winter);

            // }
            //求100和
            // int sum = 0;
            // for(int i=1;i<=100;i++){
             
            //     sum+=i;
            // }
            // System.out.println(sum);
            //求1到20偶数和
            // int sum=0;
            // for(int i=1;i<=20;i++){
            //     if(i%2==0){
            //         sum+=i;
            //     }
            // }
            // System.out.println(sum);

            // int sum=0;
            // for(int i=1;i<=20;i++){
            //     if(i%2==1)continue;
            //     sum+=i;
            // }
            // System.out.println(sum);

            //水仙花数
            // for(int i=100;i<1000;i++){
            //     int a=i/100%10;
            //     int b=i/10%10;
            //     int c=i%10;
            //     if(i==(a*a*a)+(b*b*b)+(c*c*c)){
            //         System.out.println("水仙花数是"+i);
            //     }
            // }

            //斐波那契数列
            // 1 1 2 3 5 8 13 21....
            // int count=0;
            // int a=1;
            // int b=1;
            // while(count<20){
            //     System.out.println(a);
            //     int c=a+b;
            //     a=b;
            //     b=c;
            //     count++;
        //      }
            for(int l=2;l<=1000;l++){
                for(int v=2;v<=l;v++){
                    if(0 == l%v){
                        if(l!=v){
                            break;
                        }else{
                            System.out.println(l);
                        }
                    }
                }
            }
        }
        
        // public static long jc(long i){
        //     if(i==1){
        //         return 1;
        //     }else{
        //         return i*jc(i-1);
        //     }
        // }
        // public static void main(String[] args) {
        //     long r= jc(3);
        //     System.out.println(r);
}
