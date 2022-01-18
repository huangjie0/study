package yonghu;

import javax.xml.crypto.Data;
import java.util.Date;

public class order {
    private String oid;
    private double total;
    private Date orderDate;
    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    private String remark;
    public String getOid() {
        return oid;
    }

    public void setOid(String oid) {
        this.oid = oid;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }
    public order(String oid, double total, Date orderDate, String remark){
        super();
        this.oid=oid;
        this.total=total;
        this.orderDate=orderDate;
        this.remark=remark;
    }
    public order(){
        super();
    }
}
