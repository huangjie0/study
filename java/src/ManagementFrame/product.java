package ManagementFrame;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.logging.SimpleFormatter;

public class product {
    /*商品的唯一标识*/
    private String id;
    /*商品的名称*/
    private String productName;
    /*商品的图片地址*/
    private String img;
    /*商品的价格*/
    private double price;
    /*商品的描述*/
    private String desc;
    /*添加时间*/
    private Date add_time;
    /*修改时间*/
    private Date update_time;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    /*商品的库存*/
    private int num;

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public Date getAdd_time() {
        return add_time;
    }

    public void setAdd_time(Date add_time) {
        this.add_time = add_time;
    }

    public Date getUpdate_time() {
        return update_time;
    }

    public void setUpdate_time(Date update_time) {
        this.update_time = update_time;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }
    /*构造方法*/
    public product(String id,String img,String productName,double price,String desc,Date add_time,Date update_time,int num){
        this.id=id;
        this.img=img;
        this.productName=productName;
        this.desc=desc;
        this.price=price;
        this.add_time=add_time;
        this.update_time=update_time;
        this.num=num;
    }
    public product(){
        super();
    }
    @Override
    public String toString() {
        return "product{" +
                "id='" + id + '\'' +
                ", productName='" + productName + '\'' +
                ", img='" + img + '\'' +
                ", price=" + price +
                ", desc='" + desc + '\'' +
                ", add_time=" + add_time +
                ", update_time=" + update_time +
                ", num=" + num +
                '}';
    }
}
