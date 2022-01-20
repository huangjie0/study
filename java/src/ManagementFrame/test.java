package ManagementFrame;

import javax.xml.crypto.Data;
import java.util.Date;
import java.util.List;
import java.util.Scanner;

public class test {
    /*商品管理系统的主页*/
    static Scanner scan = new Scanner(System.in);
    public static Database db = new Database();
    public static void showManagementFrameMessage(){
        boolean isloop = true;
        while (isloop){
            System.out.println("欢迎登录商品管理系统页面");
            System.out.println("1、添加商品");
            System.out.println("2、修改商品");
            System.out.println("3、删除商品");
            System.out.println("4、查看所有商品的信息");
            System.out.println("5、退出系统");
            System.out.println("请选择你所需要进行的操作：");
            String input = scan.next();
            //可以判断用户输入的内容
            switch (input){
                case "1":
                    addproduct();
                    break;
                case "2":
                    xgproduct();
                    break;
                case "3":
                    removeProduct();
                    break;
                case "4":
                    showProducts();
                    break;
                case "5":
                    System.out.println("注册已经成功，推出程序");
                    isloop=false;
                    break;
                default:
                    System.out.println("此功能暂时还没有开通，请重新输入！！！！");
                    break;
            }
        }
}
//    ---------------------------以下是所实现以上功能方法的代码-------------------------------------
    //查看所有信息的页面
    public static void showProducts(){
        List<product> plist= db.getPlist();
        //遍历集合
        for(product p:plist){
            System.out.println(p);
        }
    }
    //添加商品的页面方法
    public static void addproduct() throws MyExption{
        boolean isloop =true;
        while (isloop){
            System.out.println("请输入商品的编号");
            //获取用户的编号信息
            String id = scan.next();
            try {
                isID(id);
                System.out.println("请输入你的名称：");
                String ProductName =scan.next();
                //判断用户的名称是否重复
                boolean isProductName = checkProductName(ProductName);
                if (isProductName==false){
                    System.out.println("请输入图片的地址");
                    String img = scan.next();
                    System.out.println("请输入单价");
                    double price = scan.nextDouble();
                    System.out.println("请输入商品描述");
                    String desc=scan.next();
                    System.out.println("请输入库存");
                    int num = scan.nextInt();
                    product p = new product(id,img,ProductName,price,desc,new Date(), new Date(),num);
                    db.getPlist().add(p);
                    System.out.println("新商品添加成功");
                    isloop=false;
                }else {
                    System.out.println("商品重复，请重新输入");
                }
            }catch(MyExption e){
                System.out.println(e.getMessage());
            }
        }
    }
    //判断id是否重复
    public static void isID(String id) throws MyExption{
        List<product> plist =db.getPlist();
        for (product p:plist){
            if (p.getId().equals(id)){
                throw new MyExption("此id已被占用，请重新输入....");
            }
        }
    }
    //判断用户名称是否重复
    public static boolean checkProductName(String ProdectName){
        List<product> plist = db.getPlist();
        for (product p:plist){
            if(p.getProductName().equals(ProdectName)){
                return true;
            }
        }return false;
    }
    //修改产品
    public static void xgproduct(){
        //查看一下产品的信息
        showProducts();
        System.out.println("请您选择修改的名称？");
        String productName = scan.next();
        List<product> plist= db.getPlist();
        product pro = null;
        for (product p:plist){
            if (p.getProductName().equals(productName)){
                pro=p;
                break;
            }
        }
        System.out.println(pro);
        boolean isloop = true;
        while (isloop){
            System.out.println("1、修改的名称");
            System.out.println("2、修改的图片");
            System.out.println("3、修改的价格");
            System.out.println("4、修改的描述");
            System.out.println("5、修改的库存");
            System.out.println("6、退出");
            System.out.println("请输入操作");
            String str =scan.next();
            switch (str){
                case "1":
                    xgproductName(pro);
                    break;
                case "2":
                    System.out.println("请输入图片地址");
                    String imPath = scan.next();
                    pro.setImg(imPath);
                    pro.setUpdate_time(new Date());
                    break;
                case "3":
                    System.out.println("请输入价格");
                    double price = scan.nextDouble();
                    pro.setPrice(price);
                    pro.setUpdate_time(new Date());
                    break;
                case "4":
                    System.out.println("请输入描述");
                    String desc = scan.next();
                    pro.setDesc(desc);
                    pro.setUpdate_time(new Date());
                    break;
                case "5":
                    System.out.println("请输入库存：");
                    int num = scan.nextInt();
                    pro.setNum(num);
                    pro.setUpdate_time(new Date());
                    break;
                case "6":
                    System.out.println("推出程序，返回主页面");
                    isloop=false;
                    break;
                default:
                    System.out.println("选择错误");
                    break;
            }
        }
    }
    public static void xgproductName(product p){
        boolean isloop=true;
        while (isloop){
            System.out.println("请输入一个商品的名称？");
            String pname = scan.next();
            boolean flag = checkProductName(pname);
            if (flag==false){
                p.setProductName(pname);
                p.setUpdate_time(new Date());
                System.out.println("修改名称成功！");
                isloop=false;
            }else {
                System.out.println("名称重复，请重新输入名称");
            }
        }
    }
    public static void removeProduct(){
        showProducts();
        System.out.println("请输入要删除的商品");
        String pname = scan.next();
        List<product> plist = db.getPlist();
        boolean flag=false;
        for (product p:plist){
            if(p.getProductName().equals(pname)){
                db.getPlist().remove(p);
                System.out.println("删除成功");
                flag=true;
                break;
            }
        }
        if (false==false){
            System.out.println("删除失败！！！！！！");
        }
    }
}
