package duqu;

import java.io.*;
import java.util.zip.InflaterInputStream;

public class duqu {
    //把两个文件中的内容写入到一个指定内容中
    public static void main(String[] args) {
        InputStreamReader isr = new InputStreamReader(new InflaterInputStream("E://tmp//11.txt/"));
        InputStreamReader isr_1 = new InputStreamReader(new InflaterInputStream("E://tmp//22.txt/"));
        new OutputStream(new OutputStream("E:"))
    }
}
