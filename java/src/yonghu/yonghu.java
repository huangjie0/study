package yonghu;

import java.util.ArrayList;
import java.util.List;

public class yonghu {
    private String bianhao;
    private String username;
    private String password;
    private String xingbie;
    private String lianxi;
    private String[]aihao;
    private List<order> orders;
    public String getBianhao(){
        return bianhao;
    }
    public void setBianhao(String bianhao){
        this.bianhao=bianhao;
    }
    public String getUsername(){
        return username;
    }
    public void setUsername(String username){
        this.username=username;
    }
    public String getPassword(){
        return password;
    }
    public void setPassword(String password){
        this.password=password;
    }
    public String getXingbie(){
        return xingbie;
    }
    public void setXingbie(String xingbie){
        this.xingbie=xingbie;
    }
    public String getLianxi(){
        return lianxi;
    }
    public void setLianxi(String lianxi){
        this.lianxi=lianxi;
    }
    public String[] getAihao(){
        return aihao;
    }
    public void setAihao(String[] aihao){
        this.aihao=aihao;
    }
    public List<order> getOrders(){
        return orders;
    }
    public void setOrders(List<order> orders){
        this.orders=orders;
    }
    public yonghu(String bianhao,String username,String password,String xingbie,String lianxi){
        super();
        this.bianhao=bianhao;
        this.username=username;
        this.password=password;
        this.lianxi=lianxi;
        this.xingbie=xingbie;
    }
    public yonghu(){
        super();
    }
}
