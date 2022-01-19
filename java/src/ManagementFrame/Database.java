package ManagementFrame;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Database {
    /*存放商品集合*/
    private List<product>plist;
    //初始化数据
    public Database(){
        init();
    }
    /*初始化所有商品的方法*/
    public void init(){
        initData();
        initProductData();
    }
    /*初始化集合对象*/
    public void initData(){
        plist = new ArrayList<product>();
    }
    /*初始化商品对象方法*/
    public void initProductData(){
        product p1 = new product("100","D://hjvchfhdjvhjh","葡萄",5,"葡萄",new Date(),new Date(),100);
        product p2 = new product("100","D://chfjhcjhvjkfhvjkfhvj","苹果",10,"苹果",new Date(),new Date(),110);
        product p3 = new product("100","D://cjdhcfgfhvghvg","梨子",20,"梨子",new Date(),new Date(),102);
        product p4 = new product("100","D://hcdcghj","柠檬",12,"柠檬",new Date(),new Date(),99);
        product p5 = new product("100","D://hhgcgcghjghjcghhg","柚子",14,"柚子",new Date(),new Date(),102);
        plist.add(p1);
        plist.add(p2);
        plist.add(p3);
        plist.add(p4);
        plist.add(p5);
    }
    public List<product> getPlist(){
        return plist;
    }
    public void setPlist(List<product>plist){
        this.plist=plist;
    }
}
