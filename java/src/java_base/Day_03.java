package java_base;

import java.sql.Array;
import java.util.Arrays;

public class Day_03 {
    // public static void main(String[] args) {

        // int[] a=new int[3];
        // int b[]=new int[2];
        // int[]c={10,20,30};//只能在声明时使用，创建数组。
        // int[]d=new int[]{20,30};
        // boolean[]f=new boolean[3];
        // char[] g=new char[3];
        // String[] h=new String[3];
        // String[] i={"hello","world"};

        // int[]e=null;
        // e = new int[]{10,10};
        // System.out.println(Arrays.toString(a));

        //访问数组元素（取、赋值）
        // a[0]=100;
        // System.out.println(a[0]);

        // for(int ii=0;ii<a.length;ii++){
        //     System.out.print(a[ii]+",");
        // }
        // System.out.println();

        // int kk=20;
        // int[] k={10,kk};
        // System.out.println(Arrays.toString(k));

        // int[] l=null;
        // System.out.println(l[0]);

        // for(String s : i){
        //     System.out.println(s);
        // }

        // int[]n=new int[10];
        // for(int p=0;p<n.length;p++){
        //     int ran= (int)(Math.random()*100);
        //     n[p]=ran;
        // }System.out.println(Arrays.toString(n));

        //案例1
        // int max=n[0];
        // for(int q=1;q<n.length;q++){
        //     System.out.println(n[q]);
        //     if(n[q+1]>n[q]){
        //         int tem = n[q+1];
        //         n[q+1]=n[q];
        //         n[q] = tem;
        //         max = n[q];   
        //     }
            
        // }
        // System.out.println("最大值是"+max);
      //用数组来存储斐波那契数列
      // int[] a= new int[20];
      // a[0]=a[1]=1;
      // System.out.println(Arrays.toString(a));

      // for(int i=0;i<=a.length-3;i++){
      //   a[i+2]=a[i]+a[i+1];
      // }
      // System.out.println(Arrays.toString(a));

      //将数组中元素进行反转
      // for(int f=0,j=a.length-1;f<a.length/2;f++,j--){
      //     int t=a[f];a[f]=a[j];a[j]=t;
      // }
      // System.out.println(Arrays.toString(a));

      //冒泡排序
      // int[] h={1,2,5,4,3,9,8,7,0,6,10};
      // System.out.println(Arrays.toString(h));
      // for(int i=0;i<h.length-1;i++){
      //     for(int d=0;d<h.length-1-i;d++){
      //       if(h[d]>h[d+1]){
      //           int temp=h[d];
      //           h[d]=h[d+1];
      //           h[d+1]=temp;
      //       }
      //     }  
      // }
      // System.out.println(Arrays.toString(h));

      // int[] h={1,7,8,6,2,4,10,100,15};
      // int e=11;
      // int del=-1;
      //指定元素包含该指定的数字
      // for(int i=0;i<h.length;i++){
      //   if(e!=h[i]){
      //     continue;
      //   }
      //   else{
      //     del=i;
      //     System.out.println(del);
      //   }
      // }
      // System.out.println(del);

      //多维数组
      //定义二位数组
    //   int [][]a=new int [3][2];
    //   for(int[]i:a){
    //     for(int ii:i){
    //           System.out.println(ii);
    //     }
    //     System.out.println();
    //   }
    //   int [][][]b;
    // }
    // public static void HelloWorld(String name){
    //   System.out.println("hello"+name);
    // }
    // public static int add(int a,int b){
    //   return a+b;
    // }
      // public static void main(String[] args) {
      //    HelloWorld("黄杰");
      //    int res = add(1, 2);
      //    System.out.println(res);
      // }
      // public static long sum(long a,long b,long... args){
      //   long r=a+b;
      //   if(null!=args){
      //     for(long i:args){
      //       r+=i;
      //     }
      //   }
      //     return r;
      //   }
        //求任意数量的最小值
        public static int min(int a,int b,int... args){
          if( a > b){
            return b;
          } else{
            b=a;
            return b; 
          }
          // if(args!=null){
          //  for(int c:args){
          //     if(c<b){
          //       return c;
          //     }else{
          //       return b;
          //     }
          //  }
          // }

        }
        //返回阶乘
        public static long JC(long a){
          if(a==1){
            return 1;
          }else{
            return a*JC(a-1);
          }
        }
        //随机整数
        public static int zs(){
          int z = (int)Math.round( Math.random()*10);
          return z;
        }
        //判断是否为奇数
        public static boolean isOdd(int a){
          if(a%2==0){
            return false;
          }else{
            return true;
          }
        }
        //定义一个方法。该方法返回一个数组（int型）。该方法根据指定参数n，创建n长度的数组并返回。
        public static int[] CJ(int n){
          int[]arr=new int[n];
          return arr;
        }

        //定义一个方法，该方法有两个参数，第一个参数是数组，第二个参数是用来填充数组中所有元素的值。
        public static int[] LJ(int[]arr_1,int a){
          for(int i=0;i<arr_1.length;i++){
            arr_1[i]=a;
          }
          return arr_1;
        }
        //定义函数实现冒泡排序...
        public static int[] Isarr(int[]arr,boolean asc){
          if(true==asc){
            for(int i=0;i<arr.length-1;i++){
              for(int j=0;j<arr.length-1-i;j++){
                  if(arr[j]>arr[j+1]){
                    int tmp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=tmp;
                  }
              }
            } return arr;
          }else{
            for(int i=0;i<arr.length-1;i++){
              for(int j=0;j<arr.length-1-i;j++){
                  if(arr[j]<arr[j+1]){
                    int tmp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=tmp;
                  }
              }
            } return arr;
          }
        }
        //调用函数阶段
        public static void main(String[] args) {
        long y= min(2,5,6);
        System.out.println(y);  
        boolean r= isOdd(7);
        System.out.println(r);
        long v = JC(10);
        System.out.println(v);
        int j = zs();
        System.out.println(j);
        int[]dd={2,5,4,6,8,7,10,12};
         Isarr(dd,true);
         System.out.println(Arrays.toString(dd));;
        int[]qq = CJ(10);
        System.out.println(Arrays.toString(qq));
        int[]arr_1=new int[8];
        LJ(arr_1, 7);
        System.out.println(Arrays.toString(arr_1));
        }



      }


    
