package Web;

public class web {
    int ID;
    int password;
    int email;
    public web(int ID,int password,int email){
        this.ID=ID;
        this.password=password;
        this.email=email;
        System.out.println("email地址是"+Integer.toString(ID)+"@gameshool.com");
        System.out.println("ID地址是"+Integer.toString(ID));
        System.out.println("密码是"+Integer.toString(password));
    }

}
