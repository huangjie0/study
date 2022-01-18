package properties;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class testproperties {
    public static void main(String[] args) throws IOException {
        Properties pro = new Properties();
        FileInputStream fis = new FileInputStream("src/properties/properties.properties");
        pro.load(fis);

        System.out.println(pro.getProperty("id"));
        System.out.println(pro.getProperty("usename"));
        System.out.println(pro.getProperty("password"));
    }
}
